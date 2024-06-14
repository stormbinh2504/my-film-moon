import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { LINK_CATALOGUE, PATH_NAME, TYPE_USER } from '../../utils';
import "./Footer.scss"
import logo from "../../assets/imgs/company/logo.png"
import dmcaProtected from "../../assets/images/footer/dmca_protected.png"
import qrcode from "../../assets/images/footer/qrcode.png"
import AOS from 'aos';

// let phone = 
const Footer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        // AOS.init({
        //     offset: 200,
        //     duration: 400,
        //     easing: 'linear',
        //     delay: 50,
        // });
    }, []);
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-widgets-wrap">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 column-footer column-1">
                            <div className="widget widget_links">
                                <div className="section-logo">
                                    <div className="block-logo-image item-center">
                                        <img className="img-logo" src={logo} />
                                    </div>
                                </div>
                                <div className="section-company-name item-center">
                                    <span>
                                        Phimme.online
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2 column-footer column-2">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        PHIM LẺ
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.GUARANTEE}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.SECURITY}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.PAYMENT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.TRANSPORT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2 column-footer column-3">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        PHIM BỘ
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.COLLECTIONS}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.PROJECT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.ABOUT_OUR}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.CONTACT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2 column-footer column-4">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        PHIM BỘ
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.COLLECTIONS}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.PROJECT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.ABOUT_OUR}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.CONTACT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Phim hành động</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights" className='copyrights'>
                <div className="container clearfix copyright-links">
                    <div className="row">
                        <div className="col12 col-md-6">
                            © Bản quyền thuộc về Phimme.online
                        </div>
                        <div className="col12 col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer