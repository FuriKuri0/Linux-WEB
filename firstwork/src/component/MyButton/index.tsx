import React from 'react'
import './index.css'

type Props={ status?:string }

// 按钮组件 供四种状态 默认为白底绿字
export default function MyButton( props?: Props ) {
    
    let custom={ backgroundColor:'white',color:'rgba(7, 129, 87, 1)' };
    if(Object.keys(props as Props)[0]){
        switch((props as Props).status){
            case 'red':custom={ backgroundColor:'rgba(250, 124, 128, 1)',color:'white' };break;
            case 'yellow':custom={ backgroundColor:'rgba(250, 171, 93, 1)',color:'white' };break;
            case 'green':custom={ backgroundColor:'rgba(7, 129, 87, 1)',color:'white' };break;
            case 'white':
            default:custom={ backgroundColor:'white',color:'rgba(7, 129, 87, 1)' };break;
        }
    }
  return (
    <button className='MyButton' style={custom}>按钮</button>
  )
}
