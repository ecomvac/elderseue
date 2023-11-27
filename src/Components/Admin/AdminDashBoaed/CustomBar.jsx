import React from 'react'

const CustomBar = () => {

  const dddd = "50%";
  const ddd = "30%";
  const dd = "20%";
  return (
    <div className='w-[237px] h-[18px] flex items-center gap-[3px] overflow-hidden rounded-full'>
        <div style={{width:dddd}} className={` h-full bg-[#5C76FF]`}>
        </div>
        <div style={{width:ddd}} className={` h-full bg-[#F3A713]`}>

        </div>
        <div style={{width:dd}} className={` h-full bg-[#F83333]`}>

      </div>
    </div>
  )
}

export default CustomBar