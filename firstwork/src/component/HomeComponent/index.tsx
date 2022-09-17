import React, { useContext } from 'react'
import './index.css'
import { Context } from '../../App'
type Props = { where: number, which: string, data: Array<object> }
type context = { setMask: Function, setLoad: Function, maskClick: boolean, setMaskClick: Function, menu: string }

export default function HomeComponent({ where, which, data }: Props) {
    const [show, setShow] = React.useState(false)
    const { maskClick, setMask, setMaskClick } = useContext<context>(Context)

    const showDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShow(true)
        setMask(true)
        switch (e.currentTarget.id) {
            case '设备': console.log('设备'); break;
            case '负载': console.log('负载'); break;
            case '电网': console.log('电网'); break;
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
            <div className={show ? 'Homedetail' : 'Homedetail Homedetailhide'}></div>
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
