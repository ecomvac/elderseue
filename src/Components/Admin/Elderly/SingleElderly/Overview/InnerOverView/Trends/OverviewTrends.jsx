import React from 'react';
import { Icon } from '@iconify/react';
// import { SidebarContext } from '../Context/SidebarContext';
const OverviewTrends = ({ chartInfo, overviewData }) => {
    // const {overViewActive} = useContext(SidebarContext)
    const { handleTrend, data } = chartInfo;
    return (
        <div className=''>
            {overviewData?.map(d => <div onClick={() => handleTrend(d)} className={`cursor-pointer rounded-lg px-5 py-4  flex justify-between ${data.title === d.title ? 'bg-primary/5' : 'bg-transparent'}`}>
                <div className='flex items-center'>
                    <div className='mr-2.5 bg-secondary/5 border rounded-[9px] text-text-secondary text-lg p-2'>
                        {d?.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                        {d?.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                        {d?.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                        {d?.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                        {d?.title === 'Time outdoors' && (<Icon icon="gridicons:phone" />)}
                        {d?.title === 'Device Usage Time' && (<Icon icon="bx:walk" />)}
                        {d?.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                        {d?.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                        {d?.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                        {d?.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                    </div>
                    <div className='mr-1.5'>
                        <h1 className='text-text-primary font-medium'>{d?.title}</h1>
                        <p className='text-[13px] text-text-secondary'>{d?.subTitle}</p>
                    </div>
                </div>
                <div className='flex items-center'>

                    {
                        data.title === d.title ? <Icon className='text-primary text-xl' icon="iconamoon:arrow-right-2-bold" /> : 
                        <div className={`h-[10px] w-[10px] rounded-full
                        ${(d?.category) === 'Average' && 'bg-[#01BE4F]'} 
                        ${(d?.category) === 'Warning' && 'bg-[#FF974D]'}
                        ${(d?.category) === 'Critical' && 'bg-[#FF5959]'}
                        `}>

                        </div>

                    }
                </div>
            </div>)}
        </div>
    );
};

export default OverviewTrends;