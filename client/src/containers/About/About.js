import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./About.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import InfoContact from '../Common/InfoContact/InfoContact';
const About = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='about' className='about'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.ABOUT_OUR,
                        title: "Về chúng tôi"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="block-session">
                        <div className="title-session">Giới thiệu công ty</div>
                        <div class="body-session" style={{ marginBottom: "20px" }}>
                            <div>Công ty Cơ khí TH Việt Nam kể từ ngày thành lập đến nay đã không ngừng phát triển và trở thành một Công ty hàng đầu chuyên về thiết kế và sản xuất Kệ chứa hàng phục vụ mọi đối tượng khách hàng trong nước cũng như xuất khẩu.
                            </div>
                            <div>
                                Với thế mạnh là kinh nghiệm lâu năm cùng với đội ngũ cán bộ kỹ thuật được đào tạo chính qui, công nhân tay nghề cao và dây chuyền khép kín, chúng tôi có khả năng tư vấn, thiết kế và trang bị hệ thống kệ chứa hàng cho quý khách với hiệu quả cao nhất và chi phí hợp lý nhất.
                            </div>
                        </div>
                        <div className="img-session">
                            <img src={about} />
                        </div>
                    </div>

                    <div className="block-session">
                        <div className="title-session">Giá trị cốt lõi</div>
                        <div class="body-session">
                            <div>
                                Cơ khí TH Việt Nam luôn có những tầm nhìn chiến lược, định hướng rõ ràng để trở thành một doanh nghiệp kiểu mẫu, lớn mạnh không ngừng và phát triển bền vững. Với quyết định đúng đắn trong đầu tư, sự lao động sáng tạo, cùng với trang thiết bị hiện đại, tân tiến, chúng tôi luôn cố gắng đem lại sự hài lòng cho quý khách hàng. Ngoài ra, công ty Cơ khí TH Việt Nam luôn tạo điều kiện làm việc tốt nhất để nhân viên có thể phát huy tối đa tài năng, tinh thần trách nhiệm trong công việc và cộng đồng.
                            </div>
                            <div>
                                Trong suốt nhiều năm qua, niềm tin và sự hài lòng của hơn 100.000 quý đối tác trong và ngoài nước chính là điều mà Cơ khí TH Việt Nam đã đạt được và ghi dấu ấn mạnh mẽ. Hơn nữa, đây cũng là động lực giúp Cơ khí TH Việt Nam phát triển không ngừng và luôn cố gắng hoàn thiện để có thể hợp tác với nhiều quý khách hàng trong tương lai.
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
                        <div className="title-session">Cam kết từ Cơ khí TH Việt Nam</div>
                        <div class="body-session">
                            <div>
                                Cơ khí TH Việt Nam có rất nhiều chi nhánh và đại lý rộng khắp toàn quốc nên việc vận chuyển và lắp đặt kệ siêu thị rất dễ dàng, nhanh chóng. Với mục tiêu trở thành một trong những công ty hàng đầu Việt Nam, Cơ khí TH Việt Nam cam kết sẽ đưa ra thị trường những sản phẩm có chất lượng tốt, giá thành cạnh tranh và vô vàn nhiều ưu đãi hấp dẫn dành cho quý khách hàng.
                            </div>
                            <div>
                                Với sự tin yêu của các đối tác trong nhiều năm qua, Cơ khí TH Việt Nam đảm bảo luôn đặt uy tín lên hàng đầu và luôn kinh doanh với mục đích vì lợi ích của khách hàng là chủ yếu. Chúng tôi luôn có các chính sách bảo hành các sản phẩm kệ siêu thị và nhiều sản phẩm khác do chúng tôi sản xuất. Thời gian bảo hành lên đến 5 năm, bảo hành độ bền lên đến 10 năm, nên quý khách hoàn toàn có thể tin dùng.
                            </div>
                        </div>
                    </div>

                    <InfoContact />
                </div>
            </section >
        </div >
    )
}
export default About