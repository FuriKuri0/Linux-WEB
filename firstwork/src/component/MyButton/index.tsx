import React,{ useState,useEffect } from 'react'
import './index.css'

type Props={ status?:string, text?:string, type?:string }

// 按钮组件 供四种状态 默认为白底绿字
export default function MyButton( props?: Props ) {

    const type=props?.type;
    
    // 颜色
    const [color,setColor]=useState('');
    // 按钮文本
    const [text,setText]=useState('');
    // 自定义颜色
    const [custom,setCustom]=useState({ backgroundColor:'white',color:'rgba(7, 129, 87, 1)' });
    
    // 初始化设置
    useEffect(()=>{
      switch(type){
        case 'parallel': setColor('white');setText('2路');break;
        case 'acting': setColor('white');setText('0.98');break;
        case 'CTPosition': setColor('yellow');setText('负载侧');break;
        case 'CTRatio': setColor('white');setText('1000/5');break;
        case 'compensation': setColor('red');setText('无功优先');break;
        case 'idle': setColor('green');setText('关闭');break;
        case 'imbalance': setColor('green');setText('关闭');break;
        case 'harmonic': setColor('green');setText('关闭');break;
        case 'restore': setColor('white');setText('恢复第一路');break;
        case 'copy': setColor('white');setText('拷贝到多路');break;
        case 'phase': setColor('yellow');setText('正序');break;
        case 'output': setColor('yellow');setText('正常');break;
        default: setColor('red');setText('系统出错');break;
      }
    },[])

    // 颜色变化设置
    useEffect(()=>{
      switch(color){
        case 'red':setCustom({ backgroundColor:'rgba(250, 124, 128, 1)',color:'white' });break;
        case 'yellow':setCustom({ backgroundColor:'rgba(250, 171, 93, 1)',color:'white' });break;
        case 'green':setCustom({ backgroundColor:'rgba(7, 129, 87, 1)',color:'white' });break;
        case 'white':setCustom({ backgroundColor:'white',color:'rgba(7, 129, 87, 1)' });break;
        case 'gray':setCustom({ backgroundColor:'rgba(174, 201, 242, 1)',color:'white' });break;
        case 'pink':setCustom({ backgroundColor:'rgba(250, 151, 249, 1)',color:'white' });break;
    }
    },[color])

    // 点击事件
    function handleClick(){
      switch(type){
        // 补偿模式
        case 'compensation':{
          switch(color){
            case 'red':setColor('yellow');setText('不平衡优先');break;
            case 'yellow':setColor('green');setText('谐波优先');break;
            case 'green':setColor('gray');setText('目标电压');break;
            case 'gray':setColor('pink');setText('固定无功');break;
            case 'pink':setColor('red');setText('无功优先');break;
          }
        }break;
        // 无功开关
        case 'idle':
        // 不平衡开关
        case 'imbalance':
        // 谐波开关
        case 'harmonic':{
          switch(color){
            case 'yellow':setColor('green');setText('关闭');break;
            case 'green':setColor('yellow');setText('使能');break;
          }
        }break;
        // CT位置
        case 'CTPosition':{
          switch(color){
            case 'yellow':setColor('green');setText('网侧');break;
            case 'green':setColor('yellow');setText('负载侧');break;
          }
        };break;
        // 相序设置
        case 'phase':{
          switch(color){
            case 'yellow':setColor('green');setText('负序');break;
            case 'green':setColor('yellow');setText('正序');break;
          }
        };break;
        // 输出设置
        case 'output':{
          switch(color){
            case 'yellow':setColor('green');setText('运行');break;
            case 'green':setColor('yellow');setText('正常');break;
          }
        };break;
      }
      
    }

  return (
    <button className='MyButton' style={custom} onClick={handleClick}>{text}</button>
  )
}
