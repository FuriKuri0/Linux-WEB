import React from 'react'
import './index.css'
import Dropdown from '../Dropdown'
export default function PhoneHead() {
    const arr: object = { home: '主页面', setting: '设置', histogram: '柱状图', waveform: '波形图', record: '事件记录', warning: '警告', }
    return (
        <div className='PhoneHead'>
            <div className='head'>
                <Dropdown nav={arr} />
                <img src="https://img.js.design/assets/img/631c3bf789787ade83ae6420.png#455cc286a298b86f88c1557f1501eb9f" alt="" />
                <img src="https://img.js.design/assets/img/6321f08f0e0d177adb797910.png#660a6248897ac3a552a4a5fd08414698" alt="" />
            </div>
            <i>静止无功发射器<br />Static reactive power transmitter</i>
            <img className='bgImg' src="https://img.js.design/assets/img/6320856d7c2abf0a01aecf86.jpg#a9a37db5f27a3126d0a9769dd14b4d00" alt="" />
        </div>
    )
}
