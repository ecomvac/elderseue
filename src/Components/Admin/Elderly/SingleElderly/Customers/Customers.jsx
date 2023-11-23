import React from 'react';
import Profile from './Profile';
import FamilyMember from './FamilyMember';
import MembersOverview from './MembersOverview';

const Customers = () => {
    return (
        <div>
            <Profile />
            <div className='mt-[30px] xl:flex gap-[30px]  mb-[45px]'>
                <div className='w-full xl:w-2/3'><FamilyMember /></div>
                <div className='w-full mt-[30px] xl:mt-0 xl:w-1/3'><MembersOverview/></div>
            </div>

        </div>
    );
};

export default Customers;