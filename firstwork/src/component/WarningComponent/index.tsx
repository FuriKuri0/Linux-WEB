import React from 'react'
import WarningTop from '../WarningTop'
import WarningBottom from '../WarningBottom'
import './index.scss'
export default function WarningComponent() {
    return (
        <div className='WarningComponent'>
            <div className='title'>模块一</div>
            <WarningTop />
            <WarningBottom />
        </div>
    )
}
