import { Icon } from '@iconify/react'
import { Badge } from 'antd'
import React from 'react'

const DashboardNav = () => {
  return (
    <div className='w-full py-[45px] flex items-center justify-end'>
        <div className=' bg-white lg2:w-[600px] w-full md:w-[450px] p-[10px] pr-5 flex items-center justify-between gap-5 rounded-full'>
            <div className=' relative w-[90%]'>
                <Icon icon="iconamoon:search-bold" className=' absolute top-[14px] left-[14px] text-[#2B3674] text-[16px]'/>
                <input type="text" placeholder='Search' className=' placeholder-[#8F9BBA]  text-[14px] pl-9 outline-none font-[400] w-full bg-[#F9F9FB] py-3 px-5 rounded-full'/>
            </div>

            <div className=' flex items-center w-[350px] justify-end lg2:gap-[16px] gap-3'>
                <Badge size="small" count={3} offset={[-7, 4]} className='mt-1'>
                    <button className=''>
                        <Icon icon="basil:notification-solid" className=' text-light-black text-[25px]'/>
                    </button>
                </Badge>
                <button>
                    <Icon icon="mingcute:world-2-fill" className=' text-light-black text-[25px]'/>
                </button>
                <button className='flex items-center gap-2'>
                    <img src="/images/user1.png" alt="" className=' w-[35px] h-[35px] rounded-full'/>
                    <div>
                        <h3 className=' text-[16px] m-[-5px] p-0  font-[500] text-text-primary'>Jeos Sola</h3>
                        <p className=' text-[11px]  p-0 font-[400] text-light-black'>Super Admin</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav