import React from 'react'
import HistogramChart from '../HistogramChart'
import HistogramNav from '../HistogramNav'

import './index.scss'
export default function Histogram() {
    return (
        <div>
            <HistogramNav />
            <div className='HistogramChartBox'>
                <HistogramChart />
                <span style={{ marginLeft: '12%', color: 'green' }}>_______________________________________________</span>
                <HistogramChart />
            </div>
        </div>
    )
}
