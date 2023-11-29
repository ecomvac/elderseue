import { Icon } from '@iconify/react';
import React from 'react'

const CustomBar = () => {
  const problem = "50%";
  const warning = "30%";
  const critical = "20%";
  return (
    <div className='w-[237px] h-[18px] flex items-center gap-[3px] overflow-hicriticalen rounded-full'>
      <div style={{ width: problem }} className={`cursor-pointer h-full bg-[#5C76FF]`}>
      </div>
      <div style={{ width: warning }} className={`cursor-pointer  h-full bg-[#F3A713]`}>

      </div>
      <div style={{ width: critical }} className={`cursor-pointer  h-full bg-[#F83333]`}>

      </div>
    </div>
  )
}

export default CustomBar