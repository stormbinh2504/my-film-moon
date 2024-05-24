import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductDetailDesc.scss"
import InfoContact from '../InfoContact/InfoContact';
const ListDesc = [
    "Giải pháp này cho chi phí đầu tư thấp nhưng sức chứa pallet trong kho hàng cao hơn nhiều.",
    "Sử dụng được tối đa không gian kho chứa hàng",
    "Thuận lợi cho việc sử dụng đa dạng các loại xe nâng.",
    "Có thể thiết kế với giải pháp “Last in / First out” hoặc First in / First out tùy vào nhu cầu kho chứa hàng hoặc khi lưu kho với một lượng lớn sản phẩm cùng chủng loại.",
    "Qua thực tế nhiều năm cung cấp cho thị trường Việt Nam, hệ thống kệ này của Cơ Khí TH Việt Nam rất phù hợp với nhiều lĩnh vực công nghiệp gồm các ngành công nghiệp cơ bản, thực phẩm, và đặc biệt ngành công nghiệp kho lạnh."
]
const ProductDetailDesc = ({ children }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-short-detail'>
            <div class="tab-nav" role="tablist">
                <div class="tab-nav-item">
                    <div className="tab-nav-wrap">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        <span class="">Chi tiết sản phẩm</span>
                    </div>
                </div>
            </div>
            <div className="tab-container">
                {children}
            </div>
            <div className="info-company">
                <p><span style={{ fontSize: "15px" }}><strong>Công ty TNHH Cơ Khí TH Việt Nam</strong></span></p>
                <ul>
                    <li><span style={{ fontSize: "15px" }}>
                        {/* <i class="fa fa-building-o" aria-hidden="true"></i> */}
                        - Địa chỉ: KM số 1, QL3, Mai Lâm, Đông Anh, Hà Nội
                    </span>
                    </li>
                    <li>
                        <span style={{ fontSize: "15px" }}>
                            {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                            - Hotline/zalo:
                            <div>
                                + 0833.855.955
                            </div>
                            <div>
                                + 0362.885.789
                            </div>
                            <div>
                                + 0963.959.787
                            </div>
                        </span>
                    </li>
                    <li>
                        <span style={{ fontSize: "15px" }}>
                            {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                            - Email: cokhithvietnam@gmail.com
                        </span>
                    </li>
                </ul>
            </div>
            <InfoContact />
        </div >
    )
}

export default ProductDetailDesc