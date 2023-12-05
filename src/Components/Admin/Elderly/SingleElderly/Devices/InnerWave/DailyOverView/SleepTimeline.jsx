import { Icon } from '@iconify/react';
import React from 'react';

const SleepTimeline = ({ waveData }) => {
    const sleepTimeline = [
        {
            type: 'deep',
            percent: '5%'
        },
        {
            type: 'core',
            percent: '2%'
        },
        {
            type: 'deep',
            percent: '21%'
        },
        {
            type: 'awake',
            percent: '10%'
        },
        {
            type: 'deep',
            percent: '21%'
        },
        {
            type: 'rem',
            percent: '5%'
        },
        {
            type: 'awake',
            percent: '2%'
        },
        {
            type: 'deep',
            percent: '10%'
        },
        {
            type: 'out',
            percent: '1%'
        },
        {
            type: 'awake',
            percent: '3%'
        },
        {
            type: 'deep',
            percent: '20%'
        },
    ]
    return (
        <div className='mt-[45px]'>
            <p className='text-[#666D90] font-medium text-sm'>Sleep Timeline</p>
            <div>
                <span className='text-xl font-semibold text-text-secondary'>From<span className='text-text-primary'> {waveData.sleepTimeLine.start} </span>To<span className='text-text-primary'> {waveData.sleepTimeLine.end} </span></span>
            </div>
            {/* -----------bar---------------- */}
            <div className='mt-4'>
                <div className='w-full h-[30px] flex items-center gap-1'>
                    {
                        sleepTimeline.map((data, index) => <div style={{ width: data.percent }} className={`rounded-[2px] h-[29px]
                        
                        ${data.type === 'deep' && 'bg-[#3964FF]'}
                        ${data.type === 'core' && 'bg-[#80E005]'}
                        ${data.type === 'awake' && 'bg-[#FF8D24]'}
                        ${data.type === 'rem' && 'bg-[#FF62C0]'}
                        ${data.type === 'out' && 'bg-[#FF0000]'}

                        `}></div>)
                    }
                </div>
            </div>
            <div className='h-[14px]  border border-b-0 mt-1'></div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <Icon className='text-[#969BB3] -mt-1' icon="icon-park-outline:sleep" />
                    <p className='font-medium text-[13px] text-text-primary'>{waveData.sleepTimeLine.start} </p>
                </div>
                <div className='flex items-center gap-1'>
                    <Icon className='text-[#969BB3] -mt-1' icon="ic:outline-alarm" />
                    <p className='font-medium text-[13px] text-text-primary'>{waveData.sleepTimeLine.end} </p>
                </div>

            </div>

            <div className='flex flex-wrap gap-2 mt-6 justify-between'>
                <div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2.5 h-2.5 rounded-full bg-[#3964FF]'></div>
                        <p className='text-[#B8BBCC] text-sm font-medium'>Deep</p>
                    </div>
                    <h2 className='text-[#49517A] text-xl font-semibold'>{waveData.sleepTimeLine.totalDeep}</h2>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2.5 h-2.5 rounded-full bg-[#80E005]'></div>
                        <p className='text-[#B8BBCC] text-sm font-medium'>Core</p>
                    </div>
                    <h2 className='text-[#49517A] text-xl font-semibold'>{waveData.sleepTimeLine.totalCore}</h2>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2.5 h-2.5 rounded-full bg-[#FF62C0]'></div>
                        <p className='text-[#B8BBCC] text-sm font-medium'>REM</p>
                    </div>
                    <h2 className='text-[#49517A] text-xl font-semibold'>{waveData.sleepTimeLine.totalRem}</h2>
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2.5 h-2.5 rounded-full bg-[#FF8D24]'></div>
                        <p className='text-[#B8BBCC] text-sm font-medium'>Awake</p>
                    </div>
                    <h2 className='text-[#49517A] text-xl font-semibold'>{waveData.sleepTimeLine.totalAwake}</h2>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2.5 h-2.5 rounded-full bg-[#FF0000]'></div>
                        <p className='text-[#B8BBCC] text-sm font-medium'>Out of Bed</p>
                    </div>
                    <h2 className='text-[#49517A] text-xl font-semibold'>{waveData.sleepTimeLine.totalOutOfBed}</h2>
                </div>
            </div>
        </div>
    );
};

export default SleepTimeline;