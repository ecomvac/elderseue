import React from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import CustomButton from '../../../../../Shared/button/CustomButton';

const Profile = () => {
    return (
        <>
            <SectionWrapper>
                {/* ----------cover image------------- */}
                <div className=''>
                    <img src={'/images/profileCover.svg'} alt="Profile Cover" className='w-full rounded-t-[20px]' />
                    <div className='px-[30px] flex items-center justify-between'>
                        <div className='flex'>
                            <img src={'/images/profile.svg'} alt="Profile" className='mt-2 md:-mt-10 h-[60px] w-[60px] md:h-[120px] md:w-[120px] rounded-full mr-4' />
                            <span className='flex flex-col my-2'>
                                <span className='text-lg md:text-2xl font-bold text-text-primary'>Devid Tom</span>
                                <span className='text-text-secondary text-sm'>Admin</span>
                            </span>
                        </div>
                        <div>
                            <CustomButton className={`bg-secondLightPrimary`}>
                                <span className='flex items-center text-primary  h-[33px] '>
                                    <span><Icon className='text-normal md:text-[19px]' icon="lucide:phone-call" /></span>
                                    <span>Call</span>
                                </span>
                            </CustomButton>
                        </div>


                    </div>
                </div>
                <div className='pb-[30px] pt-6 flex flex-wrap gap-5 md:gap-11 px-[30px]'>
                    <span className='flex flex-col '>
                        <span className='text-normal md:text-[19px] font-bold text-text-primary'>Male</span>
                        <span className='font-medium text-[13px] text-text-secondary'>Gender</span>
                    </span>
                    <span className='flex flex-col'>
                        <span className='text-normal md:text-[19px] font-bold text-text-primary'>12/06/1996</span>
                        <span className='font-medium text-[13px] text-text-secondary'>Birthday</span>
                    </span>
                    <span className='flex flex-col'>
                        <span className='text-normal md:text-[19px] font-bold text-text-primary'>Doctor</span>
                        <span className='font-medium text-[13px] text-text-secondary'>Profession</span>
                    </span>
                    <span className='flex flex-col'>
                        <span className='text-normal md:text-[19px] font-bold text-text-primary'>B+</span>
                        <span className='font-medium text-[13px] text-text-secondary'>Blood Group</span>
                    </span>
                    
                </div>
            </SectionWrapper>
        </>
    );
};

export default Profile;