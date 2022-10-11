import './index.scss'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../App'

type Props = { className: string, type: number }
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function Homedetail({ className, type }: Props) {
    const { setLoad } = useContext<context>(Context)
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
        setLoad(true)
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[12].value, list[14].value, list[16].value, list[34].value] },
            { '视在功率 S(kVA)': [list[13].value, list[15].value, list[17].value, '0.0'] },
            ]
            setDetailData(data)
            setLoad(false)

        }, error => {
            console.log(error);
            setLoad(false)
        }
        )
    }
    const getLoadData = () => {
        setLoad(true)

        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=1&point=1&status=10&value=10',
        }).then(response => {
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[18].value, list[21].value, list[24].value, list[35].value] },
            { '畸变率 Thdi(%)': [list[30].value, list[31].value, list[32].value, '0.0'] },
            { '基波功因 DPF': [list[46].value, list[49].value, list[52].value, '0.0'] },
            { '功因 PF': [list[47].value, list[50].value, list[53].value, '0.0'] },
            { '有功功率 P(kW)': [list[19].value, list[22].value, list[25].value, '0.0'] },
            { '无功功率 Q(kVar)': [list[20].value, list[23].value, list[26].value, '0.0'] },
            { '视在功率 S(kVA)': [list[45].value, list[48].value, list[51].value, '0.0'] },
            ]
            setDetailData(data)
            setLoad(false)

        }, error => {
            console.log(error);
            setLoad(false)
        }
        )
    }
    const getElectricData = () => {
        setLoad(true)
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电压 U(V)': [list[0].value, list[1].value, list[2].value, '0.0'] },
            { '畸变率 Thdv(%)': [list[54].value, list[55].value, list[56].value, '0.0%'] },
            { '电流 I(A)': [list[3].value, list[4].value, list[5].value, list[33].value] },
            { '畸变率 Thdi(%)': [list[27].value, list[28].value, list[29].value, '0.0'] },
            { '基波功因 DPF': [list[37].value, list[40].value, list[43].value, '0.0'] },
            { '功因 PF': [list[38].value, list[41].value, list[44].value, '0.0'] },
            { '有功功率 P(kW)': [list[6].value, list[8].value, list[10].value, '0.0'] },
            { '无功功率 Q(kVar)': [list[7].value, list[9].value, list[11].value, '0.0'] },
            { '视在功率 S(kVA)': [list[36].value, list[39].value, list[42].value, '0.0'] },
            ]
            setDetailData(data)
            setLoad(false)

        }, error => {
            console.log(error);
            setLoad(false)
        }

        )

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
