import React from 'react'
import './index.scss'
import UserComponentLeft from '../UserComponentLeft'
import UserComponentRight from '../UserComponentRight'
type Props = { dataLeft: Array<string>, dataRight: Array<Array<config> | string> }
type config = { background: string, text: string }

export default function UserComponent({ dataLeft, dataRight }: Props) {

    return (
        <div className='UserComponent'>
            <UserComponentLeft data={dataLeft} />
            <UserComponentRight data={dataRight} />
        </div>
    )
}
