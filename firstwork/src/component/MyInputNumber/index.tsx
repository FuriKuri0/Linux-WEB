import { QuestionCircleOutlined } from '@ant-design/icons';
import { InputNumber, Popover, Space } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

type Props = { type?: string, tips?: boolean, defaultValue?: string, changeData?: any, setChangeData?: any }

export default function MyInputNumber(props?: Props) {
    const type: string | undefined = props?.type;
    const tips: boolean | undefined = props?.tips;
    // 这里要给blurRef设置类型 不设置会出问题
    const blurRef: any = useRef();
    let min;
    let max;
    const [defaultValue, setDefaultValue] = useState<string>();
    let formatter: string;
    let step;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        // 根据type的不同发送请求
        // console.log(e.target.value);
    };
    // 回车事件
    const handleEnter = () => {
        blurRef?.current?.blur();
    }
    const handleChange = (v: any) => {
        switch (type) {
            case 'parallel': {
                let data = props?.changeData
                data[0].value = v
                props?.setChangeData(data)
            } break;
            case 'acting': {
                let data = props?.changeData
                data[1].value = v
                props?.setChangeData(data)
            } break;
            case 'CTRatio': {
                let data = props?.changeData
                data[3].value = v
                props?.setChangeData(data)
            } break;
        }

    }
    switch (type) {
        case 'parallel': {
            min = 1;
            max = 12;
            // defaultValue = 2;
            formatter = '路';
            step = 1;
        } break;
        case 'acting': {
            min = -1;
            max = 1;
            formatter = ' ';
            step = 0.01;
        } break;
        case 'CTRatio': {
            min = 100;
            max = 10000;
            // defaultValue = 100;
            formatter = '/5';
            step = 1;
        } break;
        case 'switchDelay': {
            min = 0.01;
            max = 600.00;
            // defaultValue = 0.01;
            formatter = 's';
            step = 0.01;
        } break;
        case 'reDelay': {
            min = 0;
            max = 180;
            // defaultValue = 0;
            formatter = 's';
            step = 1;
        } break;
        case 'threshold': {
            min = 0.1;
            max = 1.2;
            // defaultValue = 0.1;
            formatter = ' ';
            step = 0.1;
        } break;
        case 'exSupply': {
            min = 0;
            max = 100;
            // defaultValue = 0;
            formatter = 'kvar';
            step = 1;
        } break;
        case 'exVol': {
            min = 0;
            max = 460;
            // defaultValue = 0;
            formatter = 'V';
            step = 1;
        } break;
        case 'oweVol': {
            min = 0;
            max = 460;
            // defaultValue = 0;
            formatter = 'V';
            step = 1;
        } break;
        case 'Thdv': {
            min = 0;
            max = 25;
            // defaultValue = 0;
            formatter = '%';
            step = 1;
        } break;
        case 'Thdi': {
            min = 0;
            max = 100;
            // defaultValue = 0;
            formatter = '%';
            step = 1;
        } break;
        case 'manActing': {
            min = 0;
            max = 65535;
            // defaultValue = 0;
            formatter = 'K';
            step = 1;
        }
    }
    // formatter={value => `${value}${formatter}`}

    return (
        <div className="MyInputNumber">
            <Space>
                {tips ? <Popover content={<Space size='large'><span>{`最小: ${min}`}</span><span>{`最大: ${max}`}</span></Space>} trigger='click'><QuestionCircleOutlined /></Popover> : ''}
                <InputNumber
                    defaultValue={props?.defaultValue}
                    min={min}
                    max={max}
                    formatter={value => `${value}${formatter}`}
                    parser={value => value!.replace(formatter, '')}
                    step={step}
                    onBlur={(Event) => handleBlur(Event)}
                    onPressEnter={handleEnter}
                    ref={blurRef}
                    onChange={(v) => handleChange(v)}
                />
            </Space>
            {!tips ? <Popover className='after' content={<Space size='large'><span>{`最小: ${min}`}</span><span>{`最大: ${max}`}</span></Space>} trigger='click'><QuestionCircleOutlined /></Popover> : ''}
        </div>
    )
}

