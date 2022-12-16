import { Badge } from 'antd';
import React,{ useState } from 'react'
import './index.scss'
import MyButton from '../../component/MyButton'
import TSCContent from '../../component/TSCContent';
import MyConfirmButton from '../../component/MyConfirmButtom';
import MyInputNumber from '../../component/MyInputNumber';

export default function TSC() {

    const [status,setStatus]=useState("warning");

    const TSCParam_1 = [{ name: 'TSC开关', id: 'TSCSwitch' }, { name: '投切方式', id: 'switchMode' }, { name: '投切延迟', id: 'switchDelay' }, { name: '重投延迟', id: 'reDelay' }, { name: '正投切门限', id: 'threshold' }];
    const TSCParam_2 = [{ name: '过补容量', id: 'exSupply' }, { name: '过压保护', id: 'exVol' }, { name: '欠压保护', id: 'oweVol' }, { name: 'Thdv保护', id: 'Thdv' }, { name: 'Thdi保护', id: 'Thdi' }]
    const TSCStatus = [
        [{ name: 'A相过压', id: 'reAVol' }, { name: 'B相过压', id: 'reBVol' }, { name: 'C相过压', id: 'reCVol' }],
        [{ name: 'ThdvaH', id: 'ThdvaH' }, { name: 'ThdvbH', id: 'ThdvbH' }, { name: 'ThdvcH', id: 'ThdvcH' }],
        [{ name: 'A相欠压', id: 'oweAVol' }, { name: 'B相欠压', id: 'oweBVol' }, { name: 'C相欠压', id: 'oweCVol' }],
        [{ name: 'ThdiaH', id: 'ThdiaH' }, { name: 'ThdibH', id: 'ThdibH' }, { name: 'ThdicH', id: 'ThdicH' }]];
    const actingConfig=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return (
        <div className='TSC'>
            <h2 className="title">TSC参数</h2>
            <div className="TSCParam">
                <TSCContent setting={TSCParam_1} />
                <TSCContent setting={TSCParam_2} />
            </div>
            <div className="status">
                <h2 className="title">状态</h2>
                {TSCStatus.map((i,t) => <div className="TSC-content-container" key={`TSC-content-container-${t}`}>{i.map((k) => <div className="content" key={k.id}><span>{k.name}</span></div>)}</div>)}
            </div>
            <div className="group">
                <div className="TSC-content-container">
                    <div className="content title">
                        <span>组别</span>
                        <span>容值</span>
                        <span>模式</span>
                    </div>
                    {
                        actingConfig.map((i)=>{
                            return (
                                <Badge key={`manActing-${i}`} className="content" count={1} status={status as "default" | "warning" | undefined} offset={[20, 18]}>
                                    <MyButton config={[{ background: 'green', text: `${i}切` }, { background: 'yellow', text: '1投' }]}/>
                                    <MyInputNumber type='manActing'/>
                                    <MyButton config={[{ background: 'green', text: 'A相' }, { background: 'green', text: 'B相' }, { background: 'green', text: 'C相' }, { background: 'green', text: 'ABC' }]}/>
                                </Badge>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}
