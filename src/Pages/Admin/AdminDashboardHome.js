import React from 'react';
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb';
import TopSupportAgents from '../../Components/Admin/AdminDashBoaed/TopSupportAgents';
import AlertsOverview from '../../Components/Admin/AdminDashBoaed/AlertsOverview';

const AdminDashboardHome = () => {
    return (
        <>
             <BreadCrumb title={"Dashboard"} links={[{title:"Home",url:"/admin/dashboard"},{title:"Dashboard",url:"/admin/dashboard"}]}/>
             <div className=" lg:mt-[-30px] mb-[30px]">
                <div className='flex items-center lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[65%] w-full '>
                        <div className=' bg-white py-[30px] rounded-[20px] px-[22px]'>
                            <TopSupportAgents/>
                        </div>
                        <div className=' bg-white py-[30px] rounded-[20px] px-[22px] mt-[30px]'>
                            <AlertsOverview/>
                        </div>
                    </div>
                    <div className='lg:w-[35%] w-full '>

                    </div>
                </div>
             </div>
        </>
    );
};

export default AdminDashboardHome;