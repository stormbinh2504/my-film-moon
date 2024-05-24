import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../redux/actions'
import { alertType } from '../../redux/actions/alertActions'
import { PATH_NAME, ToastUtil } from '../../utils'
import "./Login.scss"
import { appFirebase, uiConfig } from '../../firebase/firebaseconfig';
import { getAuth } from "firebase/auth"; // Update import statement for auth
import { firebaseMethods } from '../../firebase/firebaseMethods';

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => state);

    const [userData, setUserData] = useState({
        "username": "",
        "password": "",
    })
    const [isShowPass, setIsShowPass] = useState(false)


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const ValidateForm = () => {
        if (!userData.username) {
            ToastUtil.error("Username không dược để trống");
            return false
        }
        if (!userData.password) {
            ToastUtil.error("Password không dược để trống");
            return false
        }

        return true
    }

    const Login = async () => {
        if (!ValidateForm()) {
            return
        }
        let body = {
            "username": userData.username,
            "password": userData.password
        }

        dispatch(alertType(true))
        dispatch(loginStart())

        try {
            if (body.username == "admin" && body.password == "123456") {
                dispatch(loginSucess({}));
                dispatch(alertType(false));
                history.push(PATH_NAME.ADMIN); // Chuyển hướng đến trang đăng nhập
                ToastUtil.success("Đăng nhập thành công");
            } else {
                throw Error
            }
        } catch (error) {
            dispatch(loginFail());
            dispatch(alertType(false));
            ToastUtil.errorApi(error, "Đăng nhập không thành công");
        }
    }

    const DeleteAccount = async () => {
        await firebaseMethods.deleteAccount("donamkhanh@gmail.com")
            .then(res => {
                dispatch(alertType(false))
                ToastUtil.success("Xóa thành công");
            })
            .catch(error => {
                dispatch(alertType(false))
                ToastUtil.errorApi(error, "Đăng ký không thành công");
            });
    }

    return (
        <div div className='login' >
            <div div className='form-login' >
                <h3 className="text-uppercase text-center mb-4">Đăng nhập</h3>

                <div className="form-group">
                    <label htmlFor="username">Tải khoản</label>
                    <input type="text" className="form-control-input" id="username"
                        name="username"
                        onChange={handleChangeInput} value={userData.username}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type={isShowPass ? "text" : "password"} className="form-control-input" id="password"
                        name="password"
                        onChange={handleChangeInput} value={userData.password}
                    />
                    <span className="icon-show-pass" onClick={() => { setIsShowPass(!isShowPass) }}>
                        {isShowPass && <i class="fa fa-eye" aria-hidden="true"></i>}
                        {!isShowPass && <i class="fa fa-eye-slash" aria-hidden="true"></i>}
                    </span>
                </div>
                < button
                    type="submit"
                    className="btn btn-submit w-100"
                    // disabled={username && password ? false : true}
                    onClick={Login}
                >
                    Đăng nhập
                </button>
            </div >
            {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth(appFirebase)} /> */}
        </div >
    )
}

export default Login