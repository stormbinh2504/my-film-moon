import React, { useState, useEffect } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc, movieService } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, ToastUtil, onCopyText } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminMovieList.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
const { Column, ColumnGroup } = Table;


const AdminMovieList = ({ userInfo }) => {
    const history = useHistory()
    const { email } = userInfo
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => state);

    const [listMovie, setListMovie] = useState([])
    const [loading, setLoading] = useState(false);

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

    const onHandleProcess = async (_record) => {
        let record = _.cloneDeep(_record)
        record.status = "DC"
        const updates = {};
        updates['/listMovie/' + record.id] = record;
        // updates['/listMovie/' + record.id + "/status"] = "DC"
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái đã xử lý thành công");
                await fetchListMovie();
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Chuyển trạng thái đã xử lý thất bại");
            });
    }

    const onHandleReset = async (_record) => {
        let record = _.cloneDeep(_record)
        record.status = "C"
        const updates = {};
        updates['/listMovie/' + record.id] = record;
        // updates['/listMovie/' + record.id + "/status"] = "C"
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái chờ xử lý thành công");
                await fetchListMovie();
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Chuyển trạng thái chờ xử lý thất bại");
            });
    }

    const onHandleRemove = async (_record) => {
        let record = _.cloneDeep(_record)
        const updates = {};
        updates['/listMovie/' + record.id] = null
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái chờ xử lý thành công");
                await fetchListMovie();
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Chuyển trạng thái chờ xử lý thất bại");
            });
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
                        <button className='btn btn-pending' onClick={() => onHandleProcess(record)}>Chờ xử lý</button>
                        <button className='btn btn-done' onClick={() => onHandleReset(record)}>Đã xử lý</button>
                        <button className='btn btn-delete' onClick={() => onHandleRemove(record)} >Xóa</button>
                    </div >
                )
            }
        },
    ];

    return (
        <div div className='admin-movie-list' >
            <div className="admin-movie-list-container">
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
                            dataSource={listMovie}
                            scroll={{ x: 1000 }}
                            pagination={false}
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