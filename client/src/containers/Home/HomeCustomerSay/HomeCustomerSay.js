import React from 'react'
import "./HomeCustomerSay.scss"
import Slider from "react-slick";
import { useEffect } from 'react';

// import nextArrow from "../../../assets/images/home/home_staff/nextArrow.svg"
// import prevArrow from "../../../assets/images/home/home_staff/prevArrow.svg"

// import next from "../../../assets/images/home/home_staff/next.svg"
// import prev from "../../../assets/images/home/home_staff/prev.svg"
import AOS from 'aos';

import home_customer_say_1 from "../../../assets/images/home/home_customer_say/home_customer_say_1.png"
import home_customer_say_2 from "../../../assets/images/home/home_customer_say/home_customer_say_2.png"
import home_customer_say_3 from "../../../assets/images/home/home_customer_say/home_customer_say_3.png"
import home_customer_say_4 from "../../../assets/images/home/home_customer_say/home_customer_say_4.png"

const listCustomer = [
    {
        urlImage: home_customer_say_1,
        name: "Nguyễn Vĩnh Tuyên",
        position: "Giám đốc Công ty Telecom",
        subtitle: "“Một doanh nghiệp đã mang lại cho Tôi hơn cả sự mong đợi. Tôi rất hài lòng nhà kho của Chúng Tôi, đơn vị đã rất nhiệt tình và cam kết thời gian hoàn thành đúng tiến độ như đã yêu cầu.”",
    },
    {
        urlImage: home_customer_say_2,
        name: "Dương Thị Mai Hoa",
        position: "Giám đốc Công ty Rạng Đông",
        subtitle: "“Tôi nghĩ đây là một doanh nghiệp sẽ phát triển mạnh trong tương lại, Họ làm việc bằng trái tim và lấy uy tín là tiêu chí ưu tiên trong dịch vụ. Chúc công ty ngày càng vững mạnh.”",
    },
    {
        urlImage: home_customer_say_3,
        name: "Nguyễn Sinh Hùng",
        position: "Phó giám đốc công ty Thiên Long",
        subtitle: "“Công ty cùng chúng tôi phát triển hệ thống kệ kho bãi một cách chuyên nghiệp nhất, giúp tiết kiệm nhiều chi phí đem lại năng suất lao động tăng cao. Chúc công ty ngày càng phát triển.”",
    },
    {
        urlImage: home_customer_say_4,
        name: "Nguyễn Thị Nga",
        position: "Phó giám đốc ngân hàng HSBC",
        subtitle: "“Đội Ngũ Chăm Sóc Khách Hàng Tận Tình chu đáo, sản phẩm giá kệ siêu thị dùng rất tốt bền chịu được sức nặng. Đơn vị vận chuyển đến nhanh chóng, giá cả hợp lý. Chúc đơn vị kinh doanh thuận lợi!”",
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`btn-prev ${className} item-center`}
            onClick={onClick}
        >
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, to, onClick } = props;
    return (
        <button
            className={`btn-next ${className} item-center`}
            onClick={onClick}
        >
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </button>
    );
}

const HomeCustomerSay = () => {


    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="home-customer-say" className="home home-customer-say" data-aos="fade-down">
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="section-title">
                        <span className="title">
                            KHÁCH HÀNG NÓI VỀ CƠ KHÍ TH VIỆT NAM
                        </span>
                        <span className="extra-box">
                            <div className="img-extra">

                            </div>
                        </span>
                    </h2>
                    <p className="section-desc">Chúng tôi mang đến sự hài lòng cho khách hàng là mục tiêu ưu tiên của chúng tôi.</p>
                </div>
                <div className="row gutters-0">
                    <div className="col-12">
                        <div className="home-customer-say-content">
                            <Slider autoplay={true} {...settings} >
                                {listCustomer && listCustomer.length > 0 && listCustomer.map((item, index) => {
                                    return (
                                        <div className="leader-item" key={index}>
                                            <div className="wrap-leader-item">
                                                <div className="leader-image item-center">
                                                    <img src={item.urlImage} />
                                                </div>
                                                <div className="leader-info">
                                                    <div className="description">{item.subtitle}</div>
                                                    <div className="line"></div>
                                                    <div className="name item-center">{item.name}</div>
                                                    <div className="location item-center">{item.position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HomeCustomerSay