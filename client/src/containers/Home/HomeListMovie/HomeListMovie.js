import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { LIST_TYPE_CATEGORIES, PATH_NAME } from '../../../utils';
import ListTypeMovie from './ListTypeMovie/ListTypeMovie';
import "./HomeListMovie.scss"
const HomeListMovie = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='home-list-movie' className='home-list-movie'>
            <div className="wrap-movie-item">
                <ListTypeMovie
                    idDiv="id-phim-moi"
                    titleType="Phim mới cập nhật"
                    numberItem={6}
                    typeShow={LIST_TYPE_CATEGORIES.PHIMMOI}
                />
            </div>
            <div className="wrap-movie-item">
                <ListTypeMovie
                    idDiv="id-le"
                    titleType="Phim lẻ"
                    numberItem={6}
                    typeShow={LIST_TYPE_CATEGORIES.PHIMLE}
                />
            </div>
            <div className="wrap-movie-item">
                <ListTypeMovie
                    idDiv="id-phim-bo"
                    titleType="Phim bộ"
                    numberItem={6}
                    typeShow={LIST_TYPE_CATEGORIES.PHIMBO}
                />
            </div>
        </div >
    )
}
export default HomeListMovie