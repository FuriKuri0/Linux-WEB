import React, { useEffect, useState } from 'react'
import './index.scss'
type Props = { arr?: Array<number> }
type Object = { text: string, red: boolean }
export default function WarningBottom({ arr }: Props) {
    //1 故障 0 正常
    // const count = [1, 2, 3, 4, 5, 6, 7]
    const [data, setData] = useState<Array<number>>()
    useEffect(() => {
        if (arr) {
            setData(arr)
        }
    }, [arr])

    return (

        <div className='WarningBottom'>
            <div className='title'>故障</div>
            <div className='WarningMain'>
                <div className='column'>
                    <ul>
                        <li style={{ color: data ? data[0] ? 'red' : '' : '' }}>
                            BUS过压
                        </li>
                        <li style={{ color: data ? data[1] ? 'red' : '' : '' }}>过温故障</li>
                        <li style={{ color: data ? data[2] ? 'red' : '' : '' }}>电源掉电</li>
                        <li style={{ color: data ? data[3] ? 'red' : '' : '' }}>相序异常</li>
                        <li style={{ color: data ? data[4] ? 'red' : '' : '' }}>短序故障</li>
                        <li style={{ color: data ? data[5] ? 'red' : '' : '' }}>内部过温</li>
                        <li style={{ color: data ? data[6] ? 'red' : '' : '' }}>未授权</li>
                    </ul>
                </div>
                <div className='column'>
                    <ul>
                        <li style={{ color: data ? data[7] ? 'red' : '' : '' }}>过流0</li>
                        <li style={{ color: data ? data[8] ? 'red' : '' : '' }}>过流1</li>
                        <li style={{ color: data ? data[8] ? 'red' : '' : '' }}>过流2</li>
                        <li style={{ color: data ? data[8] ? 'red' : '' : '' }}>过流3</li>
                        <li style={{ color: data ? data[8] ? 'red' : '' : '' }}>过流4</li>
                        <li style={{ color: data ? data[8] ? 'red' : '' : '' }}>过流5</li>
                        <li style={{ color: data ? data[9] ? 'red' : '' : '' }}>Thdv</li>
                    </ul>
                </div>
                <div className='column'>
                    <ul>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetHA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetLA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>峰值过压A</li>
                    </ul>
                </div>
                <div className='column'>
                    <ul>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetHA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetLA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>峰值过压A</li>
                    </ul>
                </div>
                <div className='column'>
                    <ul>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA0</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>BusHA1</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetHA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>VnetLA</li>
                        <li style={{ color: data ? data[10] ? 'red' : '' : '' }}>峰值过压A</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
