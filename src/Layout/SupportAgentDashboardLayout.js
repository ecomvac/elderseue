import React from 'react';
import DashboardNav from '../Components/DashboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';
import SupportAgentSidebar from '../Components/SupportAgent/SupportAgentSidebar/SupportAgentSidebar';

const SupportAgentDashboardLayout = () => {
    return (
        <div className="flex bg-[#F4F7FE]">
        <div className='w-[280px] lg:block hidden'>
            {/* ----------------admin Dashboard sidebar here----------------- */}
            <SupportAgentSidebar />
    
        </div>
        <div className='bg-[#F4F7FE] w-full min-h-[100vh] md:px-[30px] px-4'>
            {/* Admin dashboard outlet create */}
            <DashboardNav name={"Liam Ketla"} user="Support Agent"/>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default SupportAgentDashboardLayout;