import React from 'react'
import './index.css'
type Props = { main: boolean }
export default function HomeComponent({ main }: Props) {

    return (
        <div className={main ? 'HomeComponent' : 'HomeComponent fuzhuRight'}></div>
    )
}
