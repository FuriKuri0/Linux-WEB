import { Button, Drawer, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import './index.scss'

type Props={ father?:string, title?:string, content?:string, text?:string, color?:string }

const MyConfirmButton = (props:Props) => {

  const [open, setOpen] = useState(false);
  // 颜色
  const [color, setColor] = useState(props?.color?props?.color:'white');
  // 自定义颜色
  const [custom, setCustom] = useState({ backgroundColor: 'white', color: 'rgba(7, 129, 87, 1)' });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

    // 颜色变化设置
    useEffect(() => {
      switch (color) {
        case 'red': setCustom({ backgroundColor: 'rgba(250, 124, 128, 1)', color: 'white' }); break;
        case 'yellow': setCustom({ backgroundColor: 'rgba(250, 171, 93, 1)', color: 'white' }); break;
        case 'green': setCustom({ backgroundColor: 'rgba(7, 129, 87, 1)', color: 'white' }); break;
        case 'white': setCustom({ backgroundColor: 'white', color: 'rgba(7, 129, 87, 1)' }); break;
        case 'gray': setCustom({ backgroundColor: 'rgba(174, 201, 242, 1)', color: 'white' }); break;
        case 'pink': setCustom({ backgroundColor: 'rgba(250, 151, 249, 1)', color: 'white' }); break;
      }
    }, [color])

  return (
    <>
        <Button className='MyConfirmButton-face' type="primary" style={custom} onClick={showDrawer}>
            {props?.text?props?.text:'按钮'}
        </Button>
        <Drawer
            className='MyConfirmButton'
            title={<span className='title'>{props?.title?props?.title:'标题未加载出来'}</span>}
            placement='bottom'
            height={350}
            closable={false}
            onClose={onClose}
            open={open}
            footer={
                <>
                    <Button type='primary' className='confirm' onClick={onClose}>确定</Button>
                    <Button type='default' className='cancle' onClick={onClose}>取消</Button>
                </>
            }
        >
            <div className="progress">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((i)=><div key={`${props.father}circlr-${i}`} className="circle"></div>)}
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <div className='content'>{props?.content?props.content:'内容尚未加载出来'}</div>
        </Drawer>
    </>
  );
};

export default MyConfirmButton;