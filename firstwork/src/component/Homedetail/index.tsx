import './index.scss'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../App'

type Props = { className: string, type: number }
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function Homedetail({ className, type }: Props) {
    const { setLoad } = useContext<context>(Context)
    const [detailData, setDetailData] = React.useState<any>([{}])
    const [first, setFirst] = useState(true)
    React.useEffect(() => {
        let timer = setInterval(() => {
            if (typeof type === 'number') {
                switch (type) {
                    case 0: getEquipmentData(); break;
                    case 1: getLoadData(); break;
                    case 2: getElectricData(); break;
                }
            }
            if (first) {
                setFirst(false)
            }
            if (window.location.href.split('/')[window.location.href.split('/').length - 1] !== 'home') {
                clearInterval(timer)
            }
        }, 1000)
    }, [type])

    const getEquipmentData = () => {
        if (first) {
            setLoad(true)

        }
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {

            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[7].value / 32, list[8].value / 32, list[9].value / 32, list[10].value / 32] },
            { '视在功率 S(kVA)': [list[42].value / 128, list[43].value / 128, list[44].value / 128, 0.0] },
            ]
            data.map((v: any) => {
                for (let j in v) {
                    v[j].map((value: any) => {
                        value = parseFloat(value.toFixed(1))
                    })
                }
            })

            setDetailData(data)
            setLoad(false)

        }, error => {
            console.log(error);
            setLoad(false)
        }
        )
    }
    const getLoadData = () => {
        if (first) {
            setLoad(true)

        }

        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {

            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[11].value * 5 / 32, list[12].value * 5 / 32, list[13].value * 5 / 32, list[14].value * 5 / 32] },
            { '畸变率 Thdi(%)': [list[21].value * 100 / 4096, list[22].value * 100 / 4096, list[23].value * 100 / 4096, 0.0] },
            { '基波功因 DPF': [list[48].value / 4096, list[49].value / 4096, list[50].value / 4096, 0.0] },
            { '功因 PF': [list[54].value / 4096, list[55].value / 4096, list[56].value / 4096, 0.0] },
            { '有功功率 P(kW)': [list[39].value * 5 / 128, list[40].value * 5 / 128, list[41].value * 5 / 128, 0.0] },
            { '无功功率 Q(kVar)': [list[36].value * 5 / 128, list[37].value * 5 / 128, list[38].value * 5 / 128, 0.0] },
            { '视在功率 S(kVA)': [list[33].value * 5 / 128, list[34].value * 5 / 128, list[35].value * 5 / 128, 0.0] },
            ]
            data.map((v: any) => {
                for (let j in v) {
                    v[j].map((value: any) => {
                        value = parseFloat(value.toFixed(1))
                    })
                }
            })
            setDetailData(data)
            setLoad(false)

        }, error => {
            console.log(error);
            setLoad(false)
        }
        )
    }
    const getElectricData = () => {
        if (first) {
            setLoad(true)
        }
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            url: 'http://192.168.10.1/cgi-bin/main.cgi?type=0&point=1&status=10&value=10',
        }).then(response => {

            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电压 U(V)': [list[0].value / 16, list[1].value / 16, list[2].value / 16, 0.0] },
            { '畸变率 Thdv(%)': [list[15].value * 100 / 4096, list[16].value * 100 / 4096, list[17].value * 100 / 4096, 0.0] },
            { '电流 I(A)': [list[3].value * 5 / 32, list[4].value * 5 / 32, list[5].value * 5 / 32, list[6].value * 5 / 32] },
            { '畸变率 Thdi(%)': [list[18].value * 100 / 4096, list[19].value * 100 / 4096, list[20].value * 100 / 4096, 0.0] },
            { '基波功因 DPF': [list[45].value / 4096, list[46].value / 4096, list[47].value / 4096, 0.0] },
            { '功因 PF': [list[51].value / 4096, list[52].value / 4096, list[53].value / 4096, 0.0] },
            { '有功功率 P(kW)': [list[30].value * 5 / 128, list[31].value * 5 / 128, list[32].value * 5 / 128, 0.0] },
            { '无功功率 Q(kVar)': [list[27].value * 5 / 128, list[28].value * 5 / 128, list[29].value * 5 / 128, 0.0] },
            { '视在功率 S(kVA)': [list[24].value * 5 / 128, list[25].value * 5 / 128, list[26].value * 5 / 128, 0.0] },
            ]
            data.map((v: any) => {
                for (let j in v) {
                    v[j].map((value: any) => {
                        value = parseFloat(value.toFixed(1))
                    })
                }
            })
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
