import { QuestionCircleOutlined } from '@ant-design/icons';
import { InputNumber, Popover, Space } from 'antd'
import React, { useRef } from 'react'
import './index.css'

type Props = { type?: string, tips?: boolean }

export default function MyInputNumber(props?: Props) {

    const type: string | undefined = props?.type;
    const tips: boolean | undefined = props?.tips;
    // 这里要给blurRef设置类型 不设置会出问题
    const blurRef: any = useRef();
    let min;
    let max;
    let defaultValue;
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

    switch (type) {
        case 'parallel': {
            min = 1;
            max = 12;
            defaultValue = 2;
            formatter = '路';
            step = 1;
        } break;
        case 'acting': {
            min = -1;
            max = 1;
            defaultValue = 0.95;
            formatter = ' ';
            step = 0.01;
        } break;
        case 'CTRatio': {
            min = 100;
            max = 10000;
            defaultValue = 100;
            formatter = '/5';
            step = 1;
        } break;
        case 'switchDelay': {
            min = 0.01;
            max = 600.00;
            defaultValue = 0.01;
            formatter = 's';
            step = 0.01;
        } break;
        case 'reDelay': {
            min = 0;
            max = 180;
            defaultValue = 0;
            formatter = 's';
            step = 1;
        } break;
        case 'threshold': {
            min = 0.1;
            max = 1.2;
            defaultValue = 0.1;
            formatter = ' ';
            step = 0.1;
        } break;
        case 'exSupply': {
            min = 0;
            max = 100;
            defaultValue = 0;
            formatter = 'kvar';
            step = 1;
        } break;
        case 'exVol': {
            min = 0;
            max = 460;
            defaultValue = 0;
            formatter = 'V';
            step = 1;
        } break;
        case 'oweVol': {
            min = 0;
            max = 460;
            defaultValue = 0;
            formatter = 'V';
            step = 1;
        } break;
        case 'Thdv': {
            min = 0;
            max = 25;
            defaultValue = 0;
            formatter = '%';
            step = 1;
        } break;
        case 'Thdi': {
            min = 0;
            max = 100;
            defaultValue = 0;
            formatter = '%';
            step = 1;
        } break;
    }
    // `${value}${formatter}`
    return (
        <div className="MyInputNumber">
            <Space>
                {tips ? <Popover content={<Space size='large'><span>{`最小: ${min}`}</span><span>{`最大: ${max}`}</span></Space>} trigger='click'><QuestionCircleOutlined /></Popover> : ''}
                <InputNumber
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    formatter={value => `${value}${formatter}`}
                    parser={value => value!.replace(formatter, '')}
                    step={step}
                    onBlur={(Event) => handleBlur(Event)}
                    onPressEnter={handleEnter}
                    ref={blurRef}
                />
            </Space>
            {!tips ? <Popover className='after' content={<Space size='large'><span>{`最小: ${min}`}</span><span>{`最大: ${max}`}</span></Space>} trigger='click'><QuestionCircleOutlined /></Popover> : ''}
        </div>
    )
}

