import React, { useContext } from 'react'
import './index.css'
import Dropdown from '../Dropdown'
import Dlzc from '../Dlzc'
import { Context } from '../../App'
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function }
export default function PhoneHead() {
    const { maskClick, setMask, setMaskClick } = useContext<context>(Context)
    const arr: object = { home: '主页面', setting: '设置', histogram: '柱状图', waveform: '波形图', record: '事件记录', warning: '警告', }
    const [showdl, setShowdl] = React.useState(false)
    var formateT = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate() + ' ' + new Date().getHours() + ":" + (new Date().getMinutes() > 10 ? new Date().getMinutes() : '0' + new Date().getMinutes())
    const [time, setTime] = React.useState(formateT)
    React.useEffect(() => {
        var interval;
        if (!interval) {
            interval = setInterval(() => {
                var d = new Date()
                var formateT = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + ' ' + d.getHours() + ":" + (d.getMinutes() > 10 ? d.getMinutes() : '0' + d.getMinutes())
                setTime(formateT)
            }, 60000)
        }

    }, [])
    const dlzc = () => {
        setMask(true)
        setShowdl(true)
    }
    React.useEffect(() => {
        if (maskClick) {
            setMask(false)
            setShowdl(false)
            setMaskClick(false)
        }
    }, [maskClick])
    return (
        <>
            <Dlzc show={showdl} />
            <div className='PhoneHead'>
                <div className='head'>
                    <Dropdown nav={arr} />
                    <img src="https://img.js.design/assets/img/631c3bf789787ade83ae6420.png#455cc286a298b86f88c1557f1501eb9f" alt="" />
                    <img onClick={dlzc} src="https://img.js.design/assets/img/6321f08f0e0d177adb797910.png#660a6248897ac3a552a4a5fd08414698" alt="" />
                </div>
                <i>静止无功发射器<br />Static reactive power transmitter</i>
                <img className='bgImg' src="https://img.js.design/assets/img/6320856d7c2abf0a01aecf86.jpg#a9a37db5f27a3126d0a9769dd14b4d00" alt="" />
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'><img src="https://img.js.design/assets/img/6321ebe141250db0945f6b7f.png#f3829f67611cf5a66e7b0f19148e492b" alt="" /></div>
                <div className='root'><div>监管主页面</div><div>{time}</div></div>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0px', fontSize: '16px' }}>待机</div>
            </div>
        </>
    )
}
