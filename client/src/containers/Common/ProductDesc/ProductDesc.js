import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductDesc.scss"

import product_desc_call from "../../../assets/images/product_desc/product_desc_call.png"
import product_desc_zalo from "../../../assets/images/product_desc/product_desc_zalo.png"

const ProductDesc = ({ productDesc }) => {
    const { title } = productDesc

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-desc'>
            <h2 className="product-title">{title}</h2>
            <div className="product-status">Tình trạng: Sản xuất theo đơn đặt hàng</div>
            <div className="product-price">Giá : Theo thiết kế</div>
            <div className="clear"></div>

            <div className="btn-wrap">
                <a className="phone item-center" href="tel:0833855955">
                    <img src={product_desc_call} alt="icon" />
                    Gọi ngay 0833 855 955
                </a>
                <div className="chat-require">
                    <a className="chat item-center" href="https://zalo.me/0833855955" target="_blank">
                        <img src={product_desc_zalo} alt="icon" />
                        Chat
                    </a>
                    <a className="require item-center" href="/pages/lien-he" >
                        Yêu cầu tư vấn
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ProductDesc