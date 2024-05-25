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
    const { auth, app, user, router } = state
    const { userInfo, isLoggedIn } = user
    const { listCountries, listGenres } = app

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
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.LIST_NEW_FILM) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.LIST_NEW_FILM)}>Phim mới</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.LIST_SINGLE_FILM) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.LIST_SINGLE_FILM)}>Phim lẻ</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.LIST_SERIES_FILM) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.LIST_SERIES_FILM)}>Phim bộ</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.LIST_RAP_FILM) ? "active" : "")}>
                                <a onClick={() => onRedirectByPathname(PATH_NAME.LIST_RAP_FILM)}>Phim chiếu rạp</a>
                            </li>
                            <li className={"nav-menu-item nav-menu-submenu " + (checkActiveMenu(PATH_NAME.COLLECTIONS) ? "active" : "")} >
                                <a onClick={() => onRedirectByPathname(PATH_NAME.COLLECTIONS)} className="nav-menu-link" >Thể loại</a>
                                <ul className="sub-menu" >
                                    <div className="row">
                                        {listGenres && listGenres.length > 0 && listGenres.map((item, index) => {
                                            return (
                                                <div className="col-xs-12 col-sm-4">
                                                    <li className="sub-menu-item">
                                                        <a onClick={() => onRedirectByPathname(item.path)}>
                                                            <div className="sub-menu-item-text" >{item.title}</div>
                                                        </a>
                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </li>
                            <li className={"nav-menu-item nav-menu-submenu " + (checkActiveMenu(PATH_NAME.COLLECTIONS) ? "active" : "")} >
                                <a onClick={() => onRedirectByPathname(PATH_NAME.COLLECTIONS)} className="nav-menu-link" >Quốc gia</a>
                                <ul className="sub-menu" >
                                    <div className="row">
                                        {listCountries && listCountries.length > 0 && listCountries.map((item, index) => {
                                            return (
                                                <div className="col-xs-12 col-sm-4">
                                                    <li className="sub-menu-item">
                                                        <a onClick={() => onRedirectByPathname(item.path)}>
                                                            <div className="sub-menu-item-text" >{item.title}</div>
                                                        </a>
                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Header