import React, { useEffect, useState } from 'react'
import './index.scss'
type Props = { arr?: Array<number> }
type Object = { text: string, red: boolean }
export default function WarningTop({ arr }: Props) {
    const [data, setData] = useState<Array<Object>>()
    useEffect(() => {
        if (arr) {
            let data: Array<Object> = []
            arr[0] ? data.push({ text: '紧急停机', red: false }) : data.push({ text: '非紧急停机', red: false })
            arr[1] ? data.push({ text: '装置故障', red: false }) : data.push({ text: '装置正常', red: false })
            arr[2] ? data.push({ text: '电阻软起', red: false }) : data.push({ text: '装置待机', red: false })
            arr[3] ? data.push({ text: '试运授权', red: false }) : data.push({ text: '未授权', red: false })
            arr[4] ? data.push({ text: '试运行中', red: false }) : data.push({ text: '长期运行', red: false })
            setData(data)
        }
    }, [arr])
    // const data = [
    //     { text: '非紧急停机', red: true },//非紧急停机 紧急停机
    //     { text: '装置正常', red: false },//装置正常 装置故障
    //     { text: '装置待机', red: false },//装置待机 电阻软起,装置延时,控制软起,运行模式
    //     { text: '试运授权', red: false },
    //     { text: '长期运行', red: false },//长期运行 试运行中
    // ]
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
