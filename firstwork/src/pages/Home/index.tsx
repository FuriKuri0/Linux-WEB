import React from 'react'
import './index.css'
import HomeComponent from '../../component/HomeComponent'
export default function Home() {
    return (
        <div className='Home'>
            <div className='border'></div>
            <HomeComponent main={false} />
            {/* <HomeComponent />
            <HomeComponent /> */}
        </div>
    )
}
