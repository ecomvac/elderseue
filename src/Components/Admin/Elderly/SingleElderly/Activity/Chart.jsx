import { Icon } from '@iconify/react';
import React from 'react';

const Chart = () => {
    return (
        <div className='bg-primary rounded-[20px]  px-[22px] py-6'>
            <div>
                <h1 className='text-2xl font-bold text-white/95'>Elderly Conditions</h1>
            </div>
            <div className='flex items-center justify-between gap-4 flex-wrap my-[30px]'>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="ri:heart-pulse-fill" />
                    <div>
                        <p className='text-[13px] text-white/80'>Heart Rate</p>
                        <span  className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>72</span><span className='text-xs font-medium text-white/90'>bpm</span></span>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="fontisto:blood-drop" />
                    <div>
                        <p className='text-[13px] text-white/80'>Blood pressure</p>
                        <span  className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>120/80</span><span className='text-xs font-medium text-white/90'>mmgh</span></span>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <Icon className='w-10 h-10 text-white/50' icon="fluent:temperature-20-filled" />
                    <div>
                        <p className='text-[13px] text-white/80'>Body Tem.</p>
                        <span  className='flex items-start'><span className='text-[28px] font-bold mr-1 -mt-1.5 text-white/95'>98.6</span><span className='text-xs font-medium text-white/90'><sup>o</sup>F</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;