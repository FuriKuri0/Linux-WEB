import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import './index.scss'
import axios from 'axios';
type Object = { 'time': string, 'value': number, 'category': string }
type Props = { type: number }
export default function DemoLine({ type }: Props) {
    const [data, setData] = useState<Array<Object>>([])
    const getData = (time: number, dataArr: any) => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {
            let list = response.data.AiList
            dataArr?.push(
                {
                    'time': time + '',
                    'value': type === 0 ? list[0].value : type === 1 ? list[3].value : list[18].value,
                    'category': 'a'
                },
                {
                    'time': time + '',
                    'value': type === 0 ? list[1].value : type === 1 ? list[4].value : list[21].value,
                    'category': 'b'
                },
                {
                    'time': time + '',
                    'value': type === 0 ? list[2].value : type === 1 ? list[5].value : list[24].value,
                    'category': 'c'
                }
            )
            setData(dataArr)
        }, error => {
            console.log(error);
        }
        )
    }
    useEffect(() => {
        // for (let i = 0; i < 100; i++) {
        //     clearInterval(i)
        // }
        let time = 1;
        let dataArr: any = []
        let timer = setInterval(() => {
            getData(time++, dataArr)
            if (window.location.href.split('/')[window.location.href.split('/').length - 1] !== 'chart') {
                clearInterval(timer)
            }

        }, 1000)
    }, [])
    const config = {
        data,
        smooth: true,
        padding: 'auto',
        xField: 'time',
        yField: 'value',
        seriesField: 'category',
        xAxis: {
            // min: 0,
            // max: 102,
            line: {
                style: {
                    stroke: 'black'
                }
            },
            tickLine: {
                length: -10,
                style: {
                    stroke: 'black'
                }
            },
            grid: {
                line: {
                    style: {
                        stroke: 'black',
                        lineWidth: 0.5,
                        // strokeOpacity: 0.7,
                        // shadowColor: 'black',
                    }
                },

            }
        },
        yAxis: {
            line: {
                style: {
                    stroke: 'black',
                    lineWidth: 1.5
                }
            },
            tickLine: {
                length: -10
            }
        }
    };

    return <div style={{ width: '95%', height: '95%', }}><Line {...config} /></div>;
};
