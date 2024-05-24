import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Security.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
import InfoContact from '../Common/InfoContact/InfoContact';
const Security = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='security' className='security'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.SECURITY,
                        title: "Chính sách bảo mật"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">CHÍNH SÁCH BẢO MẬT THÔNG TIN</div>
                            <div className="block-session">
                                <div className="title-session">Cơ khí TH Việt Nam cam kết bảo mật thông tin của khách hàng:</div>
                                <div class="body-session">
                                    <div>
                                        + Các thông tin của khách hàng khi sử dụng dịch vụ sẽ được bảo mật và không tiết lộ Thông tin cá nhân của quý khách. Không tiết lộ cho bên thứ ba không liên quan khi không có sự đồng ý của Quý Khách hàng.
                                    </div>
                                    <div>
                                        + Sử dụng thông tin cá nhân: Trong trường hợp cần thiết, Cơ khí TH Việt Nam có thể sử dụng thông tin của Khách hàng trên hệ thống để liên hệ như gọi điện, gửi mail, thư cảm ơn…
                                    </div>
                                    <div>
                                        + Chia sẻ thông tin cá nhân: Cơ khí TH Việt Nam cam kết không tiết lộ bất kỳ thông tin nào của Khách hàng. Ngoại trừ một số trường hợp cần thiết như: Khi có yêu cầu của các cơ quan pháp luật, trong trường hợp mà chúng tôi tin rằng điều đó sẽ giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật,.
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
export default Security