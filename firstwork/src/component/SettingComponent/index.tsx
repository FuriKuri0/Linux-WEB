import React from 'react'
import './index.css'
import MyButton from '../MyButton'

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
                {setting[0].name}<MyButton type={setting[0].id}/>
            </div>
            <div className="content">
                {setting[1].name}<MyButton type={setting[1].id}/>
            </div>
            <div className="content">
                {setting[2].name}<MyButton type={setting[2].id}/>
            </div>
            <div className="content">
                {setting[3].name}<MyButton type={setting[3].id}/>
            </div>
        </div>
    </div>
  )
}
