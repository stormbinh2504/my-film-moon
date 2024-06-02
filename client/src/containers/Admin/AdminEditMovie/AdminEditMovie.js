import React, { useState, useEffect } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc, movieService } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, FORM_FILM, LIST_TYPE_FILM, ToastUtil, onCopyText, uploadImgToFireBase, deleteFromFirebase } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminEditMovie.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
import AdminAddMovie from '../AdminAddMovie/AdminAddMovie';
const { Column, ColumnGroup } = Table;


const AdminEditMovie = () => {
    return (
        <AdminAddMovie isEdit={true} />
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(AdminEditMovie);