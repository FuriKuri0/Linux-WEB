import React from 'react'
import './index.scss'
export default function WarningBottom() {
    const count = [1, 2, 3, 4, 5, 6, 7]
    const data = [
        { text: 'BUS过载', red: false },
        { text: '过流0', red: false },
        { text: '峰值过载A', red: false },
        { text: '峰值过载B ', red: true },
        { text: '峰值过载C', red: false },
    ]
    return (

        <div className='WarningBottom'>
            <div className='title'>故障
                {count ? count.map((value, index) => {
                    return (<ul>
                        {data ? data.map((v, i) => {
                            if (v.red) {
                                return (<li key={i} style={{ color: 'red' }}>{v.text}</li>)
                            } else {
                                return (<li key={i} style={{}}>{v.text}</li>)
                            }
                        }) : ''}
                    </ul>)

                }) : ''}
            </div>
        </div>
    )
}
