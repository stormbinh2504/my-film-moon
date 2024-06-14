import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { LIST_TYPE_CATEGORIES, PATH_NAME, ToastUtil } from '../../utils';
import "./Movie.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import InfoContact from '../Common/InfoContact/InfoContact';
import { movieService } from '../../services';
import Slider from "react-slick";

import IMG_STAR_OFF from "../../assets/imgs/info_movie/star_off.png"
import IMG_STAR_ON from "../../assets/imgs/info_movie/star_on.png"
import IMG_CAST_IMAGE from "../../assets/imgs/info_movie/cast_image.png"
import SiderbarMovie from '../SiderbarMovie/SiderbarMovie';
import ListTypeMovie from '../Home/HomeListMovie/ListTypeMovie/ListTypeMovie';
import StarRating from '../InfoMovie/StarRating/StarRating';
// https://phimmoiv2.net/phim/vay-ham-ke-trung-phat


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const Movie = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app, user, router } = state
    const { userInfo, isLoggedIn } = user
    const { isInitialized, listCountries, listGenres, listCategories } = app
    const { id, episode } = useParams();
    const [formFilm, setFormFilm] = useState({})
    const [formEpisode, setFormEpisode] = useState({})


    useEffect(() => {
        const initializeAndFetch = async () => {
            if (!isInitialized) return;
            await fetchMovieById();
            await fetchEpisodeById();
        };

        initializeAndFetch();
    }, [isInitialized]);

    const fetchMovieById = async () => {
        movieService.getMovieById(id)
            .then(async (data) => {
                setFormFilm(data)
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    }

    const fetchEpisodeById = async () => {
        let idBody = id
        if (idBody) {
            movieService.getEpisodeByMovieId(idBody)
                .then((data) => {
                    setFormEpisode(data)
                })
                .catch((error) => {
                    ToastUtil.errorApi(error)
                });
        }
    }


    const onRedirectByPathname = (pathName) => {
        if (pathName) {
            history.push(pathName);
        }
    }


    let castArr = []
    if (formFilm && formFilm.cast && formFilm.cast.length > 0) {
        castArr = formFilm.cast.split(',').map(name => name.trim());
    }
    let tagsArr = []
    if (formFilm && formFilm.tags && formFilm.tags.length > 0) {
        tagsArr = formFilm.tags.split(',').map(name => name.trim());
    }

    console.log("bh", useParams())
    return (
        <div id='movie' className='movie'>
            <div className="container">
                <PageTitle
                    listPageTitle={[
                        {
                            path: PATH_NAME.CONTACT,
                            title: formFilm ? formFilm.name : ""
                        }
                    ]}
                />
                <div className="content">
                    <div className="row gutters-10">
                        <div className="col-12 col-md-9">
                            <div className="block-wrapper page-single">
                                <div className="movie-info movie-info-watch watch-info-box" id="movie-info">
                                    <div className="block-movie-info">
                                        <div className="row gutters-10">
                                            <div className="col-3 movie-image">
                                                <div className="movie-l-img">
                                                    <img
                                                        itemProp="image"
                                                        alt={formFilm.name}
                                                        src={formFilm.avatar}
                                                    />
                                                    <div className="movie-watch-link-box">
                                                        <a
                                                            className="movie-watch-link"
                                                            title={formFilm.name}
                                                        >
                                                            Tập Full
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-9 movie-detail">
                                                <h1 className="movie-title">
                                                    <span className="title-1" itemProp="name">
                                                        {formFilm && formFilm.name}
                                                    </span>
                                                    <span className="title-2" itemProp="name">
                                                        {formFilm && formFilm.nameEnglish}
                                                    </span>
                                                </h1>
                                                <div className="film-description-box">
                                                    <p className="film-description-short">
                                                        {formFilm && formFilm.description}
                                                    </p>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="watch-block" className="small-player">
                                    <div id="media-player-box" className="media-player uniad-player">
                                        {formEpisode && formEpisode.episodes && formEpisode.episodes.length > 0 && formEpisode.episodes.map((item, index) => {
                                            if (item.episodeNumber == episode) {
                                                return (
                                                    <iframe
                                                        src={item.episodeLink}
                                                        width="100%"
                                                        height="500"
                                                        allow="autoplay; encrypted-media"
                                                        allowFullScreen
                                                        title="video"
                                                        style={{ border: "none" }}
                                                    />
                                                )
                                            }
                                            return <></>
                                        })}
                                    </div>
                                </div>
                                <div className="block-film-note">
                                    <div className="item-center">
                                        Vui lòng sử dụng VPN hoặc App 1.1.1.1 để xem phim khi không truy cập được website.
                                    </div>
                                    <div className="item-center">
                                        ❤️❤️❤️
                                    </div>
                                </div>
                                <div className="block-rating">
                                    <div>
                                        Đánh giá phim{" "}
                                        <span className="num-rating">({formFilm.rating} sao / 1 đánh giá)</span>
                                    </div>
                                    <StarRating
                                        initialScore={Number(formFilm.rating)}
                                    />
                                </div>
                                <div class="block-list-server">
                                    <div class="server clearfix server-group">
                                        <h3 class="server-name">{formFilm.subtitle}#1</h3>
                                        {
                                            formFilm.totalEpisodes > 1 ?
                                                <div className="container-btn">
                                                    {formEpisode && formEpisode.episodes && formEpisode.episodes.length > 0 && formEpisode.episodes.map((item, index) => {
                                                        const { episodeNumber } = item
                                                        return (
                                                            <button className={"btn btn-item " + (episodeNumber == episode ? "active" : " ")}
                                                                onClick={() => onRedirectByPathname(`${PATH_NAME.MOVIE}/${id}/${episodeNumber}`)}
                                                            >
                                                                Tập {episodeNumber}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                                :
                                                <div className="container-btn">
                                                    <button className="btn btn-full active">
                                                        Full
                                                    </button>
                                                </div>
                                        }

                                    </div>
                                </div>
                                <div class="block-list-episode">

                                </div>
                                <div className="block block-tags">
                                    <h3 className="movie-detail-h3">Từ khóa:</h3>
                                    <div className="list-tags">
                                        {formFilm && formFilm.tags}
                                    </div>
                                </div>
                            </div>
                            <div className="content-same-movie">
                                <ListTypeMovie
                                    idDiv="id-tuong-tu"
                                    titleType="Có thể bạn muốn xem"
                                    numberItem={12}
                                    typeShow={LIST_TYPE_CATEGORIES.PHIM_TUONG_TU}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <SiderbarMovie />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Movie