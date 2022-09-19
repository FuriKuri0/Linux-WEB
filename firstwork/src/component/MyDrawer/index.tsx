import { Button, Drawer, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react';
import './index.css'

type Props={ title?:string, content?:string, status?:boolean }

const MyDrawer = (props:Props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        className='MyDrawer'
        title={<span className='title'>{props?.title?props?.title:'标题未加载出来'}</span>}
        placement='bottom'
        height={300}
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
        <div className='content'>{props?.content?props.content:'内容尚未加载出来'}</div>
      </Drawer>
    </>
  );
};

export default MyDrawer;