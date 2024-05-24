import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Payment.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
const Payment = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='payment' className='payment'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.PAYMENT,
                        title: "Hình thức thanh toán"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">HÌNH THỨC THANH TOÁN</div>
                            <div className="block-session">
                                <div className="title-session">Thông tin thanh toán:</div>
                                <div class="body-session">
                                    <div>
                                        + Thanh toán: Thời gian và giá trị thanh toán được hai bên thỏa thuận và thực hiện theo hợp đồng đã ký kết
                                    </div>
                                    <div>
                                        + Giá trị hợp đồng được thanh toán bằng tiền mặt hoặc chuyển khoản vào tài khoản của công ty. Nếu có sự thay đổi về tài khoản thanh toán, công ty sẽ thông báo cho khách hàng bằng văn bản chính thức.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <ListProductSidebar />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
export default Payment