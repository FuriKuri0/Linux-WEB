import { Button, Drawer, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react';
import './index.css'

type Props={ title?:string, content?:string }

const MyDrawer = () => {
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
        title={<span className='title'>参数复制</span>}
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
        <div className='content'>确认要拷贝参数吗?</div>
      </Drawer>
    </>
  );
};

export default MyDrawer;