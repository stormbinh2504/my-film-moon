import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { LINK_CATALOGUE, PATH_NAME, TYPE_USER } from '../../utils';
import "./Footer.scss"
import logoFull from "../../assets/images/company/logo_full.png"
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
                        <div className="col-xs-12 col-sm-4 column-footer column-1">
                            <div className="widget widget_links">
                                <div className="section-logo">
                                    <div className="block-logo-image item-center">
                                        <img className="img-logo" src={logoFull} />
                                    </div>
                                </div>
                                <div className="section-company-name item-center">
                                    <span>
                                        CÔNG TY TNHH CƠ KHÍ TH VIỆT NAM
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            Nhà cung cấp giá kệ để hàng công nghiệp uy tín nhất Việt Nam với hơn 15 năm kinh nghiệm tư vấn và thi công thực tế
                                        </div>
                                        <div className="section-body-item section-body-label-value">
                                            <div className="label" style={{ marginRight: "3px" }}>Địa chỉ: </div>
                                            <div className="value" style={{ fontWeight: "700" }}>KM số 1, QL3, Mai Lâm, Đông Anh, Hà Nội</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 column-footer column-2">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        THÔNG TIN
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.GUARANTEE}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Chính sách bảo hành</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.SECURITY}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Chính sách bảo mật</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.PAYMENT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Hình thức thanh toán</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.TRANSPORT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Chính sách vận chuyển và giao nhận</a>
                                        </div>
                                        <div className="section-body-item section-body-label-value">
                                            <div className="label" style={{ marginRight: "3px" }}>Email: </div>
                                            <div className="value" style={{ fontWeight: "700" }}>cokhithvietnam@gmail.com</div>
                                        </div>
                                        <div className="section-body-item">
                                            <div className="label">Hotline/zalo: </div>
                                            <div className="phone" style={{ fontWeight: "700" }}><a href="https://zalo.me/0833855955" target="_blank">- 0833.855.955</a></div>
                                            <div className="phone" style={{ fontWeight: "700" }}><a href="https://zalo.me/0362885789" target="_blank">- 0362.885.789</a></div>
                                            <div className="phone" style={{ fontWeight: "700" }}><a href="https://zalo.me/0963959787" target="_blank">- 0963.959.787</a></div>
                                        </div>
                                        <div className="section-body-item section-body-label-value">
                                            <div className="label" style={{ marginRight: "3px" }}>Thời gian làm việc: </div>
                                            <div className="value" style={{ fontWeight: "700" }}>Thứ 2 - Thứ 7, 8h - 17h</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 column-footer column-3">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        DANH MỤC
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className="section-body-wrap">
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.COLLECTIONS}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Sản phẩm</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.PROJECT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Dự án hoàn thành</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.ABOUT_OUR}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Về chúng tôi</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={PATH_NAME.CONTACT}><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Liên hệ</a>
                                        </div>
                                        <div className="section-body-item">
                                            <a href={LINK_CATALOGUE} target="_blank"><i className="fa fa-caret-right" aria-hidden="true" style={{ marginRight: "3px" }}></i>Tải xuống Catalogue</a>
                                        </div>
                                        <div className="section-body-item">
                                            <div className="block-logo-image">
                                                <img className="img-logo" src={dmcaProtected} />
                                            </div>
                                            <div className="block-logo-image" style={{ marginTop: "5px" }}>
                                                <img className="img-logo" src={qrcode} width="85px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 column-footer column-2">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        BẢN ĐỒ
                                    </span>
                                </div>
                                <div className="section-body">
                                    <div className='div-map' style={{ height: "300px" }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.565378710369!2d105.89913097525826!3d21.090014180574677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzI0LjEiTiAxMDXCsDU0JzA2LjEiRQ!5e0!3m2!1svi!2s!4v1715407000505!5m2!1svi!2s" style={{ height: "100%", width: "100%", border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 column-footer column-3">
                            <div className="widget widget_links">
                                <div className="section-title">
                                    <span>
                                        FANPAGE
                                    </span>
                                </div>
                                <div className="section-body">
                                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGiakeTH&tabs=timeline&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="300" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
                            © Bản quyền thuộc về Cơ Khí TH Việt Nam
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