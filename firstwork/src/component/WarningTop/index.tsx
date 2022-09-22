import React from 'react'
import './index.scss'
export default function WarningTop() {
    const data = [
        { text: '非紧急停机', red: true },
        { text: '装置正常', red: false },
        { text: '装置待机', red: false },
        { text: '试运授权', red: false },
        { text: '长期运行', red: false },
    ]
    return (
        <div className='WarningTop'>
            <div className='title'>状态</div>
            <ul>
                {data ? data.map((v, i) => {
                    if (v.red) {
                        return (<li key={i} style={{ color: 'red' }}>{v.text}</li>)
                    } else {
                        return (<li key={i} style={{}}>{v.text}</li>)
                    }
                }) : ''}
            </ul>
        </div>
    )
}
