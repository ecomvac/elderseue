import { Icon } from '@iconify/react'
import { Badge, Popover } from 'antd'
import React from 'react'

const DashboardNav = () => {



    // ====mobile view popup content====
    const content = (
        <div className="">
            <div className=' flex  flex-col items-center justify-center'>
                <h3 className=' text-base m-[-5px] p-0 font-medium text-text-primary'>Jeos Sola</h3>
                <p className=' text-[11px]  p-0 font-normal text-light-black'>Super Admin</p>
            </div>
            <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] py-2 px-5">
                <Badge size="small" count={3} offset={[-7, 4]} className='mt-1'>
                     <Icon icon="basil:notification-solid" className=' text-light-black text-[25px]'/>
                </Badge>
                Notification
            </button>
            <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] py-2 px-5">
                <Icon icon="mingcute:world-2-fill" className=' text-light-black text-[25px]'/>
                Language
            </button>
        </div>
      );


  return (
    <div className='w-full lg:pt-[45px] pt-5 flex items-center justify-end'>
        <div className=' bg-white lg2:w-[600px] lg:w-[450px] w-full p-[10px] pr-5 flex items-center justify-between gap-5 rounded-full'>
            <div className=' w-[10%] lg:hidden'>
                <button className=' flex items-center justify-start ml-3'><Icon icon="pepicons-pop:menu" className=' text-[25px]'/></button>
            </div>
            
            <div className=' relative lg:w-[90%] w-[80%]'>
                <Icon icon="iconamoon:search-bold" className=' absolute top-[14px] left-[14px] text-[#2B3674] text-[16px]'/>
                <input type="text" placeholder='Search' className=' placeholder-[#8F9BBA]  text-[14px] pl-9 outline-none font-[400] w-full bg-[#F9F9FB] py-3 px-5 rounded-full'/>
            </div>

            <div className=' hidden lg:flex items-center w-[350px] justify-end lg2:gap-[16px] gap-3'>
                <Badge size="small" count={3} offset={[-7, 4]} className='mt-1'>
                    <button className=''>
                        <Icon icon="basil:notification-solid" className=' text-light-black text-[25px]'/>
                    </button>
                </Badge>
                <button>
                    <Icon icon="mingcute:world-2-fill" className=' text-light-black text-[25px]'/>
                </button>
                <button className=' hidden lg:flex items-center gap-2'>
                    <img src="/images/user1.png" alt="" className=' w-[35px] h-[35px] rounded-full'/>
                    <div>
                        <h3 className=' text-base m-[-5px] p-0 font-medium text-text-primary'>Jeos Sola</h3>
                        <p className=' text-[11px]  p-0 font-normal text-light-black'>Super Admin</p>
                    </div>
                </button>
            </div>
             {/* ==========mobile user icon=======  */}
                <div className='w-[10%] lg:hidden flex justify-end'>
                    <Popover content={content}  placement="bottomRight" trigger="click">
                    <button className='flex items-center gap-2 w-[45px] h-[45px]'>
                    <img src="/images/user1.png" alt="" className=' w-[35px] h-[35px] rounded-full'/>
                    </button>
                    </Popover>
                </div>
        </div>
    </div>
  )
}

export default DashboardNav