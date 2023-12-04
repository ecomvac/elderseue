import React from 'react';

const SleepTimeline = ({ waveData }) => {
    return (
        <div className='mt-[45px]'>
            <p className='text-[#666D90] font-medium text-sm'>Sleep Timeline</p>
            <div>
                <span className='text-xl font-semibold text-text-secondary'>From<span className='text-text-primary'> {waveData.sleepTimeLine.start} </span>To<span className='text-text-primary'> {waveData.sleepTimeLine.end} </span></span>
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