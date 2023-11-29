import React, { useContext } from 'react';
import Customers from './Customers/Customers';
import { Icon } from '@iconify/react';
import Notifications from './Notifications/Notifications';
import { Tabs } from 'antd';
import Devices from './Devices/Devices';
import Overview from './Overview/Overview';
import InnerOverView from './Overview/InnerOverView/InnerOverView';
import { SidebarContext } from '../../../../Context/CustomContext';
import Subscriptions from './Subscriptions/Subscriptions';
import Activity from './Activity/Activity';
import Report from './Report/Report';
const SingleElderly = () => {
    const { innerOverView } = useContext(SidebarContext)

    const tabData = [
        {
            id: 1,
            icon: <Icon className='w-6 h-6' icon="lucide:bar-chart" />,
            title: 'Overview',
            children: innerOverView? <Overview/>:<InnerOverView/>
        },
        {
            id: 2,
            icon: <Icon className='w-6 h-6' icon="basil:explore-outline" />,
            title: 'Activity',
            children: <Activity/>
        },
        {
            id: 3,
            icon: <Icon className='w-6 h-6' icon="tabler:device-tv" />,
            title: 'Devices',
            children: <Devices />
        },
        {
            id: 4,
            icon: <Icon className='w-6 h-6' icon="quill:creditcard" />,
            title: 'Subscriptions',
            children: <Subscriptions />
        },
        {
            id: 5,
            icon: <Icon className='w-6 h-6' icon="ion:notifications-outline" />,
            title: 'Notifications',
            children: <Notifications />
        },
        {
            id: 6,
            icon: <Icon className='w-6 h-6' icon="majesticons:users-line" />,
            title: 'Customers',
            children: <Customers />
        },
        {
            id: 7,
            icon: <Icon className='w-6 h-6' icon="basil:clipboard-alt-outline" />,
            title: 'Report',
            children: <Report />
        },
    ]

    return (

        <>
            <div id='elderly'>
                <Tabs
                    defaultActiveKey="1"
                    items={tabData.map((tab) => {
                        return {
                            label: (
                                <span className={`flex items-center gap-2`}>
                                    {tab.icon}
                                    {tab.title}
                                </span>
                            ),
                            key: `${tab.id}`,
                            children: tab.children,
                        };
                    })}
                />
            </div>

        </>
    );
};

export default SingleElderly;