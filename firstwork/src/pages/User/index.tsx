import React from 'react'
import './index.css'
import UserComponent from '../../component/UserComponent'
export default function User() {
    const dataLeft1 = ['用户输入', '并联系数', '目标因功', 'CT位置', 'CT变比', '通讯状态']
    const dataRight2 = [
        [{ background: 'red', text: '无功优先' },
        { background: 'yellow', text: '不平衡优先' },
        { background: 'green', text: '谐波优先' },
        { background: 'gray', text: '目标电压' }],
        [{ background: 'green', text: '关闭' },
        { background: 'white', text: '开启' },],
        [{ background: 'yellow', text: '使能' },
        { background: 'green', text: '关闭' },],
        [{ background: 'green', text: '关闭' },
        { background: 'white', text: '开启' },],
        [{ background: 'yellow', text: '正序' },
        { background: 'green', text: '负序' },],
        [{ background: 'yellow', text: '正常' },
        { background: 'green', text: '运行' },]
    ]
    const dataRight1 = [
        [{ background: 'green', text: '关闭' },
        { background: 'white', text: '开启' },],
        'parallel', 'acting',
        [{ background: 'yellow', text: '负载侧' },
        { background: 'green', text: '网侧' },], 'CTRatio',
    ]
    const dataLeft2 = ['补偿模式', '无功开关', '不平衡', '谐波开关', '相序设置', '输出选择', '输出状态']

    return (
        <>
            <UserComponent dataLeft={dataLeft1} dataRight={dataRight1} />
            <div className='UserComponent2'>
                <UserComponent dataLeft={dataLeft2} dataRight={dataRight2} />
            </div>
        </>
    )
}
