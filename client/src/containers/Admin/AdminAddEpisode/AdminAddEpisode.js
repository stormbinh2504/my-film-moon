import React, { useState, useEffect } from 'react'
import { sdkVNPTService, authService, apiBinance, apiMexc, movieService } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, FORM_FILM, LIST_TYPE_FILM, ToastUtil, onCopyText, uploadImgToFireBase, deleteFromFirebase } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminAddEpisode.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
const { Column, ColumnGroup } = Table;

let DF_BODY = FORM_FILM

const AdminAddEpisode = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app, user, router } = state
    const { isInitialized, listCountries, listGenres, listCategories } = app
    const [formFilm, setFormFilm] = useState({})
    const [numberMovie, setNumberMovie] = useState(1)
    const [formEpisode, setFormEpisode] = useState({})
    const { id } = useParams();


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
                const { id } = data
                await fetchEpisodeById(id)
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    }


    const fetchEpisodeById = async (movieId) => {
        const { id } = formFilm
        let idBody = movieId || id
        if (idBody) {
            movieService.getEpisodeByMovieId(idBody)
                .then((data) => {
                    ToastUtil.success("Load tập phim thành công");
                    setFormEpisode(data)
                })
                .catch((error) => {
                    ToastUtil.errorApi(error)
                });
        }
    }

    const changeNumberMovie = e => {
        const value = e.target.value
        setNumberMovie(value)
    }


    const handleChangeInput = e => {
        const { name, value } = e.target
        const newEpisodeData = [...formEpisode.episodes];
        newEpisodeData[numberMovie - 1][name] = value;
        setFormEpisode({ ...formEpisode, episodes: newEpisodeData })
    }


    const onHandleUpdate = async () => {
        let body = {
            ...formEpisode
        }
        dispatch(alertType(true))
        await movieService.updateEpisodeById(body)
            .then(async res => {
                dispatch(alertType(false))
                await fetchEpisodeById();
                ToastUtil.success("Cập nhật tập phim thành công");
            })
            .catch(error => {
                dispatch(alertType(false))
                ToastUtil.errorApi(error, "Cập nhật tập phim thất bại");
            });
    }

    console.log("bh_AdminAddEpisode", formFilm, id, numberMovie, formEpisode)
    return (
        <div div className='admin-add-episode' >
            <div className="admin-add-episode-container">
                <div className="admin-add-episode-content">
                    <div className="page-header">

                    </div>
                    <div className="page-body">

                        <div className="form-group-input">
                            <div className="label">
                                Tên phim
                            </div>
                            <div className="value value-read">
                                <div className="form-control-read">
                                    {formFilm && formFilm.name}
                                </div>
                            </div>
                        </div>

                        <div className="form-group-input">
                            <div className="label">
                                Số tập phim
                            </div>
                            <div className="value">
                                <select value={numberMovie || 1} onChange={changeNumberMovie} className="form-control-input">
                                    {formEpisode && formEpisode.episodes && formEpisode.episodes.map((item, key) => {
                                        return (<option key={key} value={item.episodeNumber} selected={numberMovie == item.episodeNumber}>Tập {item.episodeNumber}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        {formEpisode && formEpisode.episodes && formEpisode.episodes.map((item, index) => {
                            if (item.episodeNumber == numberMovie) {
                                return <>
                                    <div className="form-group-input">
                                        <div className="label">
                                            Link Movie
                                        </div>
                                        <div className="value">
                                            <input type="text"
                                                className="form-control-input"
                                                name="episodeLink"
                                                value={item.episodeLink}
                                                onChange={handleChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group-input">
                                        <div className="label">
                                            Nguồn Film
                                        </div>
                                        <div className="value">
                                            <input type="text"
                                                className="form-control-input"
                                                name="episodeOrigin"
                                                value={item.episodeOrigin}
                                                onChange={handleChangeInput}
                                            />
                                        </div>
                                    </div>
                                </>
                            } else {
                                return <></>
                            }
                        })}

                    </div>

                    <div className="page-footer">
                        <div className="container-action style-add">
                            <button class="btn btn-continue" onClick={onHandleUpdate} >Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(AdminAddEpisode);