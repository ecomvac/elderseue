import React from 'react'
import OverviewProfile from './OverviewProfile'

const Overview = () => {
  return (
    <div>
        <div className=' flex items-start flex-col lg:flex-row justify-between gap-7'>
            <div className=' lg:w-[35%] w-full'>
                <div className='bg-white rounded-[20px] py-6 px-[22px]'>
                    <OverviewProfile/>
                </div>
            </div>
            <div className=' lg:w-[65%] w-full bg-white h-[500px]'>

            </div>
        </div>
    </div>
  )
}

export default Overview