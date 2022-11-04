import './index.scss'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../App'

type Props = { className: string, type: number }
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string, configPoint: any }

export default function Homedetail({ className, type }: Props) {
    const { setLoad } = useContext<context>(Context)
    const { configPoint } = useContext<context>(Context)
    const [dataList, setDataList] = useState([]);
    const [detailData, setDetailData] = React.useState<any>([{}])
    const [first, setFirst] = useState(true)
    React.useEffect(() => {
        // for (let i = 0; i < 1000; i++) {
        //     clearInterval(i)
        // }
        let timer = setInterval(() => {
            if (typeof type === 'number' && dataList && dataList[0]) {
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
    }, [type, configPoint])

    useEffect(() => {
        setDataList(configPoint?.DataList);
    }, [configPoint]);

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
            setFirst(false)
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[dataList[12][`queryPoint`]].value / 32, list[dataList[14][`queryPoint`]].value / 32, list[dataList[16][`queryPoint`]].value / 32, list[dataList[34][`queryPoint`]].value / 32] },
            { '视在功率 S(kVA)': [list[dataList[13][`queryPoint`]].value / 128, list[dataList[15][`queryPoint`]].value / 128, list[dataList[17][`queryPoint`]].value / 128, 0.0] },
            ]
            data.map((v: any, i) => {
                if (i !== 0) {
                    for (let j in v) {
                        v[j].map((value: any, index: any) => {
                            v[j][index] = parseFloat(value.toFixed(1))

                        })
                    }
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
            setFirst(false)
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电流 I(A)': [list[dataList[18][`queryPoint`]].value * 5 / 32, list[dataList[21][`queryPoint`]].value * 5 / 32, list[dataList[24][`queryPoint`]].value * 5 / 32, list[dataList[35][`queryPoint`]].value * 5 / 32] },
            { '畸变率 Thdi(%)': [list[dataList[30][`queryPoint`]].value * 100 / 4096, list[dataList[31][`queryPoint`]].value * 100 / 4096, list[dataList[32][`queryPoint`]].value * 100 / 4096, 0.0] },
            { '基波功因 DPF': [list[dataList[46][`queryPoint`]].value / 4096, list[dataList[49][`queryPoint`]].value / 4096, list[dataList[52][`queryPoint`]].value / 4096, 0.0] },
            { '功因 PF': [list[dataList[47][`queryPoint`]].value / 4096, list[dataList[50][`queryPoint`]].value / 4096, list[dataList[53][`queryPoint`]].value / 4096, 0.0] },
            { '有功功率 P(kW)': [list[dataList[19][`queryPoint`]].value * 5 / 128, list[dataList[22][`queryPoint`]].value * 5 / 128, list[dataList[25][`queryPoint`]].value * 5 / 128, 0.0] },
            { '无功功率 Q(kVar)': [list[dataList[20][`queryPoint`]].value * 5 / 128, list[dataList[23][`queryPoint`]].value * 5 / 128, list[dataList[26][`queryPoint`]].value * 5 / 128, 0.0] },
            { '视在功率 S(kVA)': [list[dataList[45][`queryPoint`]].value * 5 / 128, list[dataList[48][`queryPoint`]].value * 5 / 128, list[dataList[51][`queryPoint`]].value * 5 / 128, 0.0] },
            ]
            data.map((v: any, i) => {
                if (i !== 0) {
                    for (let j in v) {
                        v[j].map((value: any, index: any) => {
                            v[j][index] = parseFloat(value.toFixed(1))

                        })
                    }
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
            setFirst(false)
            console.log('dataList->', dataList);
            let list = response.data.AiList
            let data = [{ '': ['A', 'B', 'C', 'N'] },
            { '电压 U(V)': [list[dataList[0][`queryPoint`]].value / 16, list[dataList[1][`queryPoint`]].value / 16, list[dataList[2][`queryPoint`]].value / 16, 0.0] },
            { '畸变率 Thdv(%)': [list[dataList[54][`queryPoint`]].value * 100 / 4096, list[dataList[55][`queryPoint`]].value * 100 / 4096, list[dataList[56][`queryPoint`]].value * 100 / 4096, 0.0] },
            { '电流 I(A)': [list[dataList[3][`queryPoint`]].value * 5 / 32, list[dataList[4][`queryPoint`]].value * 5 / 32, list[dataList[5][`queryPoint`]].value * 5 / 32, list[dataList[33][`queryPoint`]].value * 5 / 32] },
            { '畸变率 Thdi(%)': [list[dataList[27][`queryPoint`]].value * 100 / 4096, list[dataList[28][`queryPoint`]].value * 100 / 4096, list[dataList[29][`queryPoint`]].value * 100 / 4096, 0.0] },
            { '基波功因 DPF': [list[dataList[37][`queryPoint`]].value / 4096, list[dataList[40][`queryPoint`]].value / 4096, list[dataList[43][`queryPoint`]].value / 4096, 0.0] },
            { '功因 PF': [list[dataList[38][`queryPoint`]].value / 4096, list[dataList[41][`queryPoint`]].value / 4096, list[dataList[44][`queryPoint`]].value / 4096, 0.0] },
            { '有功功率 P(kW)': [list[dataList[6][`queryPoint`]].value * 5 / 128, list[dataList[8][`queryPoint`]].value * 5 / 128, list[dataList[10][`queryPoint`]].value * 5 / 128, 0.0] },
            { '无功功率 Q(kVar)': [list[dataList[7][`queryPoint`]].value * 5 / 128, list[dataList[9][`queryPoint`]].value * 5 / 128, list[dataList[11][`queryPoint`]].value * 5 / 128, 0.0] },
            { '视在功率 S(kVA)': [list[dataList[36][`queryPoint`]].value * 5 / 128, list[dataList[39][`queryPoint`]].value * 5 / 128, list[dataList[42][`queryPoint`]].value * 5 / 128, 0.0] },
            ]
            data.map((v: any, i) => {
                if (i !== 0) {
                    for (let j in v) {
                        v[j].map((value: any, index: any) => {
                            v[j][index] = parseFloat(value.toFixed(1))

                        })
                    }
                }
            })
            console.log(data, 'data');

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
