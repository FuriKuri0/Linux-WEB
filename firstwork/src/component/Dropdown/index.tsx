import { Button, Dropdown, Menu } from 'antd';
import React, { useContext } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import navBg from '../../assets/images/nav.png'
import { Context } from '../../App'
import './index.css'

type Props = { nav: any }
type context = { setMask: Function, setLoad: Function }
export default function MyDropdown({ nav }: Props) {
    const { setMask } = useContext<context>(Context)
    let items: Array<object> = [];
    const handleMenu = (open: boolean) => {
        // console.log(open);

        open ? setMask(true) : setMask(false)
    }
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
            onClick={() => handleMenu(false)}
            items={items}
        />
    );
    return (<>
        <Dropdown onOpenChange={(open: boolean) => handleMenu(open)} className='dropdown' overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
            <button><img src={navBg} alt="" />
            </button>
        </Dropdown>
    </>)

};
