import React from 'react';
import SuperAdminSidebar from '../Components/SuperAdmin/SuperAdminSidebar/SuperAdminSidebar';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav/DashboardNav';

const SuperAdminDashboardLayout = () => {
    return (
        <div className="flex bg-[#F4F7FE]">
        <div className='w-[280px] md2:block hidden'>
            {/* ----------------admin Dashboard sidebar here----------------- */}
            <SuperAdminSidebar />
    
        </div>
        <div className='bg-[#F4F7FE] w-full min-h-[100vh] px-5'>
            {/* Admin dashboard outlet create */}
            <DashboardNav />
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default SuperAdminDashboardLayout;