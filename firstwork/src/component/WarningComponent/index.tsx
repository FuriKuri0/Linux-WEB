import React, { useEffect, useState, useContext } from 'react'
import WarningTop from '../WarningTop'
import WarningBottom from '../WarningBottom'
import axios from 'axios'
import './index.scss'
import { Context } from '../../App'
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function WarningComponent() {
    const { setLoad } = useContext<context>(Context)
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
            let list = response.data.DiList
            let arrT = []
            arrT[0] = list[2].value
            arrT[1] = list[1].value
            arrT[2] = 0
            arrT[3] = list[125].value
            arrT[4] = list[122].value
            setArrT(arrT)
            let arrB = []
            arrB[0] = list[5].value
            arrB[1] = list[3].value
            arrB[2] = list[4].value
            arrB[3] = list[8].value
            arrB[4] = list[119].value
            arrB[5] = list[141].value
            arrB[6] = list[123].value
            arrB[7] = list[9].value
            arrB[8] = list[150].value
            arrB[9] = list[7].value
            arrB[10] = list[5].value
            setArrB(arrB)
        }, error => console.log(error)
        )
    }
    useEffect(() => {
        let timer = setInterval(() => {
            getData()
            if (first) {
                setFirst(false)
            }
            if (window.location.href.split('/')[window.location.href.split('/').length - 1] !== 'warning') {
                clearInterval(timer)
            }
        }, 1000)

    }, [])
    return (
        <div className='WarningComponent'>
            <div className='title'>模块一</div>

            <WarningTop arr={arrT} />
            <WarningBottom arr={arrB} />
        </div>
    )
}
