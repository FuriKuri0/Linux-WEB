import React from 'react'
import MyButton from '../MyButton'
import MyInputNumber from '../MyInputNumber'

type Props={setting:any};

export default function TSCContent(props?:Props) {

    const setting=props?.setting;

  return (
    <div className="TSC-content-container">
        <div className="content title">
            <span>参数</span>
            <span>设置</span>
        </div>
        <div className="content">
            <span className='text'>{setting[0].name}</span>
            {setting[0].id==='TSCSwitch'?<MyButton type='TSCSwitch'/>:<MyInputNumber type={setting[0].id}/>}
        </div>
        <div className="content">
            <span className='text'>{setting[1].name}</span>
            {setting[1].id==='switchMode'?<MyButton type='switchMode'/>:<MyInputNumber type={setting[1].id}/>}
        </div>
        <div className="content">
            <span className='text'>{setting[2].name}</span>
            <MyInputNumber type={setting[2].id}/>
        </div>
        <div className="content">
            <span className='text'>{setting[3].name}</span>
            <MyInputNumber type={setting[3].id}/>
        </div>
        <div className="content">
            <span className='text'>{setting[4].name}</span>
            <MyInputNumber type={setting[4].id}/>
        </div>
    </div>
  )
}
