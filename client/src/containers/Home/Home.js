import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./Home.scss"
import { AnimateCounterNumber } from '../../utils';
import { useEffect } from 'react';
import AOS from 'aos';
import HomeListMovie from './HomeListMovie/HomeListMovie';
import SiderbarMovie from '../SiderbarMovie/SiderbarMovie';
import HomeHotMovie from './HomeHotMovie/HomeHotMovie';


const Home = () => {

    useEffect(() => {
        // AOS.init({
        //     offset: 200,
        //     duration: 400,
        //     easing: 'linear',
        //     delay: 50,
        // });
    }, []);

    return (
        <div className='home'>
            <div className="container">
                <HomeHotMovie />
                <div className="home-content-main">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <HomeListMovie />
                        </div>
                        <div className="col-12 col-md-3">
                            <SiderbarMovie />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home