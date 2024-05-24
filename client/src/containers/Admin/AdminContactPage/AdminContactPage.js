import React, { useState, useEffect } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, ToastUtil, onCopyText } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminContactPage.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
const { Column, ColumnGroup } = Table;


const AdminContactPage = ({ userInfo }) => {
    const history = useHistory()
    const { email } = userInfo
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => state);

    const [listContact, setListContact] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        await fetchListContact();
    }, []);

    const fetchListContact = async () => {
        try {
            const res = await firebaseMethods.getDatabaseInFirebase("listContact");
            console.log("bh_fetchListContact", res);
            if (res && Object.keys(res).length > 0) {
                let arr = Object.keys(res).map(key => ({ id: key, ...res[key] })).sort((a, b) => b.ts - a.ts);;
                setListContact(arr)
            }
        } catch (error) {
            ToastUtil.errorApi(error, "Lấy thông tin liên hệ thất bại");
        }
    }

    const onHandleProcess = async (_record) => {
        let record = _.cloneDeep(_record)
        record.status = "DC"
        const updates = {};
        updates['/listContact/' + record.id] = record;
        // updates['/listContact/' + record.id + "/status"] = "DC"
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái đã xử lý thành công");
                await fetchListContact();
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Chuyển trạng thái đã xử lý thất bại");
            });
    }

    const onHandleReset = async (_record) => {
        let record = _.cloneDeep(_record)
        record.status = "C"
        const updates = {};
        updates['/listContact/' + record.id] = record;
        // updates['/listContact/' + record.id + "/status"] = "C"
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái chờ xử lý thành công");
                await fetchListContact();
            })
            .catch(error => {
                ToastUtil.errorApi(error, "Chuyển trạng thái chờ xử lý thất bại");
            });
    }

    const onHandleRemove = async (_record) => {
        let record = _.cloneDeep(_record)
        const updates = {};
        updates['/listContact/' + record.id] = null
        await firebaseMethods.updateDatabaseInFirebase(updates)
            .then(async res => {
                ToastUtil.success("Chuyển trạng thái chờ xử lý thành công");
                await fetchListContact();
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 200,
            align: 'center',
            onCell: (record) => {
                return {
                    onClick: () => {
                        onCopyText(record.email, "Copy email success")
                    }
                };
            }
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: 100,
            align: 'center',
            onCell: (record) => {
                return {
                    onClick: () => {
                        onCopyText(record.phone, "Copy phone success")
                    }
                };
            }
        },
        {
            title: 'Nội dung',
            dataIndex: 'message',
            key: 'message',
            width: 100,
            align: 'center',
        },
        {
            title: 'Ngày',
            dataIndex: 'date',
            key: 'date',
            width: 100,
            align: 'center',
        },
        {
            title: 'Giờ',
            dataIndex: 'time',
            key: 'time',
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
                console.log("bh_record", record)
                const { status } = record
                return (
                    <div className="container-button" >
                        {status == "C" && <button className='btn btn-pending' onClick={() => onHandleProcess(record)}>Chờ xử lý</button>}
                        {status != "C" && <button className='btn btn-done' onClick={() => onHandleReset(record)}>Đã xử lý</button>}
                        <button className='btn btn-delete' onClick={() => onHandleRemove(record)} >Xóa</button>
                    </div >
                )
            }
        },
    ];

    return (
        <div div className='admin-contact-page' >
            <div className="admin-contact-page-container">
                <div className="admin-contact-page-content">
                    {/* <div className="container-action style-add">
                        <button className="btn btn-add" onClick={
                            () => {
                                setPage(1)
                                fetchInfoSymbol()
                            }
                        }>Call Data </button>
                        <button className="btn btn-add" onClick={addSymbols}>Save symbol</button>
                        <button className="btn btn-add" onClick={fetchListContact}>Get symbol</button>
                        <button className="btn btn-add" onClick={clearAllSymbols}>Clear All symbol</button>
                    </div> */}
                    <div className="table-admin-contact-page">
                        <Table
                            // rowSelection={{
                            //     type: 'checkbox',
                            //     selectedRowKeys: selectedRowSymbols,
                            //     onChange: onSelectedRowKeysChange
                            // }}
                            columns={columns}
                            loading={loading}
                            dataSource={listContact}
                            scroll={{ x: 1000 }}
                            pagination={false}
                            sticky={true}
                        >
                            {/* 
                            <Column
                                title="STT" dataIndex="index" key="index" width={50} align='center'
                                render={(text, record, index) => index + 1}
                            />
                            <Column title="Tên khách hàng" dataIndex="name" key="name" width={100} align='center' />
                            <Column title="Email" dataIndex="email" key="email" width={100} align='center' />
                            <Column title="Số điện thoại" dataIndex="phone" key="phone" width={100} align='center' />
                            <Column title="Thời gian gửi" dataIndex="formattedDate" key="formattedDate" width={100} align='center' /> */}
                            {/* 
                            <Column
                                title="KLTB 3 ngày trước"
                                dataIndex="averageVolume3DaysPre"
                                key="averageVolume3DaysPre"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume3DaysPre - b.averageVolume3DaysPre}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}

                            />
                            <Column
                                title="KLTB 3 ngày tiếp theo"
                                dataIndex="averageVolume3DaysNext"
                                key="averageVolume3DaysNext"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume3DaysNext - b.averageVolume3DaysNext}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}
                            />
                            <Column
                                title="% KLTB 3 ngày"
                                dataIndex="percentAverageVolume3Days"
                                key="percentAverageVolume3Days"
                                width={250} align='center'
                                sorter={(a, b) => a.percentAverageVolume3Days - b.percentAverageVolume3Days}
                                render={
                                    (text) => <span className={"" + CommonUtils.getClassCheckValue(text)}>{CommonUtils.formatNumber(text)}%</span>
                                }
                            />


                            <Column
                                title="KLTB 7 ngày trước"
                                dataIndex="averageVolume7DaysPre"
                                key="averageVolume7DaysPre"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume7DaysPre - b.averageVolume7DaysPre}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}

                            />
                            <Column
                                title="KLTB 7 ngày tiếp theo"
                                dataIndex="averageVolume7DaysNext"
                                key="averageVolume7DaysNext"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume7DaysNext - b.averageVolume7DaysNext}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}
                            />
                            <Column
                                title="% KLTB 7 ngày"
                                dataIndex="percentAverageVolume7Days"
                                key="percentAverageVolume7Days"
                                width={250} align='center'
                                sorter={(a, b) => a.percentAverageVolume7Days - b.percentAverageVolume7Days}
                                render={
                                    (text) => <span className={"" + CommonUtils.getClassCheckValue(text)}>{CommonUtils.formatNumber(text)}%</span>
                                }
                            /> */}
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

export default connect(mapStateToProps)(AdminContactPage);