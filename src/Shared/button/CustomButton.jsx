import React from 'react'

const CustomButton = ({type="submit",style,children,className,onClick=()=>{}}) => {
  return (
    <button style={style} type={type} onClick={onClick}  className={` px-[14px] h-[37px] bg-primary hover:bg-primary/70 duration-300 rounded-[16px] font-[500] text-[13px] text-white flex items-center justify-center ${className}`}>
        {children}
    </button>
  )
}

export default CustomButton