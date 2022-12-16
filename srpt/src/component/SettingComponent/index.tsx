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

type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string, configPoint: any }
type Setting = { changeData: Array<object>, setChangeData: Function, setting: any, refresh: number };
type Data = { road: string, yinshu: string, CTp: string, CTc: string, buchang: string, wugong: string, nobalance: string, xiebo: string }
export default function SettingComponent(props?: Setting) {
    const { setLoad } = useContext<context>(Context)
    const { configPoint } = useContext<context>(Context)
    const [control, setControl] = useState([]);
    // 固定设置
    let setting;
    if (Object.keys(props as Setting)[0]) {
        setting = props?.setting
    }
    const [data, setData] = useState<Data>()

    useEffect(() => {
        setControl(configPoint?.Control);
    }, [configPoint]);

    const getData = () => {

        if (control && control[0]) {
            setLoad(true)
            axios({
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                // 1 DO 2 AO 0 查询
                // 设置 point点 value 值 post
                url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
            }).then(response => {
                let list = response.data.AiList
                let list1 = response.data.DiList
                let data: Data = { road: (4096 / list[control[10][`queryPoint`]].value) + '', yinshu: (list[control[8][`queryPoint`]].value / 4096) + '', CTp: list[control[6][`queryPoint`]].value + '', CTc: list[control[7][`queryPoint`]].value + '', buchang: list[control[5][`queryPoint`]].value + '', wugong: list1[control[3][`queryPoint`]].value + '', nobalance: list1[control[2][`queryPoint`]].value + '', xiebo: list1[control[4][`queryPoint`]].value + '' };
                props?.setChangeData([
                    { value: list[control[10][`queryPoint`]].value, point: control[10][`modifyPoint`], change: 0, type: 0 },
                    { value: list[control[8][`queryPoint`]].value, point: control[8][`modifyPoint`], change: 0, type: 0 },
                    { value: list[control[6][`queryPoint`]].value, point: control[6][`modifyPoint`], change: 0, type: 0 },
                    { value: list[control[7][`queryPoint`]].value, point: control[7][`modifyPoint`], change: 0, type: 0 },
                    { value: list[control[5][`queryPoint`]].value, point: control[5][`modifyPoint`], change: 0, type: 0 },
                    { value: list1[control[3][`queryPoint`]].value, point: control[3][`modifyPoint`], change: 0, type: 1 },
                    { value: list1[control[2][`queryPoint`]].value, point: control[2][`modifyPoint`], change: 0, type: 1 },
                    { value: list1[control[4][`queryPoint`]].value, point: control[4][`modifyPoint`], change: 0, type: 1 },
                ])
                setData(data)
                setLoad(false)
            }, error => console.log(error)
            )
        }
    }

    useEffect(() => {
        getData()
    }, [props?.refresh, control])

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
                            setting[1].id === 'idle' && data?.wugong !== undefined ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={5} config={data.wugong === '0' ? [{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },] : [{ background: 'yellow', text: '使能', value: 1 }, { background: 'green', text: '关闭', value: 0 },]} /> :
                                setting[1].id === 'copy' ? <MyConfirmButton father='copy' title='参数复制' content='您确定要拷贝参数吗?' text='拷贝到多路' /> : ''
                    }
                </div>
                <div className="content">
                    {setting[2].name}
                    {
                        setting[2].id === 'CTPosition' && data?.CTp !== undefined ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={2} config={
                            data?.CTp === '48' ? [{ background: 'yellow', text: '负载侧', value: 1 }, { background: 'green', text: '网侧', value: 0 }]
                                : [{ background: 'green', text: '网侧', value: 0 }, { background: 'yellow', text: '负载侧', value: 1 },]
                        } /> :
                            setting[2].id === 'imbalance' && data?.nobalance !== undefined ? <MyButton changeData={props?.changeData} setChangeData={props?.setChangeData} point={6} config={data.nobalance === '1' ? [{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },] : [{ background: 'yellow', text: '使能', value: 1 }, { background: 'green', text: '关闭', value: 0 },]} /> :
                                setting[2].id === 'phase' ? <MyButton config={[{ background: 'green', text: '负序' }, { background: 'yellow', text: '正序' }]} /> : ''
                    }
                </div>
                <div className="content">
                    {setting[3].name}
                    {
                        setting[3].id === 'CTRatio' && data?.CTc !== undefined ? <MyInputNumber changeData={props?.changeData} setChangeData={props?.setChangeData} defaultValue={data?.CTc} type={setting[3].id} tips={true} /> :
                            setting[3].id === 'harmonic' && data?.xiebo !== undefined ? <MyButton point={7} changeData={props?.changeData} setChangeData={props?.setChangeData} config={data.xiebo === '0' ? [{ background: 'green', text: '关闭', value: 0 }, { background: 'yellow', text: '使能', value: 1 },] : [{ background: 'yellow', text: '使能', value: 1 }, { background: 'green', text: '关闭', value: 0 },]} /> :
                                setting[3].id === 'output' ? <MyButton config={[{ background: 'green', text: '运行' }, { background: 'yellow', text: '正常' }]} /> : ''}
                </div>
            </div>
        </div>
    )
}
