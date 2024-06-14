import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import "./ModalDeleteMovie.scss"
import { Space, Table, Tag } from 'antd';
import DraggableModal from '../../../../components/DraggableModal/DraggableModal';
import { alertType } from '../../../../redux/actions';
import { ToastUtil } from '../../../../utils';
import _ from 'lodash';
import { movieService } from '../../../../services';

const ModalDeleteMovie = (props) => {
    const { isOpen, onClose, dataDelete, onHandleCallBack } = props
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app, user } = state
    const [formFilm, setFormFilm] = useState({})

    useEffect(async () => {
        if (isOpen) {
            await fetchMovieById();
        }
    }, [isOpen, dataDelete]);

    const fetchMovieById = async () => {
        let { id } = dataDelete
        movieService.getMovieById(id)
            .then(async (data) => {
                setFormFilm(data)
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    }

    const deleteEpisodeById = async () => {
        const { episodeId } = formFilm
        if (episodeId) {
            await movieService.deleteEpisodeById(episodeId)
                .then(async (data) => {
                    ToastUtil.success("Xóa tập phim thành công");
                    onHandleCallBack();
                    onClose()
                })
                .catch((error) => {
                    ToastUtil.errorApi(error, "Xóa tập phim thất bại")
                });
        }
    }

    const onHandleSubmit = async () => {
        let { id } = dataDelete
        dispatch(alertType(true))
        await movieService.deleteMovieById(id)
            .then(async (data) => {
                dispatch(alertType(false))
                ToastUtil.success("Xóa phim thành công")
                await deleteEpisodeById()
            })
            .catch((error) => {
                dispatch(alertType(false))
                ToastUtil.errorApi(error, "Xóa phim thất bại")
            });
    }

    return (
        <DraggableModal
            isOpen={isOpen}
            onClose={onClose}
            className={"modal-delete-movie"}
            titleId={"Xóa phim"}
            toggle={onClose}
        >
            <div className="body">
                <div className="body-content-row row gutters-5">
                    <div className="table-all-property">

                    </div>

                    <div className="container-action style-add">
                        <button class="btn btn-close" onClick={onClose} >
                            {"Đóng"}
                        </button>
                        <button class="btn btn-continue" onClick={onHandleSubmit} >
                            {"Xác nhận"}
                        </button>
                    </div>
                </div>

            </div>
        </DraggableModal>
    )
}

export default ModalDeleteMovie