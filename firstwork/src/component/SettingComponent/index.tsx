import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React, { useEffect, useState, useContext } from 'react'
import './index.scss'
import MyButton from '../MyButton'
import MyInputNumber from '../MyInputNumber'
import MyConfirmButton from '../MyConfirmButtom'
import axios from 'axios'
import { Context } from '../../App'
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }
type Setting = { setting?: any };
type Data = { road: string, yinshu: string, CTp: string, CTc: string, buchang: string }
export default function SettingComponent(props?: Setting) {
    const { setLoad } = useContext<context>(Context)

    // 固定设置
    let setting;
    if (Object.keys(props as Setting)[0]) {
        setting = props?.setting
    }
    const [data, setData] = useState<Data>()
    useEffect(() => {
        setLoad(true)
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {
            let list = response.data.AiList
            let data: Data = { road: list[61].value, yinshu: list[59].value, CTp: list[68].value, CTc: list[58].value, buchang: list[57].value };
            setData(data)
            setLoad(false)


        }, error => console.log(error)
        )
    }, [])
    return (
        <div className='SettingComponent'>
            <div className="box-border"></div>
            <div className="box-circle"></div>
            <div className="box">
                <div className="content">
                    {setting[0].name}
                    {
                        setting[0].id === 'parallel' && data?.road !== undefined ? <MyInputNumber defaultValue={data?.road} type={setting[0].id} tips={true} /> :
                            setting[0].id === 'compensation' && data?.buchang !== undefined ? <MyButton config={
                                data?.buchang === '0' ? [{ background: 'red', text: '无功优先' }, { background: 'yellow', text: '不平衡优先' }, { background: 'green', text: '谐波优先' }, { background: 'gray', text: '目标电压' }, { background: 'pink', text: '固定无功' }]
                                    : data?.buchang === '1' ? [{ background: 'yellow', text: '不平衡优先' }, { background: 'red', text: '无功优先' }, { background: 'green', text: '谐波优先' }, { background: 'gray', text: '目标电压' }, { background: 'pink', text: '固定无功' }]
                                        : data?.buchang === '2' ? [{ background: 'green', text: '谐波优先' }, { background: 'yellow', text: '不平衡优先' }, { background: 'red', text: '无功优先' }, { background: 'gray', text: '目标电压' }, { background: 'pink', text: '固定无功' }]
                                            : data?.buchang === '3' ? [{ background: 'gray', text: '目标电压' }, { background: 'yellow', text: '不平衡优先' }, { background: 'red', text: '无功优先' }, { background: 'green', text: '谐波优先' }, { background: 'pink', text: '固定无功' }]
                                                : [{ background: 'pink', text: '固定无功' }, { background: 'yellow', text: '不平衡优先' }, { background: 'red', text: '无功优先' }, { background: 'green', text: '谐波优先' }, { background: 'gray', text: '目标电压' },]
                            } /> :
                                setting[0].id === 'restore' ? <MyConfirmButton father='restore' title='出厂设置' content='您确定要恢复出厂设置吗?' text='恢复第一路' /> : ''
                    }
                </div>
                <div className="content">
                    {setting[1].name}
                    {
                        setting[1].id === 'acting' && data?.yinshu !== undefined ? <MyInputNumber defaultValue={data?.yinshu} type={setting[1].id} tips={true} /> :
                            setting[1].id === 'idle' ? <MyButton config={[{ background: 'green', text: '关闭' }, { background: 'yellow', text: '使能' },]} /> :
                                setting[1].id === 'copy' ? <MyConfirmButton father='copy' title='参数复制' content='您确定要拷贝参数吗?' text='拷贝到多路' /> : ''
                    }
                </div>
                <div className="content">
                    {setting[2].name}
                    {
                        setting[2].id === 'CTPosition' && data?.CTp !== undefined ? <MyButton config={
                            data?.CTp === '1' ? [{ background: 'yellow', text: '负载侧' }, { background: 'green', text: '网侧' }]
                                : [{ background: 'green', text: '网侧' }, { background: 'yellow', text: '负载侧' },]
                        } /> :
                            setting[2].id === 'imbalance' ? <MyButton config={[{ background: 'green', text: '关闭' }, { background: 'yellow', text: '使能' },]} /> :
                                setting[2].id === 'phase' ? <MyButton config={[{ background: 'green', text: '负序' }, { background: 'yellow', text: '正序' }]} /> : ''
                    }
                </div>
                <div className="content">
                    {setting[3].name}
                    {
                        setting[3].id === 'CTRatio' && data?.CTc !== undefined ? <MyInputNumber defaultValue={data?.CTc} type={setting[3].id} tips={true} /> :
                            setting[3].id === 'harmonic' ? <MyButton config={[{ background: 'green', text: '关闭' }, { background: 'yellow', text: '使能' },]} /> :
                                <MyButton config={[{ background: 'green', text: '运行' }, { background: 'yellow', text: '正常' }]} />}
                </div>
            </div>
        </div>
    )
}
