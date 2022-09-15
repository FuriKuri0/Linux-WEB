import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import navBg from '../../assets/images/nav.png'
import './index.css'
type Props = { nav: any }
export default function MyDropdown({ nav }: Props) {
    let items: Array<object> = [];
    if (items.length === 0) {
        items = [];
        for (const i in nav) {
            items.push({
                key: i,
                label: <Link to={`/${i}`}>{nav[i]}</Link>
            })
        }
    }
    const menu = (
        <Menu
            items={items}
        />
    );
    return (<>
        <Dropdown className='dropdown' overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
            <button><img src={navBg} alt="" />
            </button>
        </Dropdown>
    </>)

};
