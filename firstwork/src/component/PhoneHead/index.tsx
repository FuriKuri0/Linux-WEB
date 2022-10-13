import React, { useContext } from 'react'
import './index.scss'
import Dropdown from '../Dropdown'
import Dlzc from '../Dlzc'
import { Context } from '../../App'
import bg from '../../assets/images/bg.jpg'
import round from '../../assets/images/round.png'
import Dlzcbg from '../../assets/images/dlzc.png'
import top from '../../assets/images/top.png'

type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }
export default function PhoneHead() {
    const { maskClick, setMask, setMaskClick, menu } = useContext<context>(Context)
    const arr: object = { home: '主页面', setting: '设置', user: '用户分路', tsc: 'TSC参数', chart: '图表', record: '事件记录', warning: '告警', }
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
            <Dlzc show={showdl} setMask={setMask} setMaskClick={setMaskClick} setShowdl={setShowdl} />
            <div className='PhoneHead'>
                <div className='head'>
                    <Dropdown nav={arr} />
                    <img src={top} alt="" />
                    <img onClick={dlzc} src={Dlzcbg} alt="" />
                </div>
                <i>静止无功发射器<br />Static reactive power transmitter</i>
                <img className='bgImg' src={bg} alt="" />
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'><img src={round} alt="" /></div>
                <div className='root'><div>{menu}</div><div>{time}</div></div>
                <div style={{ position: 'absolute', width: "100vw", background: 'white', textAlign: 'center', bottom: '0px', fontSize: '3.5vw' }}>待机</div>
            </div>
        </>
    )
}
