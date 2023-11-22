import React from 'react';
import {NavLink, useLocation, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
const SuperAdminSidebar = () => {
    const navigate = useNavigate()
    const path = useLocation()
    const menus = [
        {
            label: 'Admin', path: '/super-admin/dashboard', icon: <Icon className=' w-5 h-5' icon="basil:chart-pie-solid" />, child: []
        },
        {
            label: 'Suspended Admin', path: '/super-admin/dashboard/suspended-admin', icon: <Icon className=' w-5 h-5' Icon icon="basil:folder-block-outline" />, child: []
        },


    ]

    const activeStyle = {
        color: "#fff",
        borderLeft: "2px solid #FFF",
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 104.88%)"
    };
    return (
        <div className='flex flex-col justify-between bg-[#2C0064] h-[100vh] sticky top-0'>
            <section className='w-[280px] '>
                <div className='h-[80px] flex mt-5 items-center justify-center'> <img src="/images/sidebarlogo.png" alt="logo" className='max-w-[143px] mx-auto' /></div>
                {/* sidebar menu bar */}
                <div className='py-4 grid gap-1'>
                    {menus.map(menu => {
                        return <NavLink to={menu.path}
                            id='sidebar_hover'
                            className='block p-4 duration-150 text-white/60'
                            style={(menu.path === path.pathname ? activeStyle : undefined)}
                        >
                            <div className='flex item-center gap-2 font-bold'>
                                <span>
                                    {menu.icon}
                                </span>
                                <p className='text-[16px] font-[500]'>{menu.label}</p>
                            </div>
                        </NavLink>
                    })}
                </div>


            </section >

            <div>
                <div className='flex justify-between items-center group p-4'>
                    <button onClick={()=>navigate("/")} className='flex gap-2 w-full py-1 cursor-pointer justify-between rounded-[8px] px-3 bg_color_gradient  items-center'>
                        <p className='text-[16px] font-[500] text-white'>Log out</p>
                        <span className=' text-white w-[40px] flex items-center justify-center rounded-full h-[40px]'>
                        <Icon icon="humbleicons:logout" className=' text-[25px]'/>
                    </span>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default SuperAdminSidebar;