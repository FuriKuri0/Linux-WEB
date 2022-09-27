import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import './index.scss'
export default function DemoLine() {
    const data = [
        {
            'Date': 2,
            'scales': -12
        },
        {
            'Date': 4,
            'scales': 3
        },
        {
            'Date': 6,
            'scales': 5
        },
        {
            'Date': 14,
            'scales': -30
        },
    ]
    const config = {
        data,
        smooth: true,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
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
            min: -102,
            max: 102,
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

    return <div style={{ width: '95%', height: '95%', }}><div className='borderTop'></div><Line {...config} /><div className='borderRight'></div></div>;
};
