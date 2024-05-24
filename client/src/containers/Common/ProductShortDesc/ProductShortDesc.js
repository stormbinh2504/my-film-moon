import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductShortDesc.scss"
const ProductShortDesc = ({ listDesc }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-short-desc'>
            <h3 class="title">Ưu điểm:</h3>
            <ul>
                {listDesc && listDesc.length > 0 && listDesc.map((item, index) => {
                    return (
                        <li>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span>{item}</span>
                        </li>
                    )
                })}

            </ul>
        </div >
    )
}

export default ProductShortDesc