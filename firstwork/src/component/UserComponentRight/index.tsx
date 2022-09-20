import React from 'react'
import './index.css'
import MyButton from '../MyButton'
import MyInputNumber from '../MyInputNumber'

type Props = { data: Array<Array<config> | string> }
type config = { background: string, text: string }
export default function UserComponentRight({ data }: Props) {
    // const data = [[{ background: 'green', text: '开启' }, { background: 'red', text: '关闭' }], [{ background: 'green', text: '你好' }, { background: 'yellow', text: '香蕉' }], [{ background: 'green', text: '世界' }, { background: 'pink', text: '骚' }]]
    const count = [1, 2, 3, 4, 5, 6]
    return (
        <div className='right'>
            <ul className='head'>
                <li>M1</li>
                <li>M2</li>
                <li>M3</li>
                <li>M4</li>
                <li>M5</li>
                <li>M6</li>
            </ul>
            {data.map((v, i) => (
                <ul className='head' key={i}>
                    {count.map((value, index) => {
                        if (typeof v === 'object') {
                            return (<li key={index}><MyButton config={v} /></li>
                            )
                        }
                        if (typeof v === 'string') {
                            return (<li key={index}><MyInputNumber type={v} /></li>
                            )
                        }

                    })}
                </ul>
            ))}
            <ul className='head'>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ul>
        </div>
    )
}
