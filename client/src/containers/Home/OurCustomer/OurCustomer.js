import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./OurCustomer.scss"
import { useEffect } from 'react';
import AOS from 'aos';


import home_our_customer_1 from "../../../assets/images/home/home_our_customer/home_our_customer_1.png"
import home_our_customer_2 from "../../../assets/images/home/home_our_customer/home_our_customer_2.png"
import home_our_customer_3 from "../../../assets/images/home/home_our_customer/home_our_customer_3.png"
import home_our_customer_4 from "../../../assets/images/home/home_our_customer/home_our_customer_4.png"
import home_our_customer_5 from "../../../assets/images/home/home_our_customer/home_our_customer_5.png"
import home_our_customer_6 from "../../../assets/images/home/home_our_customer/home_our_customer_6.png"
import home_our_customer_7 from "../../../assets/images/home/home_our_customer/home_our_customer_7.png"
import home_our_customer_8 from "../../../assets/images/home/home_our_customer/home_our_customer_8.png"
import home_our_customer_9 from "../../../assets/images/home/home_our_customer/home_our_customer_9.png"
import home_our_customer_10 from "../../../assets/images/home/home_our_customer/home_our_customer_10.png"
import home_our_customer_11 from "../../../assets/images/home/home_our_customer/home_our_customer_11.png"
import home_our_customer_12 from "../../../assets/images/home/home_our_customer/home_our_customer_12.png"


const listOurCustomer = [
    {
        id: "1",
        image: home_our_customer_1,
    },
    {
        id: "2",
        image: home_our_customer_2,
    },
    {
        id: "3",
        image: home_our_customer_3,
    },
    {
        id: "4",
        image: home_our_customer_4,
    },
    {
        id: "5",
        image: home_our_customer_5,
    },
    {
        id: "6",
        image: home_our_customer_6,
    },
    {
        id: "7",
        image: home_our_customer_7,
    },
    {
        id: "8",
        image: home_our_customer_8,
    },
    {
        id: "9",
        image: home_our_customer_9,
    },
    {
        id: "10",
        image: home_our_customer_10,
    },

    {
        id: "11",
        image: home_our_customer_11,
    },
    {
        id: "12",
        image: home_our_customer_12,
    },
]

const OurCustomer = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);
    return (

        <div id="our-customer" className="home our-customer" data-aos="fade-down">
            <div class="container">
                <div class="section-heading text-center">
                    <h2 className="section-title">
                        <span className="title">
                            KHÁCH HÀNG CỦA CHÚNG TÔI
                        </span>
                        <span className="extra-box">
                            <div className="img-extra">

                            </div>
                        </span>
                    </h2>
                </div>
                <div className="row">
                    {listOurCustomer && listOurCustomer.length > 0 && listOurCustomer.map((item, index) => {
                        return (
                            <div className="col-6 col-sm-4 col-md-2 block-brand">
                                <div class="img-brand">
                                    <img src={item.image} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurCustomer