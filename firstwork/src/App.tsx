import 'antd/dist/antd.variable.min.css';
import 'antd/dist/antd.min.css'
import React from 'react';
import { useRoutes } from 'react-router-dom'
import { Spin, ConfigProvider } from 'antd';
import routes from './routes'
import Head from './component/Head';
import PhoneHead from './component/PhoneHead';

import './App.scss';
import './utils/globalfunction'
import { createContext } from 'react'
import './base.css'

// 自定义主题色
ConfigProvider.config({
  theme: {
    primaryColor: 'rgba(7, 129, 87, 1)',
  },
});

type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }
export const Context = createContext<context>()

function App() {
  const element = useRoutes(routes);
  const [menu, setMenu] = React.useState('主页面')
  const [type, setType] = React.useState('phone');
  const [load, setLoad] = React.useState(false);
  const [mask, setMask] = React.useState(false)
  const [maskClick, setMaskClick] = React.useState(false)
  const cancelMask = () => {
    setMaskClick(true)
  }
  //判断设备类型
  // React.useEffect(() => {
  //   window.innerHeight > window.innerWidth ? setType('phone') : setType('pc');
  //   window.addEventListener('resize', () => {
  //     window.innerHeight > window.innerWidth ? setType('phone') : setType('pc');
  //   })
  // }, [])
  //跟踪目录
  React.useEffect(() => {
    let arr = window.location.href.split('/')
    // console.log(arr[arr.length - 1]);
    switch (arr[arr.length - 1]) {
      case 'setting': setMenu('设置'); break;
      case 'home': setMenu('主页面'); break;
      case 'user': setMenu('用户分路'); break;
      case 'tsc': setMenu('TSC参数'); break;
      case 'chart': setMenu('图表'); break;
      case 'record': setMenu('事件记录'); break;
      case 'warning': setMenu('告警'); break;


    }
  }, [window.location.href])
  return (
    <>
      {/* 加载中 */}
      {load ? <Spin
        tip="Loading..."
        style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(-50%)', top: '50%', zIndex: 1000 }}
      >
      </Spin> : ''}
      {/* 黑幕 */}
      {mask ? <div onClick={cancelMask} style={{ position: 'absolute', zIndex: '999', width: '100vw', height: '100vh', background: 'rgba(0,0,0,.3)' }}></div> : ''}
      {/* 状态管理：加载中 黑幕*/}
      <Context.Provider value={{ setLoad, setMask, maskClick, setMaskClick, menu }}>
        {type === 'pc' ?
          <>
            <Head kind='pc' />
            <div></div>
            <div className='main'>
              <div className='top'><i>当前位置</i> : &nbsp;{menu}</div>
              {element}
            </div></> :
          <div style={{ overflow: 'auto', width: '100vw', height: '100vh' }}>
            <div style={{ width: '100%' }}>
              <PhoneHead />
              {element}
            </div>
          </div>}
      </Context.Provider>
    </>
  );
}

export default App;
