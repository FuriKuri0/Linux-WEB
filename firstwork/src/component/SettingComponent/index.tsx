import React from 'react'
import './index.css'
import MyButton from '../MyButton'

export default function SettingComponent() {
  return (
    <div className='SettingComponent'>
        <div className="box-border"></div>
        <div className="box-circle"></div>
        <div className="box">
            <div className="content">
                并联路数<MyButton status='red'/>
            </div>
            <div className="content">
                并联路数<MyButton status='yellow'/>
            </div>
            <div className="content">
                并联路数<MyButton status='green'/>
            </div>
            <div className="content">
                并联路数<MyButton/>
            </div>
        </div>
    </div>
  )
}
