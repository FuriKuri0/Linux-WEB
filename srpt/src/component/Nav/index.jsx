import { Layout, Menu, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import './index.css'
import dlzcbg from '../../assets/images/dlzc.png'
// import PopConfirm from '../PopConfirm';
// import logo from '../../assets/images/projectcontrol.png'
export default function Nav(props) {

    const navigate = useNavigate();
    const { Header } = Layout;
    const logout = () => {
        React.axios('get', 'http://39.98.41.126:31106/user/logout')
        navigate('/dlzc')
        document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
        if (React.getCookie('user')) {
            document.cookie = `user=`;
            document.cookie = `username=`;
            document.cookie = `header=`;
            document.cookie = `permission=`
        }
    }
    // 点击logo
    function handleClick() {
        if (React.getCookie('user')) {
            React.getCookie('user') === 'root' ? navigate('/manageproject') : navigate('userproject')
        }
    }

    // 根据props动态生成items props为对象 键值对分别对应key和展示条目
    const items = [];
    // 获取默认值
    let defaultSelectedKeys = '';
    let k = 1;
    for (const i in props) {
        defaultSelectedKeys = (k++) === 2 ? i : defaultSelectedKeys;
        if (props[i]) {
            if (props[i] === '登录注册') {
                items.push({
                    key: i,
                    label: <div><UserOutlined onClick={() => { console.log(1); }} /><div className='dlzcbg' /></div>
                })
            }
            else {
                items.push({
                    key: i,
                    label: <Link to={`/${i}`}>{props[i]}</Link>
                })
            }

        }
    }

    return (
        <div className='head'>
            <Header className="head-header" >
                <div style={{ overflow: 'hidden' }} className="head-logo" onClick={handleClick}>
                    <img src='https://img.js.design/assets/img/631c3bf789787ade83ae6420.png' alt="" />
                </div>
                <Menu style={{ displat: 'flex', justifyContent: 'flex-end', width: '80%' }} mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]} items={items} />
            </Header >
            <Outlet />

        </div >
    )
}
