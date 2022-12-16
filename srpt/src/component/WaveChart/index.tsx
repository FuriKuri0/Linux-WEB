import React from 'react'
import './index.scss'
import WaveComponent from '../WaveComponent'
export default function WaveChart() {
    return (
        <div className='WaveChart'>
            <strong>网测电压</strong>
            <WaveComponent type={0} />
            <strong>网测电流</strong>
            <WaveComponent type={1} />
            <strong>负载电流</strong>
            <WaveComponent type={2} />
            <i></i>
        </div>
    )
}
