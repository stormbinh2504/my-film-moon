import React, { useState } from 'react'
import Slider from "react-slick";
import { useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom'
import "./HomeHotMovie.scss"
import AOS from 'aos';
import { PATH_NAME, ToastUtil } from '../../../utils';
import { movieService } from '../../../services';

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

const HomeHotMovie = () => {
    const history = useHistory()
    const [listMovie, setListMovie] = useState([])
    const onRedirectByPathname = (id) => {
        history.push(`${PATH_NAME.INFO_MOVIE}/${id}`);
    }

    useEffect(async () => {
        await fetchListMovie();
    }, []);

    const fetchListMovie = async () => {
        movieService.getMovies()
            .then((data) => {
                if (data && data.length > 0) {
                    setListMovie(data)
                }
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    }


    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
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
        <div id="home-hot-movie" className="home home-hot-movie" data-aos="fade-down">
            <div class="header-list">
                <div className="header-list-wrap">
                    <div class="title-list-index">Phim đề cử</div>
                </div>
            </div>

            <div class="body-list">
                <Slider autoplay={true} {...settings} >
                    {listMovie && listMovie.length > 0 && listMovie.map((item, index) => {
                        const { avatar, name, nameEnglish, year, id, subtitle, status } = item
                        return (
                            <div className="item-movie" onClick={() => onRedirectByPathname(id)}>
                                <div className="wrap-item-movie">
                                    <div className="media-box">
                                        <div className="movie-thumbnail">
                                            <img src={avatar} />
                                        </div>
                                        <div className="pic-tag">
                                            {subtitle} - {status}
                                        </div>
                                        <div className="movie-meta">
                                            <div className="movie-title-1">
                                                {name}
                                            </div>
                                            <div className="movie-title-2">
                                                {nameEnglish} - {year}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div >
    )
}

export default HomeHotMovie