import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./PageTitle.scss"

// const listPageTitle = [
//     {
//         path: PATH_NAME.COLLECTIONS,
//         title: "Giá kệ"
//     },
//     {
//         path: PATH_NAME.KE_DRIVER_IN,
//         title: "Kệ Drive-In"
//     },
// ]

const PageTitle = ({ listPageTitle }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div id="page-title" className='page-title'>
            <div className="container">
                <div className="wrap-text">
                    <span onClick={() => dispatch(setMenuActive(PATH_NAME.HOME))}>
                        Trang chủ
                    </span>
                    {listPageTitle && listPageTitle.length > 0 && listPageTitle.map((item, index) => {
                        let isActive = listPageTitle.length === (index + 1)
                        return (
                            <>
                                {!isActive && <span
                                    className={" "}
                                    onClick={() => dispatch(setMenuActive(item.path))}
                                >
                                    / {item.title}
                                </span>}
                                {isActive && <span
                                    className={" active"}
                                // onClick={() => dispatch(setMenuActive(item.path))}
                                >
                                    / {item.title}
                                </span>
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default PageTitle