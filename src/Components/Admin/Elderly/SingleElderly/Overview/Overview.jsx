import React from 'react'
import OverviewProfile from './OverviewProfile'
import Activities from './Activities'
import OverViewTop from './OverViewTop'
import ElderlyTrends from './ElderlyTrends'

const Overview = () => {
  return (
    <div>
        <div className=' flex items-start flex-col lg:flex-row justify-between gap-7'>
            <div className=' lg:w-[35%] w-full'>
                <div className='bg-white rounded-[20px] py-6 px-[22px]'>
                    <OverviewProfile/>
                </div>
                <div className='bg-white rounded-[20px] py-6 px-[22px]  mt-[30px]'>
                    <Activities/>
                </div>
            </div>
            <div className=' lg:w-[65%] w-full'>
                <div className='bg-white py-6 px-[22px] rounded-[20px]'>
                    <OverViewTop/>
                </div>
                <div className='bg-white py-6 px-[22px] rounded-[20px] mt-[30px]'>
                    <ElderlyTrends/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview