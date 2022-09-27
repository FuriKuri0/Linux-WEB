import React from 'react'
import WaveChart from '../../component/WaveChart'
import Histogram from '../../component/Histogram'

import './index.scss'
export default function Chart() {
    const [which, setWhich] = React.useState(1)
    return (
        <div className='Chart'>
            <div style={{ height: '5vh', width: '100%', background: 'white', marginBottom: '10px' }}><i onClick={() => setWhich(0)}>柱状图</i>&nbsp;&nbsp;&nbsp; / <i onClick={() => setWhich(1)}>波形图</i></div>

            {which === 1 ? <WaveChart /> : <Histogram />}
        </div>
    )
}
