import React from 'react';
import { Icon } from '@iconify/react';
// import { SidebarContext } from '../Context/SidebarContext';
const OverviewTrends = ({chartInfo, overviewData}) => {
    // const {overViewActive} = useContext(SidebarContext)
    const { handleTrend, data}=chartInfo;
    return (
        <div className='xl:w-1/3 w-full border-r lg2:mr-28'>
                {overviewData?.map(d => <div onClick={() => handleTrend(d)} className={`cursor-pointer rounded-lg px-5 mr-6 py-4 flex justify-between`}>
                    <div className='flex items-center'>
                        <div className='mr-2.5 bg-[#e7e8ea] rounded-lg text-secondary text-lg p-2'>
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
                            <h1 className='text-black font-bold'>{d?.title}</h1>
                            <p className='text-sm text-secondary'>{d?.subTitle}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>

                       {<div className={`h-[10px] w-[10px] rounded-full
                            ${(d?.category) === 'Average' && 'bg-[#01BE4F]'} 
                            ${(d?.category) === 'Warning' && 'bg-[#FF974D]'}
                            ${(d?.category) === 'Critical' && 'bg-[#FF5959]'}
                            `}></div>}
                    </div>
                </div>)}
            </div>
    );
};

export default OverviewTrends;