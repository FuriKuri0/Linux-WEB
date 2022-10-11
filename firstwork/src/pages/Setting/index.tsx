import React from 'react'
import './index.scss'
import MyButton from '../../component/MyButton'
import SettingComponent from '../../component/SettingComponent'

export default function Setting() {
    // 固定设置
    const firstSetting = [
        { name: '并联路数', id: 'parallel' },
        { name: '目标因功', id: 'acting' },
        { name: 'CT位置', id: 'CTPosition' },
        { name: 'CT变比', id: 'CTRatio' }];
    const secondSetting = [
        { name: '补偿模式', id: 'compensation' },
        { name: '无功开关', id: 'idle' },
        { name: '不平衡开关', id: 'imbalance' },
        { name: '谐波开关', id: 'harmonic', }];
    const thirdSetting = [
        { name: '出厂设置', id: 'restore' },
        { name: '参数复制', id: 'copy' },
        { name: '相序设置', id: 'phase' },
        { name: '输出选择', id: 'output' }];
    return (
        <>
            <div className='setting'>
                <div className="body">
                    <SettingComponent setting={firstSetting} />
                    <SettingComponent setting={secondSetting} />
                    <SettingComponent setting={thirdSetting} />
                </div>
            </div>
        </>
    )
}
