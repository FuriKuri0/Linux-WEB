import React, { useEffect } from 'react'
import './index.scss'
import HomeComponent from '../../component/HomeComponent'
import axios from 'axios'
export default function Home() {
    const [count, setCount] = React.useState(1)
    const next = () => {
        setCount(count !== 1 ? count + 1 : -1)
    }
    const last = () => {
        setCount(count !== -1 ? count - 1 : 1)
    }
    useEffect(() => {

    }, [])
    const setArr = [{ 'A相电流(A):': '-1.$' }, { 'B相电流(A):': '-1.$' }, { 'C相电流(A):': '-1.$' }, { '无功(kVar):': '0.0' },]
    const fuArr = [{ '电流(A):': '0.0' }, { '畸变率Thdi:': '0.0%' }, { '功因(DPF)': '0.00' }, { '无功(kVar):': '0.0' },]
    const eleArr = [{ '电流(A):': '0.0' }, { '畸变率Thdi:': '0.0%' }, { '功因(DPF)': '0.00' }, { '无功(kVar):': '0.0' },]
    return (
        <div className='Home'>
            <div className='border'></div>
            <HomeComponent where={count} which='电网' data={eleArr} />
            <HomeComponent where={count === 0 ? 1 : count === 1 ? -1 : 0} which='设备' data={setArr} />
            <HomeComponent where={count === 0 ? -1 : count === 1 ? 0 : 1} which='负载' data={fuArr} />
            <button className='changeBtn' onClick={next}><img src="https://img.js.design/assets/img/63228fe609231791d1bb5790.png#ef3760511e290f0ed3ed3b328a5f4d77" alt="" /></button>
            <button className='changeBtn' onClick={last}><img style={{ transform: 'rotateY(180deg)' }} src="https://img.js.design/assets/img/63228fe609231791d1bb5790.png#ef3760511e290f0ed3ed3b328a5f4d77" alt="" /></button>
        </div>
    )
}
