import React from 'react'
import './index.css'
import MyButton from '../../component/MyButton'
import SettingComponent from '../../component/SettingComponent'

export default function Setting() {
    return (
        <div className='setting'>
            <div className="body">
                <SettingComponent/>
                <SettingComponent/>
                <SettingComponent/>
            </div>
        </div>
    )
}
