import React from 'react'
import ElderliesOverviewPieCharts from './ElderliesOverviewPieCharts'

const ElderliesOverview = () => {
  return (
    <div >
        <h2 className=' font-bold text-[24px] text-white'>Elderlies Overview</h2>

          <div className=' w-full grid grid-cols-1'>
          <div className=' flex items-center justify-center'>
            <ElderliesOverviewPieCharts/>
            </div>
          </div>
    </div>
  )
}

export default ElderliesOverview