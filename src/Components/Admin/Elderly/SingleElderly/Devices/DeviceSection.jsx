import React from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import { Tabs } from 'antd';
import AllDevices from './AllDevices';
import {devicesData} from '../../../../../assets/singleElderlyData'

const DeviceSection = () => {

    const tabData = [
        {
            id: 1,
            icon: <Icon icon="lucide:bar-chart" />,
            title: 'All',
            children: devicesData && <AllDevices data={devicesData}/>
        },
        {
            id: 2,
            icon: <Icon icon="basil:explore-outline" />,
            title: 'Living Room',
            children: '<Notifications />'
        },
        {
            id: 3,
            icon: <Icon icon="tabler:device-tv" />,
            title: 'Dining Room',
            children: '<Devices />'
        },
        {
            id: 4,
            icon: <Icon icon="quill:creditcard" />,
            title: 'Bed Room',
            children: '<Notifications />'
        },
        {
            id: 5,
            icon: <Icon icon="ion:notifications-outline" />,
            title: 'Kitchen Room',
            children: '<Notifications />'
        },
        {
            id: 6,
            icon: <Icon icon="majesticons:users-line" />,
            title: 'Bathroom',
            children: '<Customers />'
        },
        {
            id: 7,
            icon: <Icon className='' icon="fluent:history-20-filled" />,
            title: 'Garage',
            children: "Garage"
        },
        {
            id: 8,
            icon: <Icon className='' icon="fluent:history-20-filled" />,
            title: 'Children',
            children: "children"
        },
    ]

    return (
        <>
            <SectionWrapper>
                <div className='px-[22px] py-6'>
                    <div className='mb-5 flex items-center justify-between'>
                        <span className='text-dark-black text-[23px] font-bold'>Devices</span>
                        <button className='flex items-center font-medium text-primary bg-secondLightPrimary px-4 py-[7px] rounded-[10px]'><span className='text-[19px]'><Icon icon="ic:sharp-add" /></span> <span className='text-[13px]'>Add Device</span></button>
                    </div>
                    <div className='p-[18px] rounded-[30px] bg-[#F6F8FF]'>
                        {/* ---------tabs------------ */}
                        <div className=''>
                            <div id='device'>
                                <Tabs
                                    defaultActiveKey="2"
                                    items={tabData.map((tab) => {
                                        return {
                                            label: (
                                                <span className={`flex items-center`}>
                                                    {tab.title}
                                                </span>
                                            ),
                                            key: `${tab.id}`,
                                            children: tab.children,
                                        };
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </SectionWrapper>

        </>
    );
};

export default DeviceSection;