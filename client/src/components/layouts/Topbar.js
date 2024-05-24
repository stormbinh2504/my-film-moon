import React, { useState, useEffect } from 'react'
import * as actions from '../../redux/actions'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { Button, Row, Col } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useSelector, useDispatch } from "react-redux";
function Topbar(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(actions.logout())
        history.push("/login"); // Chuyển hướng đến trang đăng nhập
    }

    return (
        <Header className="topbar">
            <Row>
                <Col span={3}>
                    <p style={{ color: "#fff", paddingLeft: "20px" }}>{`Admin`}</p>
                </Col>
                <Col span={18}>
                </Col>
                <Col span={3}>
                    <Button type="primary"
                        danger
                        style={{ float: "right", marginTop: "16px" }}
                        onClick={() => handleLogout()}
                    >Đăng xuất</Button>
                </Col>
            </Row>
        </Header>
    )
}

export default Topbar

