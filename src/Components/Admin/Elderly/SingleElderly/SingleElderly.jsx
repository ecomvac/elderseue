import React, { useContext, useState } from 'react';
import Customers from './Customers/Customers';
import Notifications from './Notifications/Notifications';
import Devices from './Devices/Devices';
import Overview from './Overview/Overview';
import InnerOverView from './Overview/InnerOverView/InnerOverView';
import { SidebarContext } from '../../../../Context/CustomContext';
import Subscriptions from './Subscriptions/Subscriptions';
import Activity from './Activity/Activity';
import Report from './Report/Report';
const SingleElderly = () => {
    const { innerOverView } = useContext(SidebarContext)
    const [activeTab, setActiveTab] = useState('Overview')

    // const tabData = [
    //     {
    //         id: 1,
    //         icon: <Icon className='w-6 h-6' icon="lucide:bar-chart" />,
    //         title: 'Overview',
    //         children: innerOverView ? <Overview /> : <InnerOverView />
    //     },
    //     {
    //         id: 2,
    //         icon: <Icon className='w-6 h-6' icon="basil:explore-outline" />,
    //         title: 'Activity',
    //         children: <Activity />
    //     },
    //     {
    //         id: 3,
    //         icon: <Icon className='w-6 h-6' icon="tabler:device-tv" />,
    //         title: 'Devices',
    //         children: <Devices />
    //     },
    //     {
    //         id: 4,
    //         icon: <Icon className='w-6 h-6' icon="quill:creditcard" />,
    //         title: 'Subscriptions',
    //         children: <Subscriptions />
    //     },
    //     {
    //         id: 5,
    //         icon: <Icon className='w-6 h-6' icon="ion:notifications-outline" />,
    //         title: 'Notifications',
    //         children: <Notifications />
    //     },
    //     {
    //         id: 6,
    //         icon: <Icon className='w-6 h-6' icon="majesticons:users-line" />,
    //         title: 'Customers',
    //         children: <Customers />
    //     },
    //     {
    //         id: 7,
    //         icon: <Icon className='w-6 h-6' icon="basil:clipboard-alt-outline" />,
    //         title: 'Report',
    //         children: <Report />
    //     },
    // ]
    const tabs = [
        {
            id: 1,
            title: 'Overview',
            // children: 
        },
        {
            id: 2,
            title: 'Activity',
        },
        {
            id: 3,
            title: 'Devices',
        },
        {
            id: 4,
            title: 'Subscriptions',
        },
        {
            id: 5,
            title: 'Notifications',
        },
        {
            id: 6,
            title: 'Customers',
        },
        {
            id: 7,
            title: 'Report',
        },
    ]
    return (

        <>
            <div>
                <div className=' overflow-x-auto'>
                    <div className='bg-[#F6F8FF] flex border-b-[3px] border-primary'>
                        {tabs?.map(tab => <>
                            <div className='flex items-end'>
                                <div className={`duration-500 ${activeTab === tab?.title ? 'bg-primary' : 'bg-white'} w-[25px] h-[15px]`}>
                                    <div className=' bg-[#F4F7FE] w-[25px] h-[15px] rounded-br-[20px]'></div>
                                </div>

                                <button onClick={() => { setActiveTab(tab?.title) }} className={`duration-500 px-5 py-[11px] text-base font-bold ${activeTab === tab?.title ? 'bg-primary rounded-t-[22px] text-white ' : ' text-[#B8BBCC]'}`}>{tab?.title}</button>

                                <div className={`duration-500 ${activeTab === tab?.title ? 'bg-primary' : 'bg-white'} w-[25px] h-[15px]`}>
                                    <div className='bg-[#F4F7FE] w-[25px] h-[15px] rounded-bl-[20px]'></div>
                                </div>
                            </div>

                        </>)}

                    </div>
                </div>

                {
                    activeTab === 'Overview' && <>

                        {
                            innerOverView ? <Overview /> : <InnerOverView />
                        }
                    </>
                }
                {
                    activeTab === 'Activity' && <Activity />
                }
                {
                    activeTab === 'Devices' && <Devices />
                }
                {
                    activeTab === 'Subscriptions' && <Subscriptions />
                }
                {
                    activeTab === 'Notifications' && <Notifications />
                }
                {
                    activeTab === 'Customers' && <Customers />
                }
                {
                    activeTab === 'Report' && <Report />
                }

            </div>
            {/* <div id='elderly'>
                <Tabs
                    defaultActiveKey="1"
                    items={tabData.map((tab) => {
                        return {
                            label: (
                                <span className={`flex items-center gap-2`}>
                                    {tab.title}
                                </span>
                            ),
                            key: `${tab.id}`,
                            children: tab.children,
                        };
                    })}
                />
            </div> */}

        </>
    );
};

export default SingleElderly;