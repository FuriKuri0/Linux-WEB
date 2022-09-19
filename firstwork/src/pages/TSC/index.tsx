import { Badge } from 'antd';
import React from 'react'
import './index.css'
import MyButton from '../../component/MyButton'
import TSCContent from '../../component/TSCContent';

export default function TSC() {

    const TSCParam_1 = [{ name: 'TSC开关', id: 'TSCSwitch' }, { name: '投切方式', id: 'switchMode' }, { name: '投切延迟', id: 'switchDelay' }, { name: '重投延迟', id: 'reDelay' }, { name: '正投切门限', id: 'threshold' }];
    const TSCParam_2 = [{ name: '过补容量', id: 'exSupply' }, { name: '过压保护', id: 'exVol' }, { name: '欠压保护', id: 'oweVol' }, { name: 'Thdv保护', id: 'Thdv' }, { name: 'Thdi保护', id: 'Thdi' }]
    const TSCStatus = [
        [{ name: 'A相过压', id: 'reAVol' }, { name: 'B相过压', id: 'reBVol' }, { name: 'C相过压', id: 'reCVol' }],
        [{ name: 'ThdvaH', id: 'ThdvaH' }, { name: 'ThdvbH', id: 'ThdvbH' }, { name: 'ThdvcH', id: 'ThdvcH' }],
        [{ name: 'A相欠压', id: 'oweAVol' }, { name: 'B相欠压', id: 'oweBVol' }, { name: 'C相欠压', id: 'oweCVol' }],
        [{ name: 'ThdiaH', id: 'ThdiaH' }, { name: 'ThdibH', id: 'ThdibH' }, { name: 'ThdicH', id: 'ThdicH' }]];

    return (
        <div className='TSC'>
            <h2 className="title">TSC参数</h2>
            <div className="TSCParam">
                <TSCContent setting={TSCParam_1} />
                <TSCContent setting={TSCParam_2} />
            </div>
            <div className="status">
                <h2 className="title">状态</h2>
                {TSCStatus.map((i) => <div className="TSC-content-container">{i.map((k) => <div className="content"><span>{k.name}</span></div>)}</div>)}
            </div>
            <div className="group">
                <div className="TSC-content-container">
                    <div className="content title">
                        <span>组别</span>
                        <span>容值</span>
                        <span>模式</span>
                    </div>
                    <Badge className="content" count={1} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={1} status="warning" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={1} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={4} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={5} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                    <Badge className="content" count={6} status="default" offset={[20, 18]}>
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                        <MyButton type='imbalance' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}
