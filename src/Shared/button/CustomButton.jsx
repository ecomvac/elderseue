import React from 'react'

const CustomButton = ({type="submit",style,children,className,onClick=()=>{}}) => {
  return (
    <button style={style} type={type} onClick={onClick}  className={` px-[14px] h-[40px] bg-primary hover:bg-primary/70 duration-300 rounded-[10px] font-[500] text-[13px] text-white flex items-center justify-center ${className}`}>
        {children}
    </button>
  )
}

export default CustomButton