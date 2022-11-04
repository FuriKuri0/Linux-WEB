import React, { useContext } from 'react'
import './index.scss'
import Select from '../Select'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { Alert } from '../../utils/globalfunction'
import axios from 'axios'
import { Context } from '../../App'

type Props = { show: boolean, setShowdl: Function, setMaskClick: Function, setMask: Function }
type context = { login: boolean, setLogin: Function, setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function Dlzc({ show, setShowdl, setMaskClick, setMask }: Props) {
    const { login, setLogin } = useContext<context>(Context)

    const [Password, setPassport] = React.useState('')
    const [type, setType] = React.useState('1')
    // const Login: any = () => {
    //     axios({
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //         url: `http://192.168.10.1/cgi-bin/main.cgi`,
    //         data: { password: Password, type: 10 }
    //     }).then(response => {
    //         if (response.data === 1) {
    //             Alert('登陆成功!')
    //             setShowdl(false)
    //             setMaskClick(false)
    //             setMask(false)
    //             setLogin(true)
    //             localStorage.setItem('login', '0')
    //         } else {
    //             Alert('登陆失败!', 0)
    //         }
    //         console.log(response);
    //     }, error => {
    //         console.log(error);
    //         Alert('登陆失败!', 0)
    //     }
    //     )
    //     Password ? console.log(type, Password) : Alert('请输入密码!', 0)
    // }
    const Login: any = () => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: `http://192.168.10.1/cgi-bin/main.cgi?password=${Password}&type=10}`,
        }).then(response => {
            if (response.data === 1) {
                Alert('登陆成功!')
                setShowdl(false)
                setMaskClick(false)
                setMask(false)
                setLogin(true)
                localStorage.setItem('login', '0')
            } else {
                Alert('登陆失败!', 0)
            }
            // console.log(response);
        }, error => {
            console.log(error);
            Alert('登陆失败!', 0)
        }
        )
        Password ? console.log(type, Password) : Alert('请输入密码!', 0)
    }
    return (
        <div className={show ? 'dlzc show' : 'dlzc'}>
            <div className='title'><strong>登录</strong><br />登录用户以继续!</div>
            <Select option={['标准用户', '高级用户', '检测人员']} setType={setType} />
            <Input.Password
                onChange={e => setPassport(e.target.value)}
                style={{ fontSize: '5vw', borderRadius: '3vw', height: '7vh', width: '90%', marginTop: '14px', marginLeft: '50%', transform: 'translateX(-50%)', }}
                placeholder="密码"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button onClick={Login} className='confirmBtn' type="primary" shape="round"  >确定</Button>
        </div >
    )
}
