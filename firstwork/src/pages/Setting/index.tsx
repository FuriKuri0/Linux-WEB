import React, { useEffect, useState, useContext } from 'react'
import './index.scss'
import MyButton from '../../component/MyButton'
import SettingComponent from '../../component/SettingComponent'
import uploadImg from '../../assets/images/upload.png'
import refreshImg from '../../assets/images/refresh.png'

import { Popconfirm } from 'antd';
import axios from 'axios'
import { Alert } from '../../utils/globalfunction'
import { Context } from '../../App'

const uploadText = '确定上传数据吗？';
const refreshText = '确定定值更新数据吗？';

type context = { login: boolean, setLogin: Function, setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string, configPoint: any }


type Object = { point: number, value: number, type?: number, change?: number }

export default function Setting() {
    const { login, setLogin } = useContext<context>(Context)
    const [changeData, setChangeData] = useState<Array<Object>>([])
    const [Login, setLogion] = useState(1)
    //localStorage.setItem('name','muou')
    //localStorage.getItem('name')
    // localStorage.remove('name')   .claer()
    const [refresh, setRefresh] = useState(0)
    useEffect(() => {
        // console.log(localStorage.getItem('login'), 'location');
        if (localStorage.getItem('login')) {
            setLogion(0)
        }
    }, [localStorage])
    useEffect(() => {
        // console.log(login, 'login');

        if (login) {
            setLogion(0)
        }
    }, [login])


    const confirmUpload = () => {
        let di: any = []
        let ai: any = []
        let updateData: any = []
        changeData.map((v, i) => {
            if (v.change) {
                if (v.type === 1) {
                    di.push({ point: v.point, value: v.value })
                } else {
                    ai.push({ point: v.point, value: v.value })
                }
            }

            updateData.push({ point: v.point, value: v.value, type: v.type, change: 0 })
        })
        console.log('AO', ai, 'DO', di)
        if (ai.length > 0) {
            axios({
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                url: 'http://192.168.10.1/cgi-bin/main.cgi',
                data: { type: 2, list: ai }
            }).then(response => {
                if (response.data === 1) {
                    Alert('AO修改成功')
                    console.log(response, 'response');

                } else {
                    Alert('AO修改失败！', 2)
                }


            }, error => {
                console.log(error);
            }
            )
        }
        if (di.length !== 0) {
            axios({
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                url: 'http://192.168.10.1/cgi-bin/main.cgi',
                data: { type: 1, list: di }
            }).then(response => {
                if (response.data === 1) {
                    Alert('DO修改成功')
                    console.log(response, 'response');

                } else {
                    Alert('DO修改失败！', 2)
                }


            }, error => {
                console.log(error);
            }
            )
        }
        setChangeData(updateData)
        setRefresh(refresh + 1)

    };
    const confirmRefresh = () => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url: 'http://192.168.10.1/cgi-bin/main.cgi',
            data: { type: 1, list: [{ point: 997, value: 1 }] }
        }).then(response => {
            if (response.data === 1) {
                Alert('定值更新成功')
                console.log(response, 'response');
            } else {
                Alert('定值更新失败!', 2)
            }

        }, error => {
            Alert('网络故障！', 2)
            console.log(error);
        }
        )
    };

    // 固定设置
    const firstSetting = [
        { name: '并联路数', id: 'parallel' },
        { name: '目标功率因素', id: 'acting' },
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
        <><Popconfirm placement="topLeft" title={uploadText} onConfirm={confirmUpload} okText="Yes" cancelText="No">
            <div className='upload'><img src={uploadImg} alt="" /></div>
        </Popconfirm>
            <Popconfirm placement="topLeft" title={refreshText} onConfirm={confirmRefresh} okText="Yes" cancelText="No">
                <div className='refresh'><img src={refreshImg} alt="" /></div>
            </Popconfirm>
            {Login ? <div style={{ zIndex: '10', position: 'absolute', right: '10px', top: '33vh', width: '100px', height: '300px', background: 'rgba(0,0,0,0)' }}></div> : ''}
            <div className='setting'>
                <div className="body">
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent refresh={refresh} changeData={changeData} setChangeData={setChangeData} setting={firstSetting} /></div>
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent refresh={refresh} changeData={changeData} setChangeData={setChangeData} setting={secondSetting} /></div>
                    <div className='settingmask'><div className='settingMask' style={{ zIndex: Login }}></div><SettingComponent refresh={refresh} changeData={changeData} setChangeData={setChangeData} setting={thirdSetting} /></div>
                </div>
            </div>
        </>
    )
}
