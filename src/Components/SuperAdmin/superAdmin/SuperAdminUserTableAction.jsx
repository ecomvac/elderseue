import { Icon } from "@iconify/react";
import { Popover } from "antd";
import React from "react";

const SuperAdminUserTableAction = ({data}) => {


    // =====Action button Edit Reset Delete=====
    const content = (
        <div className=" w-[170px]">
            <button className=" text-[14px] w-full items-start rounded-[10px] font-[500] text-[#969BB3] hover:bg-[#F4EBFF] hover:text-[#9039FF] flex  py-3 px-5">Edit Details</button>
            <button className=" text-[14px] flex  w-full items-start rounded-[10px] font-[500] text-[#969BB3] hover:bg-[#F4EBFF] hover:text-[#9039FF] py-3 px-5">Reset password</button>
            <button className=" text-[14px] w-full flex  items-start rounded-[10px] font-[500] text-[#969BB3] hover:bg-[#FDEEEE] hover:text-[#FF5959] py-3 px-5">Delete Admin</button>
        </div>
      );


  return (
    <div>
      <div>
        <Popover content={content} placement="leftTop" trigger="click">
          <button className=" hover:bg-primary/10 rounded-full w-[40px] h-[40px] flex items-center justify-center"><Icon icon="basil:other-2-outline" className=" text-[35px]"/></button>
        </Popover>
      </div>
    </div>
  );
};

export default SuperAdminUserTableAction;
