import React from 'react'
import './index.css'
import UserComponentLeft from '../UserComponentLeft'
import UserComponentRight from '../UserComponentRight'

export default function UserComponent() {
    const dataLeft = ['用户输入', '并联系数', '目标因功', 'CT位置', 'CT变比', '通讯状态']
    const dataRight = ['补偿模式', '无功开关', '不平衡', '谐波开关', '相序设置', '输出选择', '输出状态']

    return (
        <div className='UserComponent'>
            <UserComponentLeft data={dataRight} />
            <UserComponentRight />
        </div>
    )
}
