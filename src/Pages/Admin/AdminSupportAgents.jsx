import React, { useState } from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import CustomButton from '../../Shared/button/CustomButton'
import { Icon } from '@iconify/react';
import SearchInput from '../../Shared/Search/SearchInput';
import Sort from '../../Shared/sort/Sort';

const AdminSupportAgents = () => {
    const [search, setSearch] = React.useState("");
    const [modalOPen,setModalOpen] = useState(false)
    const [selected, setSelected] = useState("");
    const data = ["Sort", "name", "type"]
  
  
    const handelOpenModal = ()=>{
      setModalOpen(true)
    }
  return (
    <>
        <BreadCrumb title={"Support Agents"} links={[{title:"Home",url:"/admin/dashboard"},{title:"Support Agents",url:"/admin/dashboard/Support-Agents"}]}/>

        <div className=" lg:mt-[-30px] mb-[30px]">
        <div className=" bg-white rounded-2xl">
          <div className=" px-[22px] py-6 flex items-start flex-col lg:flex-row justify-between gap-2">
            <div className=" flex items-center justify-between w-full">
              <h2 className=" text-2xl font-bold text-text-primary">Admin</h2>

              {/* ========show button mobile view===== */}
              <CustomButton onClick={()=>handelOpenModal()} className={" lg:hidden flex"}>
                <Icon icon="ic:baseline-add" className=" text-xl mr-1" />{" "}
                Add New Admin
              </CustomButton>
            </div>
            <div className=" flex items-center justify-end gap-5 w-full">
              {/* =====Search sort and add admin button===== */}
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Support Agent"
              />
              <Sort selected={selected} setSelected={setSelected} data={data}/>
              <CustomButton onClick={()=>handelOpenModal()} className={" hidden lg:flex min-w-[80px]"}>
                <Icon icon="ic:baseline-add" className=" text-xl mr-1" />{" "}
                Create
              </CustomButton>
            </div>
          </div>

          {/* ---------admin Data table-------- */}
          <div className=" grid grid-cols-1"> 
            {/* <SuperAdminUserTable tableData={superAdmin} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSupportAgents