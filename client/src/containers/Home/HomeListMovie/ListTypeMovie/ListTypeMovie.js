import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../../redux/actions'
import { PATH_NAME, ToastUtil } from '../../../../utils';
import "./ListTypeMovie.scss"
import { movieService } from '../../../../services';
const ListTypeMovie = (props) => {
    const { idDiv, titleType, numberItem, typeShow } = props
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

    return (
        <div id='list-type-movie' className='list-type-movie'>

            <div class="header-list">
                <div className="header-list-wrap">
                    <div class="title-list-index">{titleType}</div>
                    <div className="more-list-index">
                        Xem tất cả {">>"}
                    </div>
                </div>
            </div>

            <div class="body-list">
                <div className="row gutters-5">
                    {listMovie && listMovie.length > 0 && listMovie.map((item, index) => {
                        const { avatar, name, nameEnglish, year, id, subtitle, status } = item
                        return (
                            <div className="col-12 col-md-3 item-movie" onClick={() => onRedirectByPathname(id)}>
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
                </div>
            </div>
        </div >
    )
}
export default ListTypeMovie