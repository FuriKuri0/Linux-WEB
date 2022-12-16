import React from 'react'
import './index.scss'
export default function HistogramChart() {
    const data = [11, 12, 13, 24, 15, 6, 17, 8, 9, 10, 11, 12, 13, 14, 13, 20, 2, 14, 18, 22, 41, 13, 14, 13,]
    const max = Math.max(...data)
    return (
        <div className='HistogramChart'>
            <ul>
                {data ? data.map((v, i) => {
                    return (
                        <li className={i % 2 !== 0 ? 'double' : 'single'} key={i}>
                            <div style={{ marginTop: (i % 2 !== 0 ? '3vh' : '') }}>0.0</div>
                            <div style={{ height: `${v}vh`, marginTop: (i % 2 !== 0 ? `${max - v}vh` : `${max + 3 - v}vh`) }} className='EachHistogram'></div>
                            {i + 1}
                        </li>)
                }) : ''}
            </ul>
        </div>
    )
}
