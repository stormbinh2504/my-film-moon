import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from '../../redux/actions'
import * as actions from '../../redux/actions'
import { LINK_CATALOGUE, PATH_NAME, openInNewTab, setPathName } from '../../utils';
import "./Header.scss"
import logoFull from "../../assets/images/company/logo_full.png"
import MenuSidebar from '../MenuSidebar/MenuSidebar';


// let phone = 
const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app } = state
    const { menuActive } = app

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onRedirectHome = () => {
        history.push("/");
    }

    const onScrollStickyHeader = () => {
        let containerHeader = document.getElementById("container-header");
        let headerWarp = document.getElementById("header-wrap");
        let sticky = containerHeader.offsetTop;
        console.log("binh_check_scroll", window.pageYOffset, sticky)
        if (window.pageYOffset > sticky) {
            headerWarp.classList.add("sticky-header")
        } else {
            headerWarp.classList.remove("sticky-header");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollStickyHeader);

        return () => {
            window.removeEventListener("scroll", onScrollStickyHeader);
        };
    }, []);

    const onRedirectByPathname = (path) => {
        history.push(path);
    }

    const checkActiveMenu = (key) => {
        let pathnameCurent = window.location.pathname
        if (pathnameCurent === key) {
            return true
        }
        return false
    }

    return (
        <div className='header'>
            {isOpenMenu && <MenuSidebar
                setIsOpenMenu={setIsOpenMenu}
            />}
            <div id="container-header" className="container container-header">
                <div className="row w-100">
                    <div className="col-12 col-ms-6 col-lg-2 navbar-logo item-center">
                        <div className='div-img-logo' onClick={onRedirectHome}>
                            <img className="img-logo" src={logoFull} />
                        </div>
                        <div className="header-icon-bars" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="header-extras col-12 col-ms-6 col-lg-10 ">
                        <div className="row w-100 gutters-0 h-100">
                            <div className="extra-item col-4" data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap">
                                    <div className="extra-item-icon item-center">
                                        <a href="tel:0833 855 955"><i className="fa fa-phone" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="extra-item-content">
                                        Hotline
                                        <div className="info-content">
                                            <a href="tel:0833 855 955">0833 855 955</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-item col-4 " data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap extra-email">
                                    <div className="extra-item-icon item-center">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="extra-item-content">
                                        EMAIL
                                        <div className="info-content">
                                            cokhithvietnam@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-item col-4 " data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap extra-time">
                                    <div className="extra-item-icon item-center">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="extra-item-content">
                                        THỜI GIAN LÀM VIỆC
                                        <div className="info-content">
                                            Thứ 2 - Thứ 7, 8h - 17h
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="header-wrap" className="header-wrap">
                <div id="primary-menu" className="menu style-2 center">
                    <div className="container clearfix">
                        <ul className="nav-menu" >
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.HOME) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.HOME)}>Trang chủ</a>
                            </li>
                            <li className={"nav-menu-item nav-menu-submenu " + (checkActiveMenu(PATH_NAME.COLLECTIONS) ? "active" : "")} >
                                <a onClick={() => onRedirectByPathname(PATH_NAME.COLLECTIONS)} className="nav-menu-link" >Sản phẩm</a>
                                <ul className="sub-menu" >
                                    <li className="sub-menu-item">
                                        <a >
                                            <div className="sub-menu-item-text" >Kệ để hàng nặng</div>
                                            <div className="sub-menu-item-icon">
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"> <a onClick={() => onRedirectByPathname(PATH_NAME.KE_DRIVER_IN)}><div className="sub-menu-item-lv2-text" >Kệ Drive-in</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_SELECTIVE)}><div className="sub-menu-item-lv2-text">Kệ Selective</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_DOUBLE_DEEP)}><div className="sub-menu-item-lv2-text">Kệ Double Deep</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_NARROW_AISLE)}><div className="sub-menu-item-lv2-text">Kệ Narrow Aisle</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_PALLET_DI_DONG)}><div className="sub-menu-item-lv2-text">Kệ Pallet di động</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK)}><div className="sub-menu-item-lv2-text">Kệ con lăn</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_PUSH_BACK)}><div className="sub-menu-item-lv2-text">Kệ Push back</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_TAY_DO)}><div className="sub-menu-item-lv2-text">Kệ tay đỡ</div></a></li>
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_DE_KHUON_MOULD_RACK)}><div className="sub-menu-item-lv2-text">Kệ để khuôn</div></a></li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a >
                                            <div className="sub-menu-item-text" >Kệ để hàng trung tải</div>
                                            <div className="sub-menu-item-icon">
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2" >
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_TRUNG_TAI)}><div className="sub-menu-item-lv2-text" >Kệ trung tải</div></a></li>

                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_CON_LAN_TRUNG_TAI)}><div className="sub-menu-item-lv2-text" >Kệ con lăn trung tải</div></a></li>

                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a >
                                            <div className="sub-menu-item-text" >Kệ để hàng nhẹ </div>
                                            <div className="sub-menu-item-icon">
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_V_LO)}><div className="sub-menu-item-lv2-text">Kệ V lỗ</div></a></li>

                                            <li className="sub-menu-item-lv2"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_V_HOA)}><div className="sub-menu-item-lv2-text">Kệ V hoa</div></a></li>
                                        </ul>
                                    </li>


                                    <li className="sub-menu-item"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_SAN_MEZZANINE)}><div className="sub-menu-item-text" >Kệ sàn Mezzanine</div></a></li>



                                    <li className="sub-menu-item"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_XEP_CHONG)}><div className="sub-menu-item-text" >Kệ xếp chồng</div></a></li>



                                    <li className="sub-menu-item"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_DE_HANG_BAN_TU_DONG)}><div className="sub-menu-item-text" >Kệ để hàng tự động</div></a></li>



                                    <li className="sub-menu-item"><a onClick={() => onRedirectByPathname(PATH_NAME.KE_SIEU_THI)}><div className="sub-menu-item-text" >Kệ siêu thị</div></a></li>




                                </ul>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.PROJECT) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.PROJECT)}>Dự án hoàn thành</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.ABOUT_OUR) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.ABOUT_OUR)}>Về chúng tôi</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.CONTACT) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.CONTACT)}>Liên hệ</a>
                            </li>
                            <li className={"nav-menu-item  " + (checkActiveMenu(PATH_NAME.CATALOGUE) ? "active" : "")}>
                                <a onClick={() => { openInNewTab(LINK_CATALOGUE) }}>Tải xuống Catalogue</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Header