import React, { useState, useEffect } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc, movieService } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, FORM_FILM, LIST_TYPE_FILM, ToastUtil, onCopyText, uploadImgToFireBase, deleteFromFirebase } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminAddMovie.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
const { Column, ColumnGroup } = Table;

let DF_BODY = FORM_FILM

// "name": "",
// "avatar": "",
// "totalEpisodes": 1,
// "episodes": [],
// "duration": 0,
// "nameEnglish": "",
// "trailer": {
//     "title": "",
//     "link": "",
// },
// "description": "",
// "tags": [],
// "status": "",
// "quality": "",
// "subtitle": "",
// "category": "",
// "format": "",
// "country": "",
// "genre": [],
// "year": "",
// "director": "",
// "cast": [],
// "rating": 0,
// "views": 0,
// "hot": false,

const AdminAddMovie = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app, user, router } = state
    const { userInfo, isLoggedIn } = user
    const { listCountries, listGenres, listCategories } = app

    const [formFilm, setFormFilm] = useState(DF_BODY)
    const [loading, setLoading] = useState(false);
    const [isChkCode, setIsChkCode] = useState(listGenres.map(() => false)); // Initialize state with all checkboxes unchecked
    const [chkCode, setChkCode] = useState([])
    const [imgFirebaseOld, setImgFirebaseOld] = useState("")

    useEffect(async () => {
    }, []);

    const handleChangeInput = e => {
        console.log("bh_handleChangeInput", e.target)
        const { name, value } = e.target
        setFormFilm((prev) => ({ ...prev, [name]: value }))

    }

    const changeCategory = e => {
        const value = e.target.value
        setFormFilm((prev) => ({ ...prev, ["category"]: value }))
    }
    const changeFormat = e => {
        const value = e.target.value
        setFormFilm((prev) => ({ ...prev, ["format"]: value }))
    }
    const changeCounty = e => {
        const value = e.target.value
        setFormFilm((prev) => ({ ...prev, ["country"]: value }))
    }

    const changeGenreSelect = (value, index) => {
        let cloneIsChkCode = [...isChkCode];
        let newChkCode = [...chkCode];

        if (newChkCode.includes(value)) {
            // If the value is already in the array, remove it
            let indexCode = newChkCode.indexOf(value);
            newChkCode.splice(indexCode, 1);
            cloneIsChkCode[index] = false;
        } else {
            // If the value is not in the array, add it
            newChkCode.push(value);
            cloneIsChkCode[index] = true;
        }

        // Update the states
        setChkCode(newChkCode);
        setIsChkCode(cloneIsChkCode);
    };


    useEffect(() => {
        setImgFirebaseOld(formFilm.avatar)
    }, [formFilm.avatar]);


    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        if (e.target.files.length > 0) {
            await uploadImgToFireBase("avatar", file, setUrlFireBase)
        }
    }


    const setUrlFireBase = async (url) => {
        setFormFilm((prev) => ({ ...prev, ["avatar"]: url }))

        if (!imgFirebaseOld) {
            setImgFirebaseOld(url)
        } else {
            await deleteFromFirebase(imgFirebaseOld, url, setImgFirebaseOld)
        }
    }


    const onHandleUpdate = async () => {
        // if (!validate()) {
        //     return
        // }
        let body = {
            ...formFilm
        }

        dispatch(alertType(true))
        await movieService.createMovie(body)
            .then(res => {
                dispatch(alertType(false))
                ToastUtil.success("Tạo phim thành công");
            })
            .catch(error => {
                dispatch(alertType(false))
                ToastUtil.errorApi(error, "Tạo phim thất bại");
            });
    }

    console.log("bh_AdminAddMovie", formFilm, isChkCode, chkCode)

    return (
        <div div className='admin-add-movie' >
            <div className="admin-add-movie-container">
                <div className="admin-add-movie-content">
                    <div className="page-header">

                    </div>
                    <div className="page-body">
                        <div className="form-group-input">
                            <div className="label">
                                Tên phim
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="name"
                                    value={formFilm.name}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Số tập phim
                            </div>
                            <div className="value">
                                <input type="number"
                                    className="form-control-input"
                                    name="totalEpisodes"
                                    value={formFilm.totalEpisodes}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Thời lượng phim
                            </div>
                            <div className="value">
                                <input type="number"
                                    className="form-control-input"
                                    name="duration"
                                    value={formFilm.duration}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Tên tiếng anh
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="nameEnglish"
                                    value={formFilm.nameEnglish}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Title trailer
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="trailerTitle"
                                    value={formFilm.trailerTitle}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="form-group-input">
                            <div className="label">
                                Link trailer
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="trailerLink"
                                    value={formFilm.trailerLink}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Mô tả phim
                            </div>
                            <div className="value">
                                <textarea type="text"
                                    rows="5"
                                    className="form-control-input"
                                    name="description"
                                    value={formFilm.description}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Tags
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="tags"
                                    value={formFilm.tags}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Trạng thái
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="status"
                                    value={formFilm.status}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Định dạng
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="quality"
                                    value={formFilm.quality}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Ngôn ngữ
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="subtitle"
                                    value={formFilm.subtitle}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Danh mục
                            </div>
                            <div className="value">
                                <select value={formFilm ? formFilm.category : ''} onChange={changeCategory} className="form-control-input">
                                    {listCategories && listCategories.map((item, key) => {
                                        return (<option key={key} value={item.value}>{item.title}</option>)
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Thuộc phim
                            </div>
                            <div className="value">
                                <select value={formFilm ? formFilm.format : ''} onChange={changeFormat} className="form-control-input">
                                    {LIST_TYPE_FILM && LIST_TYPE_FILM.map((item, key) => {
                                        return (<option key={key} value={item.value}>{item.title}</option>)
                                    })}
                                </select>
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Quốc gia
                            </div>
                            <div className="value">
                                <select value={formFilm ? formFilm.country : ''} onChange={changeCounty} className="form-control-input">
                                    {listCountries && listCountries.map((item, key) => {
                                        return (<option key={key} value={item.value}>{item.title}</option>)
                                    })}
                                </select>
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Thể loại
                            </div>
                            <div className="value list-genre-select">
                                {listGenres.map((item, index) => {
                                    return (
                                        <div key={index} className="item-genre-select ">
                                            <input
                                                type="checkbox"
                                                value={item.value}
                                                checked={isChkCode[index]}
                                                onChange={() => changeGenreSelect(item.value, index)}
                                                className="accept checkbox-item"
                                            />
                                            <span className="lookup-content">{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Năm phát hành
                            </div>
                            <div className="value">
                                <input type="number"
                                    className="form-control-input"
                                    name="year"
                                    value={formFilm.year}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Đạo diễn
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="director"
                                    value={formFilm.director}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>


                        <div className="form-group-input">
                            <div className="label">
                                Danh sách diễn viên
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="cast"
                                    value={formFilm.cast}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>



                        <div className="form-group-input">
                            <div className="label">
                                Tỷ lệ sao
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="rating"
                                    value={formFilm.rating}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Số lượt xem
                            </div>
                            <div className="value">
                                <input type="text"
                                    className="form-control-input"
                                    name="views"
                                    value={formFilm.views}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Avatar
                            </div>
                            <div className="value">
                                <div className="change-avatar">
                                    <label htmlFor="image">Select Image</label>
                                    <input
                                        id="image"
                                        className=""
                                        style={{ width: '100%', display: 'none' }}
                                        type="file"
                                        accept=".jpeg,.jpg,.png"
                                        onChange={handleImageChange}
                                        name="files[]"
                                        multiple={false}
                                    />
                                </div>
                                <div className="img-avatar">
                                    {formFilm.avatar ?
                                        <img src={formFilm.avatar} alt='img-avatar' />
                                        :
                                        <img src={""} alt='img-not-found' />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-footer">
                        <div className="container-action style-add">
                            <button class="btn btn-continue" onClick={onHandleUpdate} >Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(AdminAddMovie);