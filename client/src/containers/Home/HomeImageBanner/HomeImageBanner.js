import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeImageBanner.scss"
import { useEffect } from 'react';
import AOS from 'aos';

const HomeImageBanner = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    return (
        <div id="home-image-banner" className="home-image-banner" data-aos="fade-down">
            < div className="home-image-banner-container" >
                <div className="container">
                    <div className="section-content-banner item-center">
                        <div className="section-content-banner-wrap">
                            <div className="wrap-title item-center text-center">
                                MUA GIÁ KỆ NHẬN NHIỀU ƯU ĐÃI
                            </div>
                            <div className="sub-title item-center text-center">
                                “Mua hàng tại CƠ KHÍ TH VIỆT NAM quý khách ngoài được tư vấn miễn phí còn có nhiều ưu đãi đi kèm.”
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HomeImageBanner