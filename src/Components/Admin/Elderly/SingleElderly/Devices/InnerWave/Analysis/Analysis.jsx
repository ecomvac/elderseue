import React, { useState } from 'react';
import HeartRateSummary from './HeartRateSummary';
import BreathRateSummary from './BreathRateSummary';

const Analysis = ({waveData}) => {
    const [active,setActive] = useState(1)
    const tabData = [
        {
            id:1,
            title:"Weekly"
        },
        {
            id:2,
            title:"Monthly"
        }
    ]
    return (
        <div className=''>
            <div className='flex items-center justify-between py-4 px-6 border-b'>
                <h2 className='text-text-primary text-2xl font-semibold'>Analysis</h2>
                <div className=' w-[160px] bg-primary/20 rounded-[9px] p-1'>
                {tabData.map((tab)=>(
                    <button onClick={()=>setActive(tab.id)} key={tab.id} className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${tab.id===active ? " bg-text-primary text-white" :"text-[#8F6ABC]"}`}>{tab.title}</button>
                ))}
            </div>
            </div>
            <div className='flex border-b'>
                <div className='p-5 w-full border-r'><HeartRateSummary data={waveData.heartRateDetails}/></div>
                <div className='p-5 w-full'><BreathRateSummary data={waveData.breathRateDetails}/></div>
            </div>
        </div>
    );
};

export default Analysis;