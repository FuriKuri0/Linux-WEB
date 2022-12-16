import React from 'react'
import './index.scss'
export default function HistogramNav() {
    const data = ['lsb', 'lsc', 'linda0', 'lindb0', 'lindc0', 'Vsa', 'Vsb', 'Vsc', 'ila', 'ilb', 'ilc', 'lsa',]
    const [count, setCount] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const Highlight = (i: number) => {
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        arr[i] = 1;
        setCount(arr)
    }
    return (
        <div className='HistogramNav'>
            <ul>
                {data ? data.map((v, i) => (
                    <li className={count[i] ? 'litowhite' : ''} onClick={() => Highlight(i)} key={i}>{v}</li>
                )) : ''}
            </ul>
        </div>
    )
}
