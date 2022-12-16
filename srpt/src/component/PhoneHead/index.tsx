import React, { useContext, useState, useEffect } from 'react'
import './index.scss'
import Dropdown from '../Dropdown'
import Dlzc from '../Dlzc'
import { Context } from '../../App'
import bg from '../../assets/images/bg.jpg'
import round from '../../assets/images/round.png'
import round1 from '../../assets/images/round1.png'
import { Alert } from '../../utils/globalfunction'
import { Popconfirm } from 'antd';

import Dlzcbg from '../../assets/images/dlzc.png'
import top from '../../assets/images/top.png'
import axios from 'axios'
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string, configPoint: any }
const uploadText = '确定切换开关机状态吗？';

export default function PhoneHead() {
    const { maskClick, setMask, setMaskClick, menu } = useContext<context>(Context)
    const arr: object = { home: '主页面', setting: '设置', user: '用户分路', tsc: 'TSC参数', chart: '图表', record: '事件记录', warning: '告警', }
    const [showdl, setShowdl] = React.useState(false)
    var formateT = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate() + ' ' + new Date().getHours() + ":" + (new Date().getMinutes() > 10 ? new Date().getMinutes() : '0' + new Date().getMinutes())
    const [time, setTime] = React.useState(formateT)
    const [guanji, setGuanji] = useState(1)
    const { configPoint } = useContext<context>(Context)
    const [control, setControl] = useState([]);
    useEffect(() => {
        setControl(configPoint?.Control);

    }, [configPoint]);
    useEffect(() => {
        if (control && control.length > 1) {
            setInterval(() => {
                getKaiguanji()
            }, 3000)
        }
    }, [control])
    const getKaiguanji = () => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {
            let open = response.data.DiList[control[0][`queryPoint`]]

            open.value ? setGuanji(0) : setGuanji(1)
        }, error => {
            console.log(error);
        }
        )
    }
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
    //切换开关机
    const changeState = () => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url: 'http://192.168.10.1/cgi-bin/main.cgi',
            data: { type: 1, list: [{ point: control[0][`modifyPoint`], value: guanji }] }
        }).then(response => {
            if (response.data === 1) {
                Alert('切换开关机成功')
            } else {
                Alert('切换开关机失败！', 2)
            }


        }, error => {
            Alert('网络故障！', 2)
            console.log(error);
        }
        )
    }
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
                <i>S751-PQ-SPC/SVG/APF<br />电能质量治理三相不平衡无功谐波装置</i>
                <img className='bgImg' src={bg} alt="" />
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'>
                    <Popconfirm placement="topLeft" title={uploadText} onConfirm={changeState} okText="Yes" cancelText="No">
                        <img src={guanji ? round : round1} alt="" />
                    </Popconfirm>
                </div>
                <div className='root'><div>{menu}</div><div>{time}</div></div>
                <div style={{ position: 'absolute', width: "100vw", background: 'white', textAlign: 'center', bottom: '0px', fontSize: '3.5vw' }}>{guanji ? '关机' : '开机'}</div>
            </div>
        </>
    )
}
