import React from 'react'
import { Layout } from 'antd';
import Topbar from './Topbar';
import Menubar from './Menubar';

function DefaultLayout(props) {
    return (
        <Layout>
            <Topbar />
            <Layout>
                <Menubar />
                <Layout style={{ padding: '24px 24px 24px' }}>
                    {props.children}
                </Layout>
            </Layout>
        </Layout >
    )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
