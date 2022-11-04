import React, { useEffect, useState } from 'react'
import './index.scss'
import { Pagination } from 'antd';
import { getEnvironmentData } from 'worker_threads';
import axios from 'axios';
export default function Record() {
    const changePage = (page: number) => {
        console.log(page);
        getData(10, page)
    }
    const [data, setData] = useState<Array<object>>([])
    const [all, setAll] = useState<number>(20)
    const getData = (number: number, page: number) => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: `http://192.168.10.1/cgi-bin/main.cgi?type=16&status=${number}&value=${page}&point=1`,
        }).then(response => {
            console.log(response, 'response');
            setAll(response.data.soecount)
            setData(response.data.soeList)
        }, error => {
            console.log(error);
        }
        )
    }
    useEffect(() => {
        // getData(10, 1)
    }, [])
    return (
        <>
            <ul className='Record'>
                <li><div>时间起止</div><div>对象名</div><div>报警描述</div></li>
                {data.length !== 0 ? data.map((v: any, i: number) => {
                    return (
                        <li key={i}> <div>{v.time}<div className='space'>|</div>{v.time}</div>
                            <div>
                                <i>{v.name}</i><br />
                            </div>
                            <div>
                                <div className='des' style={{ textAlign: 'left' }}>{v.desc}</div>
                            </div>
                        </li>
                    )
                }) : ''}

                {/* <li>


                    <div>2022/10/10 23:59<div className='space'>|</div>2022/10/10 23:59</div>
                    <div>
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                    </div>
                    <div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                    </div>
                </li> <li>
                    <div>2022/10/10 23:59<div className='space'>|</div>2022/10/10 23:59</div>
                    <div>
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                    </div>
                    <div><div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                    </div>
                </li>
                <li>
                    <div>2022/10/10 23:59<div className='space'>|</div>2022/10/10 23:59</div>
                    <div>
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                    </div>
                    <div><div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                    </div>
                </li>
                <li>
                    <div>2022/10/10 23:59<div className='space'>|</div>2022/10/10 23:59</div>
                    <div>
                        <i>对象名字</i><br />
                        <i>对象名字</i><br />
                    </div>
                    <div><div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                        <div className='des'>报警描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                    </div>
                </li> */}
            </ul>
            <div className='pagination'><Pagination onChange={(page) => changePage(page)} defaultCurrent={1} total={all} /></div>
        </>
    )
}
