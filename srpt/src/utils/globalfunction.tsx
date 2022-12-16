import axios from 'axios'
// import { Alert } from 'antd';
import True from '../assets/images/true.png'
import False from '../assets/images/false.png'
import { encryptAES, decryptAES, encryptRSA, initKey } from './encrypt';
// axios.defaults.withCredentials = true

//读Cookie
export const getCookie = (cookieName: string) => {
  const strCookie = document.cookie
  const cookieList = strCookie.split(';')

  for (let i = 0; i < cookieList.length; i++) {
    const arr = cookieList[i].split('=')
    if (cookieName === arr[0].trim()) {
      return arr[1]
    }
  }
  return ''
}

//axios
export const Axios = (type: string, url: string, data?: object, setLoad?: Function, setFlag?: Function, back?: Function, setError?: Function, refresh?: Function, params?: object, blob?: boolean) => {

  return new Promise((resolve, reject) => {

    // //公钥
    const PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDI3hf95L3aMonXCgG926Gt6nwft8RnhM+6UHVieE4N58V0swNvFVU4XRrlNn4o2vU8eZ5z1c8s2AHEl65ck5kiAPjC82nCgWd4j1sdr2Wvz18B+/DT4PLZum4QzwIAviQfafp1qVbC6fYj0BLyDXmeaO5gi3X19U0kIhUPWbzAqQIDAQAB';
    // AES秘钥
    let AESKey = initKey(16);
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header'),
        // 'Access-Control-Expose-Headers':'Authorization'
      },
      method: type.toUpperCase(),
      url,
      // data:nojson?data:JSON.stringify(data),
      data: Object.prototype.toString.call(data) === '[Object FormDta]' ? data : JSON.stringify({
        // 密钥
        encryptKey: encryptRSA(PUBLIC_KEY, AESKey),
        // 密文
        encryptStr: encryptAES(AESKey, JSON.stringify(data)),
      }),
      params: params || '',
      responseType: blob ? 'blob' : 'json'  //或者是blob
    })
      .then(
        response => {
          if (typeof setLoad === 'function') {
            setLoad(0);
          }
          if (200 === response.data.code || !response.data.code) {
            //回复
            if (response.data.code && (typeof setFlag === 'function' || typeof back === 'function')) {
              Alert(response.data.msg, 1, () => {
              })
              if (typeof setFlag === 'function') {
                setFlag(1)

              }
              if (typeof back === 'function') {
                back(-1)
              }
            }

            if (refresh && typeof refresh === 'function') {
              refresh()
            }
            //判断是否是获取文件
            if (blob) {
              let imageType = response.headers['content-type'];   //获取图片类型
              const blob = new Blob([response.data], { type: imageType })
              const imageUrl = (window.URL || window.webkitURL).createObjectURL(blob)
              resolve(imageUrl)//返回文件url
            }
            //返回数据
            if (response.data.data) {
              AESKey = type.toUpperCase() === 'GET' ? 'Z6XB<$F9fA5jRT92' : AESKey;
              let data = JSON.parse(decryptAES(AESKey, response.data.data))
              //判断是否设置cookie
              if (response.headers.authorization) {
                document.cookie = `header=${response.headers.authorization}`;
                document.cookie = `permission=${data.position}`;
                document.cookie = `user=${data.userId}`;
              }
              resolve(data)//使用返回的data
            }
          }
          //错误时
          else {
            if (typeof setError === 'function') {
              setError(1)
            }
            Alert(response.data.msg, 0, () => {
              if (typeof setFlag === 'function') {
                setFlag(1)
              }
            })
          }
        },
        error => {
          if (typeof setLoad === 'function') {
            setLoad(0);
          };
          if (typeof setError === 'function') {
            setError(1)
          }
          Alert('异常错误,可能是服务器问题', 0, () => {
            if (typeof setFlag === 'function') {
              setFlag(1)
            }
          })
        }
      )
  })
};
//alert
export const Alert = (data: string, type: number = 1, callback?: Function) => { //回调函数
  if (document.querySelector('.alertbox')) {
    return;
  }
  var time1: any, time2: any;
  var
    alert_box = document.createElement('div'),
    alert_text = document.createElement('div'),
    alert_img = document.createElement('img'),
    textNode = document.createTextNode(data ? data : '');
  // btnText = document.createTextNode('');

  type === 1 ? alert_img.src = True : alert_img.src = False

  // 控制样式
  //增加透明度
  css(alert_box, {//控制盒子大小、背景颜色上下边距
    'width': '200px',
    'height': '30px',
    'max-width': '90%',
    'font-size': '16px',
    'text-align': 'center',
    'line-height': '30px',
    'background-color': type ? 'rgb(246, 255, 237)' : 'rgb(243, 217, 213)',
    // 'border-radius': '15px',
    'position': 'absolute',
    'top': '15%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'padding-left': '1.5vw',
    'padding-top': '5px',
    'z-index': '99999999',
    'opacity': 0

  });

  css(alert_text, {
    'padding': '.6579vw .9868vw',
    'z-index': '99999999',
    'line-height': '15px',

    // 'border-bottom': '1px solid #ddd'
  });

  css(alert_img, {
    'position': 'absolute',
    'left': '.6579vw',
    'top': '-1px',

    'width': '30px',
    'z-index': '99999999',
    'cursor': 'pointer'
  });

  // 内部结构套入
  alert_text.appendChild(textNode);
  // alert_img.appendChild(btnText);
  alert_box.appendChild(alert_text);
  alert_box.appendChild(alert_img);
  // alert_bg.appendChild(alert_box);
  alert_box.className = 'alertbox'
  // 总体显示到页面内
  document.getElementsByTagName('body')[0].appendChild(alert_box);
  var opacity: number = 0;
  const addOpacity = () => {
    var target = document.querySelector('.alertbox') as HTMLElement
    if (target && parseInt(target.style.opacity) > 1) {
      clearInterval(time1);
      time2 = setInterval(deleteOpacity, 75)
    }

    opacity += 0.1;
    target.style.opacity = opacity + '';
  }
  //减少透明度
  const deleteOpacity = () => {
    var target = document.querySelector('.alertbox') as HTMLElement

    if (parseInt(target.style.opacity) <= 0) {
      clearInterval(time2);
      if (alert_box.parentNode) {
        alert_box.parentNode.removeChild(alert_box);
      }
      if (typeof callback === 'function') {
        callback(); //回调
      }
    }
    let opacity: string = (parseInt(target.style.opacity) - 0.06) + ''
    target.style.opacity = opacity
  }
  if (!time1) {
    time1 = setInterval(addOpacity, 50);
  }
  // 肯定绑定点击事件删除标签
  // alert_img.onclick = function() {
  //     alert_box.parentNode.removeChild(alert_box);
  //     if (typeof callback === 'function') {
  //         callback(); //回调
  //     }
  // }
}
function css(targetObj: any, cssObj: any) {
  var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
  for (var i in cssObj) {
    str += i + ':' + cssObj[i] + ';';
  }
  targetObj.style.cssText = str;
}
// function maxZindex(){
//   var body = document.getElementsByTagName('body')[0];
//   var all = body.getElementsByTagName('*');
//   var len = all.length;
//   var i =0;
//   var max=0;
//   for(;i<len;i++){
//     if(getComputedStyle(all[i],'position')!='static'){
//       var zindex = getComputedStyle(all[i],'z-index') - 0;
//       if(max<zindex){
//         max=zindex;
//       }
//     }
//   }
//   return max;
// }
//sleep
export const sleep = (delay: number) => {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}

