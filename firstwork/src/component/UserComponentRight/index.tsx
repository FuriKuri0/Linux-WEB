import React from 'react'
import './index.css'
export default function UserComponentRight() {
    const data = [1, 2, 3, 4, 5, 6]
    return (
        <div className='right'>
            <ul className='head'>
                <li>M1</li>
                <li>M2</li>
                <li>M3</li>
                <li>M4</li>
                <li>M5</li>
                <li>M6</li>
            </ul>
            {data.map((v, i) => (
                <ul className='head' key={i}>
                    <li><button className='MyButton MyButtonUser'></button></li>
                    <li><button className='MyButton MyButtonUser'></button></li>
                    <li><button className='MyButton MyButtonUser'></button></li>
                    <li><button className='MyButton MyButtonUser'></button></li>
                    <li><button className='MyButton MyButtonUser'></button></li>
                    <li><button className='MyButton MyButtonUser'></button></li>
                </ul>
            ))}
            <ul className='head'>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ul>
        </div>
    )
}
