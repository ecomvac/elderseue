import React, { useContext } from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import { SidebarContext } from '../../../../../Context/CustomContext';

const Status = () => {
    const { elderlyPossition } = useContext(SidebarContext)
    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] py-6'>
                    <div style={{ backgroundImage: 'url("/images/satusImg.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className={`mb-5 p-5 rounded-[17px] 
                    ${elderlyPossition === 'good' && 'bg-primary'}
                    ${elderlyPossition === 'critical' && 'bg-[#F43E3E]'}
                    ${elderlyPossition === 'problem' && 'bg-[#627BFF]'}
                    ${elderlyPossition === 'warning' && 'bg-[#FF8C3A]'}
                    
                    `}>
                        <div className='flex items-center gap-[14px]'>
                            <span className='p-4 rounded-full bg-white'>
                                {elderlyPossition === 'good' && <Icon className='text-[22px] text-primary ' icon="iconamoon:check-bold" />}
                                {elderlyPossition === 'critical' && <Icon className='text-[22px] text-[#F43E3E] ' icon="lucide:siren" />}
                                {elderlyPossition === 'problem' && <Icon className='text-[22px] text-[#627BFF] ' icon="lucide:bug" />}
                                {elderlyPossition === 'warning' && <Icon className='text-[22px] text-[#FF8C3A] ' icon="quill:warning" />}
                            </span>
                            <span className='flex flex-col'>
                                <span className='font-bold text-2xl text-white'>
                                    {elderlyPossition === 'good' && <span>All Good</span>}
                                    {elderlyPossition === 'critical' && <span>Critical</span>}
                                    {elderlyPossition === 'problem' && <span>Problem</span>}
                                    {elderlyPossition === 'warning' && <span>Warning</span>}
                                </span>
                                {elderlyPossition === 'good' && <span className='text-sm text-white opacity-80'>Everything Fine With Elderly</span>}
                                {elderlyPossition === 'critical' && <span className='text-sm text-white opacity-80'>Something Went Wrong With Elderly</span>}
                                {elderlyPossition === 'problem' && <span className='text-sm text-white opacity-80'>Some Problem Detected, Fix ASAP</span>}
                                {elderlyPossition === 'warning' && <span className='text-sm text-white opacity-80'>Please Check, Is Everything Fine With Elderly</span>}

                            </span>
                        </div>
                        <div className='mt-[72px] px-0 xl:px-12 grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2'>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="lucide:siren" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Critical</span>
                                    <span className='text-[22px] font-bold -mt-1'>02</span>
                                </span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="quill:warning" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Warning</span>
                                    <span className='text-[22px] font-bold -mt-1'>03</span>
                                </span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <span className='text-white opacity-80  text-[35px] h-[35px] '><Icon className='h-full' icon="lucide:bug" /></span>
                                <span className='flex flex-col text-white'>
                                    <span className='text-[13px] opacity-80'>Problem</span>
                                    <span className='text-[22px] font-bold -mt-1'>04</span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4 flex-wrap'>
                        <div>
                            <span className='text-xl font-bold text-dark-black'>Kari Daughetry</span>
                            <span className='flex items-center gap-1'>
                                <span className='text-[15px] text-text-secondary'><Icon icon="system-uicons:location" /></span>
                                <span className='text-[13px] text-text-secondary'>Newport Beach, CA 92660, USA</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center bg-primary text-white rounded-[10px] py-[7px] px-3'>
                                <span className='text-[19px]'><Icon icon="lucide:phone-call" /></span>
                                <select className='bg-primary text-white rounded-[10px] text-[13px] font-medium' style={{ border: 'none', outline: 'none' }}>
                                    <option >Call To</option>
                                    <option>Admin</option>
                                    <option>Super</option>
                                </select>
                            </div>
                            <div className='p-[7px] bg-primary/10 text-primary rounded-[10px] text-[19px]'><Icon icon="material-symbols:history" /></div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Status;