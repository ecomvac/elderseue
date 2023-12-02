import React from 'react';
import SuperAdminSidebar from '../Components/SuperAdmin/SuperAdminSidebar/SuperAdminSidebar';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav/DashboardNav';

const SuperAdminDashboardLayout = () => {
    return (
        <div className="flex bg-[#F4F7FE]">
        <div className='w-[280px] lg:block hidden'>
            {/* ----------------admin Dashboard sidebar here----------------- */}
            <SuperAdminSidebar/>
    
        </div>
        <div className='bg-[#F4F7FE] w-full min-h-[100vh] '>
            {/* Admin dashboard outlet create */}
            <DashboardNav name={"Jeos Sola"} user="Super Admin" role={"superAdmin"}/>
            <div className='md:px-[30px] px-4'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
    );
};

export default SuperAdminDashboardLayout;