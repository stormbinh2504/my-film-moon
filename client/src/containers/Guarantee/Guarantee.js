import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Guarantee.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
import InfoContact from '../Common/InfoContact/InfoContact';
const Guarantee = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='guarantee' className='guarantee'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.GUARANTEE,
                        title: "Chính sách bảo hành"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">CHÍNH SÁCH BẢO HÀNH</div>
                            <div className="block-session">
                                <div className="title-session">Bảo hành:</div>
                                <div class="body-session">
                                    <div>Mọi sản phẩm của Cơ khí TH Việt Nam đều có một chế độ bảo hành theo tiêu chuẩn và phù hợp với từng loại sản phẩm.
                                    </div>
                                    <div>
                                        Chúng tôi cam kết thực hiện nghĩa vụ bảo hành trong vòng tối đa 48h sau khi nhận được thông báo của khách hàng.
                                    </div>
                                </div>
                            </div>

                            <div className="block-session">
                                <div className="title-session">Bảo trì:</div>
                                <div class="body-session">
                                    <div>
                                        Để đảm bảo sự vận hành ổn định và an toàn của Hệ thống kệ chứa hàng, chúng tôi luôn sẵn sàng cung cấp dịch vụ bảo trì định kỳ và bất cứ khi nào có yêu cầu của Khách hàng.
                                    </div>
                                    <div>
                                        Hệ thống sẽ được kiểm tra và đánh giá, đảm bảo sự vận hành ổn định an toàn, đồng thời phát hiện các hỏng hóc cần được sửa chữa, điều chỉnh.
                                    </div>
                                </div>
                            </div>


                            <div className="block-session">
                                <div className="title-session">Đội ngũ nhân sự</div>
                                <div class="body-session">
                                    <div>
                                        Những ngày mới thành lập chúng tôi mới chỉ có khoảng 80 công nhân viên làm việc tại nhà máy và văn phòng. Nhưng hiện nay, sau nhiều năm phát triển, đội ngũ công nhân viên đã tăng lên rất nhiều, học đều là những nhân viên có bằng cấp cao, rất chuyên nghiệp và không ngừng sáng tạo. Hiện tại, Cơ khí TH Việt Nam có đến 50 nhân viên thuộc khối văn phòng và 140 công nhân viên thuộc khối lắp đặt, vận chuyển. Sự vươn mình không ngừng của Cơ khí TH Việt Nam đã đánh dấu một dấu mốc ấn tượng, để giờ đây cái tên Cơ khí TH Việt Nam luôn đứng đầu trên thanh tìm kiếm của thị trường giá kệ siêu thị đầy cạnh tranh khốc liệt.
                                    </div>
                                    <div>
                                        Đặc biệt, Cơ khí TH Việt Nam luôn tạo điều kiện tốt nhất để nhân viên có thể phát huy tài năng kinh doanh, bộc lộ các sở trường, đầy đủ về vật chất và phong phú về tinh thần, không ngừng sáng tạo, hoàn thiện các sản phẩm và có trách nhiệm chung với công ty cũng như cộng đồng.
                                    </div>
                                </div>
                            </div>

                            <div className="block-session">
                                <div className="title-session">Sửa chữa, thay thế, nâng cấp:</div>
                                <div class="body-session">
                                    <div>
                                        Các hỏng hóc cần sửa chữa thay thế cũng như mọi nhu cầu nâng cấp, điều chỉnh của khách hàng sẽ được đáp ứng trong thời gian sớm nhất, hạn chế tối đa ảnh hưởng đến vận   hành của hệ thống.
                                    </div>
                                </div>
                            </div>

                            <div className="block-session">
                                <div className="title-session">Tháo dỡ, di dời:</div>
                                <div class="body-session">
                                    <div>
                                        Chúng tôi cung cấp dịch vụ tháo dỡ, di dời Hệ thống kệ chứa hàng theo yêu cầu với tính chuyên nghiệp cao.
                                    </div>
                                    <div>
                                        Hệ thống kệ sẽ được lắp đặt lại tại địa điểm mới đảm bảo tiêu chuẩn và mọi yêu cầu của khách hàng. Các chi tiết cần bổ sung, sửa chữa, thay thế sẽ được cung cấp với thời gian nhanh nhất, đảm bảo tiến độ công việc.
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
export default Guarantee