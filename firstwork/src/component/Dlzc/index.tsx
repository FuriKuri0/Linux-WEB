import React from 'react'
import './index.css'
import Select from '../Select'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { Alert } from '../../utils/globalfunction'
type Props = { show: boolean }

export default function Dlzc({ show }: Props) {
    const [Password, setPassport] = React.useState('')
    const [type, setType] = React.useState('1')
    const login = () => {
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
            <Button onClick={login} className='confirmBtn' type="primary" shape="round"  >确定</Button>
        </div >
    )
}
