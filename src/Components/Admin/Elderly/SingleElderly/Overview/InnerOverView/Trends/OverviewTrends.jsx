import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { SidebarContext } from '../../../../../../../Context/CustomContext';
const OverviewTrends = ({overviewData }) => {
    const { activeTrend, setActiveTrend } = useContext(SidebarContext)
    return (
        <div className=''>
            {overviewData?.map(trend => <div onClick={() => setActiveTrend(trend.title)} className={`cursor-pointer rounded-lg px-5 py-4  flex justify-between ${activeTrend === trend.title ? 'bg-primary/5' : 'bg-transparent'}`}>
                <div className='flex items-center'>
                    <div className='mr-2.5 bg-secondary/5 border rounded-[9px] text-text-secondary text-lg p-2'>
                        {trend?.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                        {trend?.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                        {trend?.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                        {trend?.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                        {trend?.title === 'Time outdoors' && (<Icon icon="gridicons:phone" />)}
                        {trend?.title === 'Device Usage Time' && (<Icon icon="bx:walk" />)}
                        {trend?.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                        {trend?.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                        {trend?.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                        {trend?.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                    </div>
                    <div className='mr-1.5'>
                        <h1 className='text-text-primary font-medium'>{trend?.title}</h1>
                        <p className='text-[13px] text-text-secondary'>{trend?.subTitle}</p>
                    </div>
                </div>
                <div className='flex items-center'>

                    {
                        activeTrend === trend.title ? <Icon className='text-primary text-xl' icon="iconamoon:arrow-right-2-bold" /> : 
                        <div className={`h-[10px] w-[10px] rounded-full
                        ${(trend?.category) === 'Average' && 'bg-[#01BE4F]'} 
                        ${(trend?.category) === 'Warning' && 'bg-[#FF974D]'}
                        ${(trend?.category) === 'Critical' && 'bg-[#FF5959]'}
                        `}>

                        </div>

                    }
                </div>
            </div>)}
        </div>
    );
};

export default OverviewTrends;