import React from 'react';
import SuperAdminSidebar from '../Components/SuperAdmin/SuperAdminSidebar/SuperAdminSidebar';
import { Outlet } from 'react-router-dom';

const SuperAdminDashboardLayout = () => {
    return (
        <div className="flex gap-5 bg-[#F4F7FE]">
        <div className='w-[280px] md2:block hidden'>
            {/* ----------------admin Dashboard sidebar here----------------- */}
            <SuperAdminSidebar />
    
        </div>
        <div className='bg-[#F4F7FE] w-full min-h-[100vh]'>
            {/* Admin dashboard outlet create */}
            {/* <DashboardNav /> */}
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default SuperAdminDashboardLayout;