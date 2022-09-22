import React from 'react'
import './index.scss'
import WaveComponent from '../WaveComponent'
export default function WaveChart() {
    return (
        <div className='WaveChart'>
            <strong>网测电压</strong>
            <WaveComponent />
            <strong>网测电流</strong>
            <WaveComponent />
            <strong>负载电流</strong>
            <WaveComponent />
            <i></i>
        </div>
    )
}
