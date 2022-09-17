import React from 'react'
import './index.css'
type Props = { className: string, type: number }
export default function Homedetail({ className, type }: Props) {
    const [detailData, setDetailData] = React.useState<any>([{}])
    React.useEffect(() => {
        if (typeof type === 'number') {
            switch (type) {
                case 0: getEquipmentData(); break;
                case 1: getLoadData(); break;
                case 2: getElectricData(); break;
            }
        }
    }, [type])

    const getEquipmentData = () => {
        console.log(type);

        let data = [{ '': ['A', 'B', 'C', 'N'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '畸变率 Thdv': ['0.0%', '0.0%', '0.0%', '0.0%'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        ]
        setDetailData(data)
    }
    const getLoadData = () => {
        console.log(type);

        let data = [{ '': ['A', 'B', 'C', 'N'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { 畸变率: ['0.0%', '0.0%', '0.0%', '0.0%'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        ]
        setDetailData(data)
    }
    const getElectricData = () => {
        console.log(type);

        let data = [{ '': ['A', 'B', 'C', 'N'] },
        { '电压 U': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '畸变率 Thdv': ['0.0%', '0.0%', '0.0%', '0.0%'] },
        { '电流 I': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '畸变率 Thdi': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '基波功因 DPF': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '功因 PF': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '有功功率 P': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '无功功率 Q': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        { '视在功率 S': ['0.0V', '0.0V', '0.0V', '0.0V'] },
        ]
        setDetailData(data)
    }
    return (
        <div className={className}>
            <div className='title'>{type === 0 ? '设备' : type === 1 ? '负载' : '电网'}</div>
            {detailData && detailData.length !== 1 ? detailData.map((v: object, i: number) => (
                <ul key={i}>
                    <li>{Object.keys(v)[0]}</li>
                    <li>{Object.values(v)[0][0]}</li>
                    <li>{Object.values(v)[0][1]}</li>
                    <li>{Object.values(v)[0][2]}</li>
                    <li>{Object.values(v)[0][3]}</li>
                </ul>
            )) : ''}


        </div>
    )
}
