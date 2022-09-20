import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useState, useEffect } from 'react'
import './index.css'

type Props = { config?: any }

// 按钮组件 供四种状态 默认为白底绿字
export default function MyButton(props?: Props) {

  const type = props?.config?props?.config:[{ background: 'green', text: '开启' }, { background: 'white', text: '关闭' }];
  
  let [i, setI] = useState(0)
  // 颜色
  const [color, setColor] = useState(type[i].background);
  // 按钮文本
  const [text, setText] = useState(type[i].text);
  // 自定义颜色
  const [custom, setCustom] = useState({ backgroundColor: 'white', color: 'rgba(7, 129, 87, 1)' });

  // 对话框设置
  const confirm = (content: string) => {
    Modal.confirm({
      title: '注意',
      icon: <ExclamationCircleOutlined />,
      content: `${content}`,
      okText: '确认',
      cancelText: '取消',
    });
  };

  // 初始化设置
  useEffect(() => {
    // switch (type) {
    //   case 'CTPosition': setColor('yellow'); setText('负载侧'); break;
    //   case 'compensation': setColor('red'); setText('无功优先'); break;
    //   case 'idle': setColor('green'); setText('关闭'); break;
    //   case 'imbalance': setColor('green'); setText('关闭'); break;
    //   case 'harmonic': setColor('green'); setText('关闭'); break;
    //   case 'restore': setColor('white'); setText('恢复第一路'); break;
    //   case 'copy': setColor('white'); setText('拷贝到多路'); break;
    //   case 'phase': setColor('yellow'); setText('正序'); break;
    //   case 'output': setColor('yellow'); setText('正常'); break;
    //   case 'TSCSwitch': setColor('green'); setText('禁用'); break;
    //   case 'switchMode': setColor('green'); setText('自动'); break;
    //   default: setColor('red'); setText('系统出错'); break;
    // }
  }, [])

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

  // 点击事件
  function handleClick() {
    if (i !== type.length - 1) {
      setColor(type[i + 1].background); 
      setText(type[i + 1].text);
      setI(i + 1);
    } else {
      setColor(type[0].background); 
      setText(type[0].text);
      setI(0)
    }

    // switch (type) {
    //   // 补偿模式
    //   case 'compensation': {
    //     switch (color) {
    //       case 'red': setColor('yellow'); setText('不平衡优先'); break;
    //       case 'yellow': setColor('green'); setText('谐波优先'); break;
    //       case 'green': setColor('gray'); setText('目标电压'); break;
    //       case 'gray': setColor('pink'); setText('固定无功'); break;
    //       case 'pink': setColor('red'); setText('无功优先'); break;
    //     }
    //   } break;
    //   // 无功开关
    //   case 'idle':
    //   // 不平衡开关
    //   case 'imbalance':
    //   // 谐波开关
    //   case 'harmonic': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('关闭'); break;
    //       case 'green': setColor('yellow'); setText('使能'); break;
    //     }
    //   } break;
    //   // CT位置
    //   case 'CTPosition': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('网侧'); break;
    //       case 'green': setColor('yellow'); setText('负载侧'); break;
    //     }
    //   }; break;
    //   // 相序设置
    //   case 'phase': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('负序'); break;
    //       case 'green': setColor('yellow'); setText('正序'); break;
    //     }
    //   }; break;
    //   // 输出设置
    //   case 'output': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('运行'); break;
    //       case 'green': setColor('yellow'); setText('正常'); break;
    //     }
    //   }; break;
    //   // TSC开关
    //   case 'TSCSwitch': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('禁用'); break;
    //       case 'green': setColor('yellow'); setText('使能'); break;
    //     }
    //   }; break;
    //   // 投切方式
    //   case 'switchMode': {
    //     switch (color) {
    //       case 'yellow': setColor('green'); setText('自动'); break;
    //       case 'green': setColor('yellow'); setText('手动'); break;
    //     }
    //   }; break;
    //   // 恢复出厂设置
    //   case 'restore': {
    //     confirm('您确定要恢复出厂设置吗？');
    //   }; break;
    //   // 拷贝参数
    //   case 'copy': {
    //     confirm('您确定要拷贝参数吗?');
    //   }; break;
    // }

  }

  return (
    <button className='MyButton' style={custom} onClick={handleClick}>{text}</button>
  )
}
