import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined, SyncOutlined, AndroidOutlined, StockOutlined } from '@ant-design/icons';
import { PATH_NAME } from '../../utils';
const { Sider } = Layout;

function Menubar(props) {
    const location = useLocation();
    let permission = localStorage.getItem('permission');
    permission = JSON.parse(permission);

    return (
        <Sider
            width={250} className="site-layout-background"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log();
            }}
            onCollapse={(collapsed, type) => {
                console.log();
            }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={["/client-management"]}
                selectedKeys={[location.pathname]}
                defaultOpenKeys={['notification']}
                selectable={true}
                theme="dark"
            >
                <Menu.Item disabled={false} key="/client-management" icon={<UserOutlined />}>
                    <Link to={PATH_NAME.ADMIN_CONTACT_PAGE}>
                        <span>Danh sách liên hệ</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider >
    )
}

export default Menubar

