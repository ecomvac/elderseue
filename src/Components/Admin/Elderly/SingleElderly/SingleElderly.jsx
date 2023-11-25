import React from 'react';
import Customers from './Customers/Customers';
import { Icon } from '@iconify/react';
import Notifications from './Notifications/Notifications';
import { Tabs } from 'antd';
import Devices from './Devices/Devices';
const SingleElderly = () => {

    const tabData = [
        {
            id: 1,
            icon: <Icon icon="lucide:bar-chart" />,
            title: 'Overview',
            children: <Customers />
        },
        {
            id: 2,
            icon: <Icon icon="basil:explore-outline" />,
            title: 'Activity',
            children: <Notifications />
        },
        {
            id: 3,
            icon: <Icon icon="tabler:device-tv" />,
            title: 'Devices',
            children: <Devices />
        },
        {
            id: 4,
            icon: <Icon icon="quill:creditcard" />,
            title: 'Subscriptions',
            children: <Notifications />
        },
        {
            id: 5,
            icon: <Icon icon="ion:notifications-outline" />,
            title: 'Notifications',
            children: <Notifications />
        },
        {
            id: 6,
            icon: <Icon icon="majesticons:users-line" />,
            title: 'Customers',
            children: <Customers />
        },
        {
            id: 7,
            icon: <Icon className='' icon="fluent:history-20-filled" />,
            title: 'History',
            children: <Notifications />
        },
    ]

    return (

        <>
            <div id='elderly'>
                <Tabs
                    defaultActiveKey="2"
                    items={tabData.map((tab) => {
                        return {
                            label: (
                                <span className={`flex items-center gap-2.5`}>
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