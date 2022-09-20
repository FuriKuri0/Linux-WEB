import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react'
import './index.css'
import MyButton from '../MyButton'
import MyInputNumber from '../MyInputNumber'

type Setting={setting?:any};

export default function SettingComponent(props?:Setting) {
    // 固定设置
    let setting;
    if(Object.keys(props as Setting)[0]){
        setting=props?.setting
    }
    
  return (
    <div className='SettingComponent'>
        <div className="box-border"></div>
        <div className="box-circle"></div>
        <div className="box">
            <div className="content">
                {setting[0].name}
                {
                    setting[0].id==='parallel'?<MyInputNumber type={setting[0].id} tips={true}/>:
                    setting[0].id==='compensation'?<MyButton config={[{ background: 'red', text: '无功优先' }, { background: 'yellow', text: '不平衡优先' },{ background: 'green', text: '谐波优先' }, { background: 'gray', text: '目标电压' }, { background: 'pink', text: '固定无功' }]}/>:
                    <MyButton config={[{ background: 'green', text: '开启' }, { background: 'white', text: '关闭' }]}/>
                }
            </div>
            <div className="content">
                {setting[1].name}
                {
                    setting[1].id==='acting'?<MyInputNumber type={setting[1].id} tips={true}/>:
                    setting[1].id==='idle'?<MyButton config={[{ background: 'yellow', text: '使能' }, { background: 'green', text: '关闭' }]}/>:
                    <MyButton config={[{ background: 'green', text: '开启' }, { background: 'white', text: '关闭' }]}/>
                }
            </div>
            <div className="content">
                {setting[2].name}
                {
                    setting[2].id==='CTPosition'?<MyButton config={[{ background: 'yellow', text: '负载侧' }, { background: 'green', text: '网侧' }]}/>:
                    setting[2].id==='imbalance'?<MyButton config={[{ background: 'yellow', text: '使能' }, { background: 'green', text: '关闭' }]}/>:
                    <MyButton config={[{ background: 'green', text: '负序' }, { background: 'yellow', text: '正序' }]}/>
                }
            </div>
            <div className="content">
                {setting[3].name}
                {
                    setting[3].id==='CTRatio'?<MyInputNumber type={setting[3].id} tips={true}/>:
                    setting[3].id==='harmonic'?<MyButton config={[{ background: 'yellow', text: '使能' }, { background: 'green', text: '关闭' }]}/>:
                    <MyButton config={[{ background: 'green', text: '运行' }, { background: 'yellow', text: '正常' }]}/>}
            </div>
        </div>
    </div>
  )
}
