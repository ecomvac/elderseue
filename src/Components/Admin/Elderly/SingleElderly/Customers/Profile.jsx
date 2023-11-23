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
                            <img src={'/images/profile.svg'} alt="Profile" className='-mt-10 h-[120px] w-[120px] rounded-full mr-4' />
                            <span className='flex flex-col'>
                                <span className='text-2xl font-bold text-text-primary'>Devid Tom</span>
                                <span className='text-text-secondary text-sm'>Admin</span>
                            </span>
                        </div>
                        <div>
                            <CustomButton className={`bg-secondLightPrimary`}>
                                <span className='flex items-center text-primary  h-[33px] '>
                                    <span><Icon className='text-[19px]' icon="lucide:phone-call" /></span>
                                    <span>Call</span>
                                </span>
                            </CustomButton>
                        </div>


                    </div>
                </div>
                <div>

                </div>
            </SectionWrapper>
        </>
    );
};

export default Profile;