import React, { useState, useEffect, useCallback } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc, movieService } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, FILTER_MOVIES, PATH_NAME, ToastUtil, deleteFromFirebase, onCopyText } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminMovieList.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
import ModalDeleteMovie from './ModalDeleteMovie/ModalDeleteMovie';
import { updateDataFilterMovies } from '../../../redux/actions';
const { Column, ColumnGroup } = Table;

const AdminMovieList = ({ userInfo }) => {
    const history = useHistory()
    const { email } = userInfo
    const dispatch = useDispatch()
    const { auth, app } = useSelector((state) => state);
    const { filterMovies } = app

    const [listMovie, setListMovie] = useState([])
    const [loading, setLoading] = useState(false);

    const [dataDelete, setDataDelete] = useState({});
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [bodyMovies, setBodyMovies] = useState(FILTER_MOVIES);


    useEffect(async () => {
        await fetchListMovie(1);
    }, []);

    const fetchListMovie = async (page) => {
        let body = {
            page: page,
            limit: 5,
            filters: {
                ...bodyMovies
            }
        }
        movieService.getFilterMovies(body)
            .then((data) => {
                if (data) {
                    setListMovie(data)
                }
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    }

    const onHandleAddEpisode = async (_record) => {
        let record = _.cloneDeep(_record)
        const { id } = record
        history.push(`${PATH_NAME.ADMIN_ADD_EPISODE}/${id}`)
    }

    const onHandleEdit = async (_record) => {
        let record = _.cloneDeep(_record)
        const { id } = record
        history.push(`${PATH_NAME.ADMIN_MOVIE_EDIT}/${id}`)
    }

    const onHandleRemove = async (_record) => {
        let record = _.cloneDeep(_record)
        setDataDelete(record)
        setIsOpenModalDelete(true)
    }

    const onHandleCallBackDelete = async () => {
        const imgFirebaseOld = dataDelete.avatar
        await deleteFromFirebase(imgFirebaseOld)
        await fetchListMovie();
    }


    const handleChangeInput = e => {
        const { name, value } = e.target
        setBodyMovies((prev) => ({ ...prev, [name]: value }))
    }

    const onSearch = () => {
        fetchListMovie(1)
    }


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            width: 50,
            align: 'center',
            render: (text, record, index) => (index + 1)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            align: 'center',
            onCell: (record) => {
                return {
                    onClick: () => {
                        onCopyText(record.name, "Copy name success")
                    }
                };
            }
        },
        {
            title: 'Tập Phim',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            align: 'center',
            render: (_, record) => {
                const { status } = record
                return (
                    <div className="container-button" >
                        <button className='btn btn-delete' onClick={() => onHandleAddEpisode(record)} >Thêm tập film</button>
                    </div >
                )
            }
        },
        {
            title: 'Ảnh',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 100,
            align: 'center',
            render: (_, record) => {
                const { avatar } = record
                return (
                    <img src={avatar} style={{ width: "80px", height: "100px" }} />
                )
            }
        },
        {
            title: 'Số tập',
            dataIndex: 'totalEpisodes',
            key: 'totalEpisodes',
            width: 100,
            align: 'center',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            align: 'center',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: 100,
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            width: 250,
            align: 'center',
            fixed: 'right',
            render: (_, record) => {
                const { status } = record
                return (
                    <div className="container-button" >
                        <button className='btn btn-delete' onClick={() => onHandleEdit(record)} >Sửa</button>
                        <button className='btn btn-delete' onClick={() => onHandleRemove(record)} >Xóa</button>
                    </div >
                )
            }
        },
    ];

    console.log("bh_listMovie", listMovie)
    return (
        <div div className='admin-movie-list' >
            {isOpenModalDelete && <ModalDeleteMovie
                isOpen={isOpenModalDelete}
                onClose={() => {
                    setIsOpenModalDelete(false)
                }}
                dataDelete={dataDelete}
                onHandleCallBack={() => {
                    onHandleCallBackDelete()
                }}
            />}
            <div className="admin-movie-list-container">

                <div className="list-lookup row row gutters-5">
                    <div className="col-6 col-md-3">
                        <div className="body-content-row row gutters-5">
                            <div className="col-12 label">
                                Tên phim
                            </div>
                            <div className="col-12 value">
                                <div className="mg-form-control">
                                    <input className="text-control" value={bodyMovies.nameSearch} name="nameSearch"
                                        onChange={handleChangeInput} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="container-action item-center"><button class="btn btn-add" onClick={onSearch}>Tìm kiếm</button></div>
                    </div>
                </div>


                <div className="admin-movie-list-content">
                    {/* <div className="container-action style-add">
                        <button className="btn btn-add" onClick={
                            () => {
                                setPage(1)
                                fetchInfoSymbol()
                            }
                        }>Call Data </button>
                        <button className="btn btn-add" onClick={addSymbols}>Save symbol</button>
                        <button className="btn btn-add" onClick={fetchListMovie}>Get symbol</button>
                        <button className="btn btn-add" onClick={clearAllSymbols}>Clear All symbol</button>
                    </div> */}
                    <div className="table-admin-movie-list">
                        <Table
                            // rowSelection={{
                            //     type: 'checkbox',
                            //     selectedRowKeys: selectedRowSymbols,
                            //     onChange: onSelectedRowKeysChange
                            // }}
                            columns={columns}
                            loading={loading}
                            dataSource={listMovie.data}
                            scroll={{ x: 1000 }}
                            pagination={{
                                pageSize: 5,
                                total: listMovie.total,
                                onChange: (page) => {
                                    fetchListMovie(page);
                                },
                            }}
                            sticky={true}
                        >

                        </Table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(AdminMovieList);