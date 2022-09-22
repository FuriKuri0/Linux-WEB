import React from 'react'
import './index.scss'
import { Pagination } from 'antd';
import { getEnvironmentData } from 'worker_threads';
export default function Record() {

    const changePage = (page: number) => {
        console.log(page);

    }
    return (
        <>
            <ul className='Record'>
                <li><div>时间起止</div><div>对象名</div><div>报警描述</div></li>
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
                </li>
            </ul>
            <div className='pagination'><Pagination onChange={(page) => changePage(page)} defaultCurrent={1} total={50} /></div>
        </>
    )
}
