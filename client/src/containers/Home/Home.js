import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.scss"
import { AnimateCounterNumber } from '../../utils';
import { useEffect } from 'react';
import HomeStep from './HomeStep/HomeStep';
import HomeBanner from './HomeBanner/HomeBanner';
import OurCustomer from './OurCustomer/OurCustomer';
import HomeCustomerSay from './HomeCustomerSay/HomeCustomerSay';
import AOS from 'aos';

import slider_1 from "../../assets/images/home/home_slider/slider_1.png"
import slider_2 from "../../assets/images/home/home_slider/slider_2.png"
import slider_3 from "../../assets/images/home/home_slider/slider_3.png"
import slider_4 from "../../assets/images/home/home_slider/slider_4.png"
import bgDes from "../../assets/images/home/bg_des.png"
import HomeImageBanner from './HomeImageBanner/HomeImageBanner';

const Home = () => {

    const reveal = () => {
        let reveals = document.getElementById('home-counter');
        var windowHeight = window.innerHeight;
        var elementTop = reveals.getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            LoadAnimateCounterNumber()
        }
    }

    useEffect(() => {
        // AOS.init({
        //     offset: 200,
        //     duration: 400,
        //     easing: 'linear',
        //     delay: 50,
        // });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const LoadAnimateCounterNumber = () => {
        let text1 = document.getElementById('counter-number1');
        let text2 = document.getElementById('counter-number2');
        let text3 = document.getElementById('counter-number3');
        let text4 = document.getElementById('counter-number4');
        AnimateCounterNumber(text1, 0, 10, 3000);
        AnimateCounterNumber(text2, 0, 100, 3000);
        AnimateCounterNumber(text3, 0, 6500, 3000);
        AnimateCounterNumber(text4, 0, 100, 3000);
        window.removeEventListener("scroll", reveal);
    }

    return (
        <div className='container-home'>
            <div className="slider">
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop={true}
                    autoplay={false}
                    nav={true}
                    autoHeight={true}
                    navText={[
                        '<span class="arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                        '<span class="arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
                    ]}
                // margin={8}
                >
                    <div ><img className="img" src={slider_1} /></div>
                    <div><img className="img" src={slider_2} /></div>
                    <div><img className="img" src={slider_3} /></div>
                    <div><img className="img" src={slider_4} /></div>
                </OwlCarousel>
            </div>
            <section id="content-home" className="content-home">
                <div className="content-wrap">
                    <div id="home-counter" className="home home-counter">
                        <div class="container">
                            <div class="section-heading">
                                <h2 class="section-title">
                                    <span>Công ty TNHH Cơ Khí TH Việt Nam</span>
                                </h2>
                                <div className="wrap-des-company gutters-0">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-7 block-image-conpany">
                                            <img className="mage-conpany" src={bgDes} />
                                        </div>
                                        <div className="col-sm-12 col-md-5 block-des">
                                            <div class="desc">Công ty TNHH Cơ Khí TH Việt Nam kể từ ngày thành lập đến nay đã không ngừng phát triển và trở thành một Công ty hàng đầu chuyên về thiết kế và sản xuất kệ chứa hàng phục vụ mọi đối tượng khách hàng trong nước cũng như xuất khẩu. Với thế mạnh là kinh nghiệm lâu năm cùng với đội ngũ cán bộ kỹ thuật được đào tạo chính qui, công nhân tay nghề cao và dây chuyền khép kín, chúng tôi có khả năng tư vấn, thiết kế và trang bị hệ thống kệ chứa hàng cho quý khách với hiệu quả cao nhất và chi phí hợp lý nhất.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-home-counter">
                                <div class="row w-100">
                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number1" data-count="15">0</span> <span>Năm +</span>
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Kinh nghiệm thực tế
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number2" data-count="100">0</span> +
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Cán bộ công nhân viên
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number3" data-count="8500">0</span> +
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Dự án hoàn thành
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number4">0</span> %
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Khách hàng hài lòng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeStep />
                    <HomeBanner />
                    <HomeImageBanner />
                    <HomeCustomerSay />
                    <OurCustomer />
                </div>
            </section>
        </div>
    )
}

export default Home