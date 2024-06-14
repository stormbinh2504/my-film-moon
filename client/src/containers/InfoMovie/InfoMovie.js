import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { LIST_TYPE_CATEGORIES, PATH_NAME, ToastUtil } from '../../utils';
import "./InfoMovie.scss"
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
import StarRating from './StarRating/StarRating';
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
                slidesToShow: 6,
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

const InfoMovie = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app, user, router } = state
    const { userInfo, isLoggedIn } = user
    const { isInitialized, listCountries, listGenres, listCategories } = app
    const { id } = useParams();
    const [formFilm, setFormFilm] = useState({})


    useEffect(() => {
        const initializeAndFetch = async () => {
            if (!isInitialized) return;
            await fetchMovieById();
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


    const getEmbedUrl = (url) => {
        // Check if the URL is in the standard YouTube format
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        // Check if the URL is in the shortened YouTube format
        if (url.includes("youtu.be")) {
            return url.replace("youtu.be/", "www.youtube.com/embed/");
        }
        return url; // Return the original URL if it does not match expected formats
    };

    let castArr = []
    if (formFilm && formFilm.cast && formFilm.cast.length > 0) {
        castArr = formFilm.cast.split(',').map(name => name.trim());
    }
    let tagsArr = []
    if (formFilm && formFilm.tags && formFilm.tags.length > 0) {
        tagsArr = formFilm.tags.split(',').map(name => name.trim());
    }

    const onRedirectByPathname = (id) => {
        if (id) {
            history.push(`${PATH_NAME.MOVIE}/${id}/${1}`);
        }
    }


    return (
        <div id='info-movie' className='info-movie'>
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
                                <div className="movie-info">
                                    <div className="block-movie-info movie-info-box">
                                        <div className="row gutters-10">
                                            <div className="col-12 col-md-5 movie-image">
                                                <div className="movie-l-img">
                                                    <img src={formFilm.avatar} />
                                                    <div className="btn-block item-center">
                                                        <button className="btn btn-trailer">Trailer</button>
                                                        <button className="btn btn-film" onClick={() => onRedirectByPathname(formFilm.id)}>Xem phim</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-7 movie-detail">
                                                <h1 className="movie-title">
                                                    <span className="title-1" itemProp="name">
                                                        {formFilm.name}
                                                    </span>
                                                    <span className="title-2" itemProp="name">
                                                        {formFilm.nameEnglish}
                                                    </span>
                                                    <span className="title-year">({formFilm.year})</span>
                                                </h1>
                                                <div
                                                    className="slimScrollDiv"
                                                    style={{
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        width: "auto",
                                                        height: 277
                                                    }}
                                                >
                                                    <div
                                                        className="movie-meta-info"
                                                        style={{ overflow: "hidden", width: "auto", height: 277 }}
                                                    >
                                                        <div className="movie-dl">
                                                            <div className="movie-dt">Trạng thái:</div>
                                                            <div className="movie-dd status">{formFilm.status}</div>
                                                            <br />
                                                            <div className="movie-dt">Đạo diễn:</div>
                                                            <div className="movie-dd dd-cat">{formFilm.director}</div>
                                                            <br />
                                                            <div className="movie-dt">Quốc gia:</div>
                                                            <div className="movie-dd dd-cat">{formFilm.country}</div>
                                                            <br />
                                                            <div className="movie-dt">Năm sản xuất:</div>
                                                            <div className="movie-dd">{formFilm.year}</div>
                                                            <br />
                                                            <div className="movie-dt">Thời lượng:</div>
                                                            <div className="movie-dd">{formFilm.duration} Phút</div>
                                                            <br />
                                                            <div className="movie-dt">Tổng số tập:</div>
                                                            <div className="movie-dd">{formFilm.totalEpisodes}</div>
                                                            <br />
                                                            <div className="movie-dt">Chất lượng:</div>
                                                            <div className="movie-dd">{formFilm.quality}</div>
                                                            <br />
                                                            <div className="movie-dt">Ngôn ngữ:</div>
                                                            <div className="movie-dd">{formFilm.subtitle}</div>
                                                            <br />
                                                            <div className="movie-dt">Thể loại:</div>
                                                            <div className="movie-dd dd-cat">
                                                                {formFilm.genre}
                                                            </div>
                                                            <br />
                                                            <div className="movie-dt">Lượt xem:</div>
                                                            <div className="movie-dd">{formFilm.views} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-rating">
                                                    <div>
                                                        Đánh giá phim{" "}
                                                        <span className="num-rating">({formFilm.rating} sao / 1 đánh giá)</span>
                                                    </div>
                                                    <StarRating
                                                        initialScore={Number(formFilm.rating)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block block-actors">
                                        <h2>Diễn viên</h2>
                                        <div class="actors-slider" >
                                            <Slider {...settings}>
                                                {castArr && castArr.length > 0 && castArr.map((item, index) => {
                                                    return (
                                                        <div className="item-actors">
                                                            <div className="block block-img">
                                                                <img src={IMG_CAST_IMAGE} />
                                                            </div>
                                                            <div className="block block-content item-center">
                                                                {item}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </Slider>
                                        </div >
                                    </div>
                                    <div className="block block-movie-content" id="film-content-wrapper">
                                        <h2 className="movie-detail-h2">Nội dung phim:</h2>
                                        {/* <div
                                            className="fb-like like-at-content fb_iframe_widget"
                                            style={{ display: "flex !important", justifyContent: "right" }}
                                            data-width={140}
                                            data-layout="button_count"
                                            data-action="like"
                                            data-show-faces="false"
                                            data-share="true"
                                            fb-xfbml-state="rendered"
                                            fb-iframe-plugin-query="action=like&app_id=1052082262889444&container_width=140&href=https%3A%2F%2Fphimmoiv2.net%2Fphim%2Fjoker-dien-co-doi-171734891073329&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false&width=140"
                                        >
                                            <span style={{ verticalAlign: "bottom", width: 150, height: 28 }}>
                                                <iframe
                                                    name="fcb2ce5649f79d88a"
                                                    width="140px"
                                                    height="1000px"
                                                    data-testid="fb:like Facebook Social Plugin"
                                                    title="fb:like Facebook Social Plugin"
                                                    frameBorder={0}
                                                    allowTransparency="true"
                                                    allowFullScreen="true"
                                                    scrolling="no"
                                                    allow="encrypted-media"
                                                    src="https://www.facebook.com/v18.0/plugins/like.php?action=like&app_id=1052082262889444&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfdfddf3896d8bb89e%26domain%3Dphimmoiv2.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fphimmoiv2.net%252Ffb88e0de8bc2c351a%26relation%3Dparent.parent&container_width=140&href=https%3A%2F%2Fphimmoiv2.net%2Fphim%2Fjoker-dien-co-doi-171734891073329&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false&width=140"
                                                    style={{
                                                        border: "none",
                                                        visibility: "visible",
                                                        width: 150,
                                                        height: 28
                                                    }}
                                                    className=""
                                                />
                                            </span>
                                        </div> */}
                                        <div className="content-film">
                                            {formFilm && formFilm.description}
                                        </div>
                                    </div>

                                    <div className="block block-trailer-content" id="film-content-wrapper">
                                        <h2 className="movie-detail-h2">Trailer phim: {formFilm && formFilm.trailerTitle}</h2>
                                        <div className="content-film">
                                            <iframe
                                                id="ytplayer"
                                                className=""
                                                type="text/html"
                                                width="100%"
                                                height="400"
                                                src={formFilm && formFilm.trailerLink ? getEmbedUrl(formFilm.trailerLink) : ""}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className="block-tags">
                                            <h3 className="movie-detail-h3">Từ khóa:</h3>
                                            <div className="list-tags">
                                                {formFilm && formFilm.tags}
                                            </div>
                                        </div>
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
export default InfoMovie