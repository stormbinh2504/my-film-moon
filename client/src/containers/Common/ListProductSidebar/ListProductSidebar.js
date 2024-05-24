import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'
import banner_langnghe from "../../../assets/images/banner_langnghe.png"

import "./ListProductSidebar.scss"

const listProductSideBar = [
    {
        title_lv1: "Kệ để hàng nặng",
        lv2: [
            {
                title_lv2: "Kệ Drive-in",
                path: PATH_NAME.KE_DRIVER_IN
            },
            {
                title_lv2: "Kệ Selective",
                path: PATH_NAME.KE_SELECTIVE
            },
            {
                title_lv2: "Kệ Double Deep",
                path: PATH_NAME.KE_DOUBLE_DEEP
            },
            {
                title_lv2: "Kệ Narrow Aisle",
                path: PATH_NAME.KE_NARROW_AISLE
            },
            {
                title_lv2: "Kệ Pallet di động",
                path: PATH_NAME.KE_PALLET_DI_DONG
            },
            {
                title_lv2: "Kệ con lăn",
                path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK
            },
            {
                title_lv2: "Kệ Pushback",
                path: PATH_NAME.KE_PUSH_BACK
            },
            {
                title_lv2: "Kệ tay đỡ",
                path: PATH_NAME.KE_TAY_DO
            },
            {
                title_lv2: "Kệ khuôn",
                path: PATH_NAME.KE_DE_KHUON_MOULD_RACK
            },
        ]
    },
    {
        title_lv1: "Kệ để trung tải",
        lv2: [
            {
                title_lv2: "Kệ trung tải",
                path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
            },
            {
                title_lv2: "Kệ con lăn trung tải",
                path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
            }
        ]
    },
    {
        title_lv1: "Kệ để hàng nhẹ",
        lv2: [
            {
                title_lv2: "Kệ V hoa",
                path: PATH_NAME.KE_V_HOA
            },
            {
                title_lv2: "Kệ V lỗ",
                path: PATH_NAME.KE_V_LO
            },
        ]
    },
    {
        title_lv1: "Kệ sàn (Mezzanine)",
        path: PATH_NAME.KE_SAN_MEZZANINE
    },
    {
        title_lv1: "Kệ xếp chồng",
        path: PATH_NAME.KE_XEP_CHONG
    },
    {
        title_lv1: "Kệ để hàng tự động (Radio shuttle)",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG
    },
    {
        title_lv1: "Kệ siêu thị",
        path: PATH_NAME.KE_SIEU_THI
    },
]




const ListProductSidebar = () => {

    const history = useHistory()
    const dispatch = useDispatch()


    const onRedirectByPathname = (path) => {
        history.push(path);
    }


    return (
        <div className='list-product-sidebar'>
            <div class="content">
                <div className="block-title">
                    <div className="title">
                        <i class="fa fa-bars" aria-hidden="true" style={{ marginRight: "10px" }}></i>
                        Danh mục sản phẩm
                    </div>
                </div>
                <ul className="list-product">
                    {listProductSideBar && listProductSideBar.length > 0 && listProductSideBar.map((item, index) => {
                        return (
                            <li className='item-lv1'>
                                {item.path &&
                                    <a onClick={(e) => onRedirectByPathname(item.path)} className='title-lv1 active'>
                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                        {item.title_lv1}
                                    </a>
                                }
                                {!item.path &&
                                    <a className='title-lv1'>
                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                        {item.title_lv1}
                                    </a>
                                }
                                <ul >
                                    {item.lv2 && item.lv2.length > 0 && item.lv2.map((item2, index) => {
                                        return (
                                            <li className='item-lv2'>
                                                <a className='title-lv2' onClick={(e) => onRedirectByPathname(item2.path)}>- {item2.title_lv2}</a>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>

                <div className="block-banner" style={{ marginTop: "15px" }}>
                    <img src={banner_langnghe} />
                </div>
            </div >
        </div >
    )
}

export default ListProductSidebar