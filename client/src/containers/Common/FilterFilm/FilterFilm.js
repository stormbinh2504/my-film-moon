import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./Home.scss"
import { AnimateCounterNumber } from '../../../../utils';
import { useEffect } from 'react';
import AOS from 'aos';


const FilterFilm = () => {

    useEffect(() => {
        // AOS.init({
        //     offset: 200,
        //     duration: 400,
        //     easing: 'linear',
        //     delay: 50,
        // });
    }, []);

    return (
        <div className='filter-film'>

        </div>
    )
}

export default FilterFilm