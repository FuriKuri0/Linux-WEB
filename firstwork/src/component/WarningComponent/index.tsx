import React, { useEffect, useState, useContext } from 'react'
import WarningTop from '../WarningTop'
import WarningBottom from '../WarningBottom'
import axios from 'axios'
import './index.scss'
import { Context } from '../../App'
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string, configPoint: any }

export default function WarningComponent() {
    const { setLoad } = useContext<context>(Context)
    const { configPoint } = useContext<context>(Context)
    const [dataList, setDataList] = useState([]);
    const [arrT, setArrT] = useState<Array<number>>()
    const [arrB, setArrB] = useState<Array<number>>()
    const [first, setFirst] = useState(true)

    const getData = () => {
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
            setLoad(false)
            setFirst(false)
            let list = response.data.DiList
            let arrT = []
            arrT[0] = list[dataList[562][`queryPoint`]].value
            arrT[1] = list[dataList[561][`queryPoint`]].value
            arrT[2] = 0
            arrT[3] = list[dataList[684][`queryPoint`]].value
            arrT[4] = list[dataList[682][`queryPoint`]].value
            setArrT(arrT)
            let arrB = []
            arrB[0] = list[dataList[565][`queryPoint`]].value
            arrB[1] = list[dataList[563][`queryPoint`]].value
            arrB[2] = list[dataList[564][`queryPoint`]].value
            arrB[3] = list[dataList[568][`queryPoint`]].value
            arrB[4] = list[dataList[679][`queryPoint`]].value
            arrB[5] = list[dataList[701][`queryPoint`]].value
            arrB[6] = list[dataList[683][`queryPoint`]].value
            arrB[7] = list[dataList[569][`queryPoint`]].value
            arrB[8] = list[dataList[710][`queryPoint`]].value
            arrB[9] = list[dataList[567][`queryPoint`]].value
            arrB[10] = list[dataList[565][`queryPoint`]].value
            setArrB(arrB)
        }, error => console.log(error)
        )
    }

    useEffect(() => {
        setDataList(configPoint?.DataList);
    }, [configPoint])

    useEffect(() => {
        let timer = setInterval(() => {
            if (dataList && dataList[0]) {
                getData()
            }
            if (first) {
                setFirst(false)
            }
            if (window.location.href.split('/')[window.location.href.split('/').length - 1] !== 'warning') {
                clearInterval(timer)
            }
        }, 1000)
    }, [dataList])

    return (
        <div className='WarningComponent'>
            <div className='title'>模块一</div>
            <WarningTop arr={arrT} />
            <WarningBottom arr={arrB} />
        </div>
    )
}
