import React from 'react'
import Nav from '../Nav/index'
import { getCookie } from '../../utils/globalfunction'
import './index.scss'
import bg from '../../assets/images/bg.jpg'
type Props = { kind: string }
export default function Head({ kind }: Props) {
    //-1未登录   //0普通用户  //1管理员
    const [type, setType] = React.useState(-1)
    const config = {
        home: '主界面',
        setting: '设置',
        histogram: '柱状图',
        waveform: '波形图',
        record: '事件记录',
        warning: '警告',
        dlzc: type === -1 ? '登录注册' : ''
    }
    React.useEffect(() => {
        if (getCookie('user')) {
            if (getCookie('user') === 'root') {
                setType(1)
            }
            else {
                setType(0)
            }
        }
        else {
            setType(-1)
        }
    }, [getCookie('user')])
    return (
        kind === 'pc' ? <>
            <Nav{...config} />
            <div className='background'><img src={bg} alt="" style={{ width: '100vw' }} /></div>
            <div className='background' ></div></> :
            <Nav
                home='你好'
                setting='设置'
                histogram='柱状图'
                waveform='波形图'
                record='事件记录'
                warning='警告'
                dlzc={type === -1 ? '登录注册' : ''}
            />

    )
}
