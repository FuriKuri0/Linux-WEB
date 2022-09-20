import React, { useContext } from 'react'
import Homedetail from '../Homedetail'
import './index.scss'
import { Context } from '../../App'

type Props = { where: number, which: string, data: Array<object> }
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function HomeComponent({ where, which, data }: Props) {
    const [show, setShow] = React.useState(false)
    const { maskClick, setMask, setMaskClick } = useContext<context>(Context)
    const [detailType, setDetailType] = React.useState(0)
    const showDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShow(true)
        setMask(true)
        switch (e.currentTarget.id) {
            case '设备': setDetailType(0); break;
            case '负载': setDetailType(1); break;
            case '电网': setDetailType(2); break;
        }
    }

    React.useEffect(() => {
        if (maskClick) {
            setShow(false)
            setMask(false)
            setMaskClick(false)
        }
    }, [maskClick])
    return (
        <>
            <Homedetail type={detailType} className={show ? 'Homedetail' : 'Homedetail Homedetailhide'} />
            <div onClick={(e) => where === 0 ? showDetail(e) : ''} id={which} className={where === 0 ? 'HomeComponent' : where === 1 ? 'HomeComponent fuzhu fuzhuRight' : 'HomeComponent fuzhu fuzhuLeft'}>
                <div className='title'>{which}</div>
                <ul>{data.map((e, i) => (
                    <li key={i}><div>{Object.keys(e)[0]}</div><div>{Object.values(e)[0]}</div></li>
                ))}
                </ul>
            </div>
        </>
    )
}
