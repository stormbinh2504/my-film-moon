import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Transport.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
const Transport = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='transport' className='transport'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.TRANSPORT,
                        title: "Chính sách vận chuyển và giao nhận"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">CHÍNH SÁCH VẬN CHUYỂN VÀ GIAO NHẬN</div>
                            <div className="block-session">
                                <div className="title-session">Thông tin vận chuyển:</div>
                                <div class="body-session">
                                    <div>
                                        Giao hàng miễn phí tại nội thành Hà Nội và các khu vực xung quanh Hà Nội 40km, hoặc các đơn hàng có giá trị từ 30.000.000vnđ trở lên.
                                    </div>
                                    <div>
                                        - Đối với khách hàng ở Hồ Chí Minh, Đồng Nai, Bình Dương chúng tôi sẽ nhờ đối tác giao hàng tận văn phòng nhà xưởng của Quý khách. Hoặc Quý khách lấy hàng trực tiếp tại địa chỉ mà Myteck chuyển hàng tới.
                                    </div>
                                    <div>
                                        - Các tỉnh khác sẽ giao hàng qua dịch vụ chuyển phát nhanh Bưu Điện, Tín Thành, Tân Sơn Nhất. Hai bên sẽ thỏa thuận về hình thức, chi phí vận chuyển phát sinh nếu có trong từng đơn hàng bằng văn bản.
                                    </div>
                                    <div>
                                        VD: Các mặt hàng có trọng lượng {">15kg"} chúng tôi miễn phí vận chuyển khi khách đồng ý chuyển phát bằng đường bộ. Tính phí khi khách yêu cầu chuyển phát nhanh 24h qua máy bay
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
export default Transport