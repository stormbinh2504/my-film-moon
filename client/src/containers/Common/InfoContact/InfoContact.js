import React, { useRef, useState } from 'react'
import "./InfoContact.scss"
import { firebaseMethods } from '../../../firebase/firebaseMethods';
import { ToastUtil } from '../../../utils';
// import moment from 'moment';
import moment from 'moment-timezone';

const DF_DATA = {
    name: '',
    phone: '',
    email: '',
    message: '',
    status: 'C',// C: Chờ xử lý, CD : Đã xử lý,
}

const InfoContact = ({ isOpen, toogle }) => {
    const [formContact, setFormContact] = useState(DF_DATA);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

    const validate = () => {
        const { name, phone, email } = formContact
        if (!name) {
            nameRef.current.focus();
            return false
        }
        if (!phone) {
            phoneRef.current.focus();
            return false
        }
        if (!email) {
            emailRef.current.focus();
            return false
        }
        return true
    }

    const handleSubmit = async () => {
        if (!validate()) {
            return
        }
        let data = {
            ...formContact
        }
        let currentTimestampInSeconds = moment().unix();
        data.ts = currentTimestampInSeconds.toString()

        data.formattedDate = moment().tz('Asia/Bangkok').format('DD/MM/YYYY HH:mm:ss')
        data.date = moment().tz('Asia/Bangkok').format('DD/MM/YYYY');
        data.time = moment().tz('Asia/Bangkok').format('HH:mm:ss');

        await firebaseMethods.setDatabaseInFirebase("listContact", data)
            .then(res => {
                ToastUtil.success("Gửi thông tin liên hệ thành công");
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Gửi thông tin liên hệ không thành công");
            });
    }

    const clearData = async () => {
        setFormContact(DF_DATA)
    }

    return (
        <div className="info-contact">
            <div className="wrap-info-contact">
                <div className="wrap-content-right">
                    <div className="title">
                        Liên hệ với chúng tôi
                    </div>
                    <div className="input-info">
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                value={formContact.name}
                                onChange={(e) => setFormContact({ ...formContact, name: e.target.value })}
                                className="form-input" id="name"
                                name="name"
                                placeholder="Nhập tên*"
                                required=""
                                data-error="Please enter your name"
                                ref={nameRef}
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                value={formContact.phone}
                                onChange={(e) => setFormContact({ ...formContact, phone: e.target.value })}
                                className="form-input"
                                id="phone"
                                name="phone"
                                placeholder="Số điện thoại*"
                                required
                                data-error="Please enter your name"
                                ref={phoneRef}
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="email"
                                value={formContact.email}
                                onChange={(e) => setFormContact({ ...formContact, email: e.target.value })}
                                className="form-input"
                                id="email"
                                name="email"
                                placeholder="Email*"
                                required
                                data-error="Please enter your name"
                                ref={emailRef}
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <textarea
                                value={formContact.message}
                                onChange={(e) => setFormContact({ ...formContact, message: e.target.value })}
                                className="form-input"
                                id="message"
                                placeholder="Nội dung yêu cầu"
                                rows="4"
                                data-error="Write your message" required>
                            </textarea>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-send" id="submit" type="submit" onClick={handleSubmit}>
                                Gửi liên hệ
                            </button>
                            <button className="btn btn-clear" onClick={clearData}>
                                Xóa nội dung
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoContact