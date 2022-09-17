import React from 'react'
import './index.css'
type Props = { where: number, which: string, data: Array<object> }
export default function HomeComponent({ where, which, data }: Props) {

    return (
        <div className={where === 0 ? 'HomeComponent' : where === 1 ? 'HomeComponent fuzhu fuzhuRight' : 'HomeComponent fuzhu fuzhuLeft'}>
            <div className='title'>{which}</div>
            <ul>{data.map((e) => (
                <li><div>{Object.keys(e)[0]}</div><div>{Object.values(e)[0]}</div></li>
            ))}
            </ul>
        </div>
    )
}
