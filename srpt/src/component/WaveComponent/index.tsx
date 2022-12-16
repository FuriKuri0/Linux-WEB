import React from 'react'
import './index.scss'
import Line from '../Line'
type Props = { type: number }

export default function WaveComponent({ type }: Props) {
    return (
        <div className='WaveComponent'>
            <Line type={type} />
        </div>
    )
}
