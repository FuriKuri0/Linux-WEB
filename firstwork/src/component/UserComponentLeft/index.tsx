import React from 'react'
import './index.css'
type Props = { data: Array<string> }
export default function UserComponentLeft({ data }: Props) {
    return (
        <div className='left'>
            {data ? data.map((v, i) => {
                return (<div key={i}>
                    <div className='lefthead'>{v}</div>
                    {i !== data.length - 1 ? <div className='space'>|</div> : ''}
                </div>)
            }) : ''}
        </div>
    )
}
