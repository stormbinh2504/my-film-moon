import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME, ToastUtil } from '../../utils';
import "./SiderbarMovie.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import InfoContact from '../Common/InfoContact/InfoContact';
import { movieService } from '../../services';
import Slider from "react-slick";

import IMG_STAR_OFF from "../../assets/imgs/info_movie/star_off.png"
import IMG_STAR_ON from "../../assets/imgs/info_movie/star_on.png"
import IMG_CAST_IMAGE from "../../assets/imgs/info_movie/cast_image.png"

const SiderbarMovie = ({ google }) => {
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

    console.log("bh", useParams())
    return (
        <div id='sider-bar-movie' className='sider-bar-movie'>
            <div className="sider-bar-movie-content">
                <div className="right-box-header">
                    Phim lẻ xem nhiều
                </div>
                <div className="right-box-body">
                    <div className="right-box-body-content">
                        <div className="list-top-movie">
                            {listMovie && listMovie.length > 0 && listMovie.map((item, index) => {
                                const { avatar, name, nameEnglish, subtitle, year } = item
                                return (
                                    <div className="list-top-movie-item">
                                        <div className="image-container" >
                                            {avatar && <img src={avatar} alt="market" />}
                                        </div>
                                        <div className="content-container">
                                            <div className="name">{name}</div>
                                            <div className="name-english">{nameEnglish}</div>
                                            <div className="subtitle">{subtitle}</div>
                                            <div className="year">{year}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sider-bar-movie-content">
                <div className="right-box-header">
                    Phim bộ xem nhiều
                </div>
                <div className="right-box-body">
                    <div className="right-box-body-content">
                        <div className="list-top-movie">
                            {listMovie && listMovie.length > 0 && listMovie.map((item, index) => {
                                const { avatar, name, nameEnglish, subtitle, year } = item
                                return (
                                    <div className="list-top-movie-item">
                                        <div className="image-container" >
                                            {avatar && <img src={avatar} alt="market" />}
                                        </div>
                                        <div className="content-container">
                                            <div className="name">{name}</div>
                                            <div className="name-english">{nameEnglish}</div>
                                            <div className="subtitle">{subtitle}</div>
                                            <div className="year">{year}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SiderbarMovie