import React from 'react'
import ElderlyTrends from './ElderlyTrends'
import Status from './Status'
import Activities from './Activities'
import Tags from './Tags'
import Task from './Task'
import Notes from './Notes'

const Overview = () => {

    return (
        <div className='mt-[30px] flex flex-col lg2:flex-row gap-[30px] mb-12'>
            {/* <div className=' flex items-start flex-col lg:flex-row justify-between gap-7'>
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
        </div> */}
            {/* {
                (innerOverView) ? <>

                    <div className='w-full lg2:w-1/3'>
                        <Status />
                    </div>
                    <div className='w-full lg2:w-2/3'>
                        <ElderlyTrends />
                    </div>
                </> : <>
                    <div className='w-full'><InnerOverView /></div>
                </>
            } */}
            <div className='w-full lg2:w-1/3'>
                {/* -----------status part--------------- */}
                <Status />
                <div className=' mt-[30px]'>
                    <Activities/>
                </div>
                <div className=' mt-[30px]'>
                    <Tags/>
                </div>
            </div>
            <div className='w-full lg2:w-2/3'>
                <ElderlyTrends />
                <div className=' flex items-start gap-[30px] mt-[30px]'>
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