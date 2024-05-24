import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Contact.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import InfoContact from '../Common/InfoContact/InfoContact';

const Contact = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='contact' className='contact'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.CONTACT,
                        title: "Liên hệ"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='div-map' style={{ height: "300px" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.565378710369!2d105.89913097525826!3d21.090014180574677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzI0LjEiTiAxMDXCsDU0JzA2LjEiRQ!5e0!3m2!1svi!2s!4v1715407000505!5m2!1svi!2s" style={{ height: "100%", width: "100%", border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="info-company">
                                <li>
                                    <i class="fa fa-building-o" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Công ty sản xuất và thương mại
                                        </strong>
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Địa chỉ:&nbsp;
                                        </strong>
                                        KM số 1, QL3, Mai Lâm, Đông Anh, Hà Nội
                                    </span>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Hotline:&nbsp;
                                        </strong>
                                        <div>
                                            - 0833 855 955
                                        </div>
                                        <div>
                                            - 0362.885.789
                                        </div>
                                        <div>
                                            - 0963.959.787
                                        </div>
                                    </span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Email:&nbsp;
                                        </strong>
                                        cokhithvietnam@gmail.com
                                    </span>
                                </li>
                            </ul>

                        </div>
                        <div className="col-12">
                            <InfoContact />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
export default Contact