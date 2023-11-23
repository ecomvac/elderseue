import React, { useState } from 'react';
import Customers from './Customers/Customers';
import { Icon } from '@iconify/react';

const SingleElderly = () => {
    const [activeTab, setActiveTab] = useState('overView')
    const activeClass = 'bg-primary text-white px-5 py-[14px]'
    const normalClass = 'flex items-center gap-2.5 hover:bg-primary duration-300 rounded-[50px] hover:text-white'
    const inactive = 'text-text-secondary px-5 py-[14px]'
    return (
        <>
            <div className='bg-white rounded-full mb-12 p-2 flex items-center gap-[15px] font-medium'>
                <button onClick={() => setActiveTab('overView')} className={`${activeTab === 'overView' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="lucide:bar-chart" /></span>
                    <span className='text-lg'>OverView</span>
                </button>
                <button onClick={() => setActiveTab('activity')} className={`${activeTab === 'activity' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="basil:explore-outline" /></span>
                    <span className='text-lg'>Activity</span>
                </button>
                <button onClick={() => setActiveTab('devices')} className={`${activeTab === 'devices' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="tabler:device-tv" /></span>
                    <span className='text-lg'>Devices</span>
                </button>
                <button onClick={() => setActiveTab('subscriptions')} className={`${activeTab === 'subscriptions' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="quill:creditcard" /></span>
                    <span className='text-lg'>Subscriptions</span>
                </button>
                <button onClick={() => setActiveTab('notifications')} className={`${activeTab === 'notifications' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="ion:notifications-outline" /></span>
                    <span className='text-lg'>Notifications</span>
                </button>
                <button onClick={() => setActiveTab('customers')} className={`${activeTab === 'customers' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon icon="majesticons:users-line" /></span>
                    <span className='text-lg'>Customers</span>
                </button>
                <button onClick={() => setActiveTab('history')} className={`${activeTab === 'history' ? activeClass : inactive} ${normalClass}`}>
                    <span className='text-2xl'><Icon className='' icon="fluent:history-20-filled" /></span>
                    <span className='text-lg'>History</span>
                </button>
            </div>

            {
                activeTab === 'customers' && <Customers />
            }

        </>
    );
};

export default SingleElderly;