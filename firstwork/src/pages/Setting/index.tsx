import React, { useEffect, useState, useContext } from 'react'
import './index.scss'
import MyButton from '../../component/MyButton'
import SettingComponent from '../../component/SettingComponent'
import upload from '../../assets/images/upload.png'
import { Popconfirm } from 'antd';
import axios from 'axios'
import { Alert } from '../../utils/globalfunction'
import { Context } from '../../App'

const text = '确定更新数据吗？';
type context = { login: boolean, setLogin: Function, setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }


type Object = { point: number, value: number }

export default function Setting() {
    const { login, setLogin } = useContext<context>(Context)
    const [changeData, setChangeData] = useState<Array<Object>>([])
    const [Login, setLogion] = useState(1)
    //localStorage.setItem('name','muou')
    //localStorage.getItem('name')
    // localStorage.remove('name')   .claer()
    useEffect(() => {
        console.log(localStorage.getItem('login'), 'location');
        if (localStorage.getItem('login')) {
            setLogion(0)
        }
    }, [localStorage])
    useEffect(() => {
        console.log(login, 'login');

        if (login) {
            setLogion(0)
        }
    }, [login])


    const confirm = () => {
        console.log(changeData, 'changeData');
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url: 'http://192.168.10.1/cgi-bin/main.cgi',
            data: { type: 2, list: changeData }
        }).then(response => {
            if (response.data === 1) {
                Alert('修改成功')
                console.log(response, 'response');

            } else {
                Alert('修改失败！', 2)
            }


        }, error => {
            console.log(error);
        }
        )
    };

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
            <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                <div className='upload'><img src={upload} alt="" /></div>
            </Popconfirm>
            {Login ? <div style={{ zIndex: '10', position: 'absolute', right: '10px', top: '33vh', width: '100px', height: '100px', background: 'rgba(0,0,0,0)' }}></div> : ''}
            <div className='setting'>
                <div className="body">
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent changeData={changeData} setChangeData={setChangeData} setting={firstSetting} /></div>
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent changeData={changeData} setChangeData={setChangeData} setting={secondSetting} /></div>
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent changeData={changeData} setChangeData={setChangeData} setting={thirdSetting} /></div>
                </div>
            </div>
        </>
    )
}
