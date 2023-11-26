import React, { useState } from 'react';
import AllOverview from './AllOverview/AllOverview';
import {trendsData} from '../../../../../../../assets/singleElderlyData'
const Trends = () => {
    const [activeTab, setActiveTab]=useState('All')
    const tabs = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Average',
        },
        {
            id: 3,
            title: 'Warning',
        },
        {
            id: 4,
            title: 'Critical',
        }
    ]
    return (
        <div className='bg-white p-6 rounded-lg drop-shadow-md'>
            <div className='mb-7'>
                <h1 className='text-2xl text-black font-medium'>Trends</h1>
            </div>
            <div>
                <div className='gap-2'>
                    {tabs?.map(tab=><button onClick={()=>{setActiveTab(tab?.title)}} className={`rounded-lg font-medium  lg:px-3 md:px-3 sm:px-2 py-2 lg:mr-4 md:mr-4 sm:mr-1 my-5 ${tab?.title===activeTab? 'bg-primary text-white' : 'text-gray-500 bg-[#F6F7F9] '}`}>{tab?.title}</button>)}

                </div>
                <div>
                    {activeTab==='All' && <AllOverview trendsData={trendsData} />}
                    {activeTab==='Average' && <AllOverview trendsData={trendsData.filter((average) => average.category === "Average")}></AllOverview>}
                    {activeTab==='Warning' && <AllOverview trendsData={trendsData.filter((average) => average.category === "Warning")}></AllOverview>}
                    {activeTab==='Critical' &&  <AllOverview trendsData={trendsData.filter((average) => average.category === "Critical")}></AllOverview>}
                </div>
            </div>
        </div>
    );
};

export default Trends;