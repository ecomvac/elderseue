import { Icon } from '@iconify/react';
import React from 'react';

const AllDevices = ({ data }) => {
    console.log("devices", data)
    return (
        <div className=' grid grid-cols-3 gap-5 '>
            {
                data?.map((device, index) => <>
                    <div key={index} className='rounded-[18px] bg-white p-4'>
                        <div className='flex justify-between'>
                            <span className='flex flex-col gap-2.5'>
                                <img src={device?.img} alt="Device" className='w-10' />
                                <p className='font-medium text-lg text-text-primary'>{device?.name}</p>
                            </span>
                            <button className='flex items-start'>
                                <img src={'/images/explore.svg'} className='w-5 h-5' alt="" />
                            </button>
                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <span className='flex items-center gap-1'>
                                <span className='text-green-500 p-[2px] bg-green-200 rounded-full text-[14px]'><Icon icon="octicon:dot-fill-24" /></span>
                                <span className='text-base font-medium text-[#969BB3]'>{device?.title}</span>
                            </span>
                            <span className='text-white bg-primary p-2 text-lg rounded-full'><Icon icon="mingcute:power-fill" /></span>

                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default AllDevices;