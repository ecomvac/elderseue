import { Icon } from '@iconify/react';
import React from 'react';
import Trends from './Trends/Trends';

const InnerOverView = () => {
    return (
        <div>
            <div className='flex items-center text-secondary font-medium py-6'>
               <h2  className='flex items-center cursor-pointer'> <Icon className='mr-1' icon="fluent:ios-arrow-left-24-filled" />Back</h2>
            </div>
            <Trends></Trends>
        </div>
    );
};

export default InnerOverView;