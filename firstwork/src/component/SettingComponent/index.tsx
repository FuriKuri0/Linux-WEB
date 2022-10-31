import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React, { useEffect, useState, useContext } from 'react'
import './index.scss'
import MyButton from '../MyButton'
import MyInputNumber from '../MyInputNumber'
import MyConfirmButton from '../MyConfirmButtom'
import axios from 'axios'
import { Context } from '../../App'
import theFirstVideo from '../../assets/videos/one.mp4'
import photo from '../../assets/images/bg.jpg'

type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }
type Setting = { changeData: Array<object>, setChangeData: Function, setting: any };
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
            props?.setChangeData([list[61], list[59], list[68], list[58], list[57], { point: 11, value: 0, type: 1 }, { point: 13, value: 0, type: 1 }, { point: 12, value: 0, type: 1 }])
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
                        setting[0].id === 'parallel' && data?.road !== undefined ? <MyInputNumber changeData={props?.changeData} setChangeData={props?.setChangeData} defaultValue={data?.road} type={setting[0].id} tips={true} /> :
                            setting[0].id === 'compensation' && data?.buchang !== undefined ? < MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={4} config={
                                data?.buchang === '0' ? [{ background: 'red', text: '无功优先', value: 0 }, { background: 'yellow', text: '不平衡优先', value: 1 }, { background: 'green', text: '谐波优先', value: 2 }, { background: 'gray', text: '目标电压', value: 3 }, { background: 'pink', text: '固定无功', value: 4 }]
                                    : data?.buchang === '1' ? [{ background: 'yellow', text: '不平衡优先', value: 1 }, { background: 'green', text: '谐波优先', value: 2 }, { background: 'red', text: '无功优先', value: 0 }, { background: 'gray', text: '目标电压', value: 3 }, { background: 'pink', text: '固定无功', value: 4 }]
                                        : data?.buchang === '2' ? [{ background: 'green', text: '谐波优先', value: 2 }, { background: 'yellow', text: '不平衡优先', value: 1 }, { background: 'red', text: '无功优先', value: 0 }, { background: 'gray', text: '目标电压', value: 3 }, { background: 'pink', text: '固定无功', value: 4 }]
                                            : data?.buchang === '3' ? [{ background: 'gray', text: '目标电压', value: 3 }, { background: 'green', text: '谐波优先', value: 2 }, { background: 'yellow', text: '不平衡优先', value: 1 }, { background: 'red', text: '无功优先', value: 0 }, { background: 'pink', text: '固定无功', value: 4 }]
                                                : [{ background: 'pink', text: '固定无功', value: 4 }, { background: 'gray', text: '目标电压', value: 3 }, { background: 'green', text: '谐波优先', value: 2 }, { background: 'yellow', text: '不平衡优先', value: 1 }, { background: 'red', text: '无功优先', value: 0 },]
                            } /> :
                                setting[0].id === 'restore' ? <MyConfirmButton father='restore' title='出厂设置' content='您确定要恢复出厂设置吗?' text='恢复第一路' /> : ''
                    }
                </div>
                <div className="content">
                    {setting[1].name}
                    {
                        setting[1].id === 'acting' && data?.yinshu !== undefined ? <MyInputNumber changeData={props?.changeData} setChangeData={props?.setChangeData} defaultValue={data?.yinshu} type={setting[1].id} tips={true} /> :
                            setting[1].id === 'idle' ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={5} config={[{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },]} /> :
                                setting[1].id === 'copy' ? <MyConfirmButton father='copy' title='参数复制' content='您确定要拷贝参数吗?' text='拷贝到多路' /> : ''
                    }
                </div>
                <div className="content">
                    {setting[2].name}
                    {
                        setting[2].id === 'CTPosition' && data?.CTp !== undefined ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={2} config={
                            data?.CTp === '1' ? [{ background: 'yellow', text: '负载侧', value: 1 }, { background: 'green', text: '网侧', value: 0 }]
                                : [{ background: 'green', text: '网侧', value: 0 }, { background: 'yellow', text: '负载侧', value: 1 },]
                        } /> :
                            setting[2].id === 'imbalance' ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={6} config={[{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },]} /> :
                                setting[2].id === 'phase' ? <MyButton config={[{ background: 'green', text: '负序' }, { background: 'yellow', text: '正序' }]} /> : ''
                    }
                </div>
                <div className="content">
                    {setting[3].name}
                    {
                        setting[3].id === 'CTRatio' && data?.CTc !== undefined ? <MyInputNumber changeData={props?.changeData} setChangeData={props?.setChangeData} defaultValue={data?.CTc} type={setting[3].id} tips={true} /> :
                            setting[3].id === 'harmonic' ? <MyButton point={7} changeData={props?.changeData} setChangeData={props?.setChangeData} config={[{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },]} /> :
                                <MyButton config={[{ background: 'green', text: '运行' }, { background: 'yellow', text: '正常' }]} />}
                </div>
            </div>
        </div>
    )
}
