import React from 'react'
import ElderlyTrends from './ElderlyTrends'
import Status from './Status'
import Activities from './Activities'
import Tags from './Tags'
import Task from './task/Task'
import Notes from './notes/Notes'

const Overview = () => {

    return (
        <div className='mt-[30px] flex flex-col lg:flex-row gap-[30px] mb-12'>
            <div className='w-full lg:w-1/3'>
                {/* -----------status part--------------- */}
                <Status />
                <div className=' mt-[30px]'>
                    <Activities/>
                </div>
                <div className=' mt-[30px]'>
                    <Tags/>
                </div>
            </div>
            <div className='w-full lg:w-2/3'>
                <ElderlyTrends />
                <div className=' flex items-start lg:flex-row flex-col gap-[30px] mt-[30px]'>
                    <div className=' w-full'>
                        <Task/>
                    </div>
                    <div className=' w-full'>
                        <Notes/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview