import React, { useState } from "react";
import TopHeading from "../../Shared/TopHeading/TopHeading";
import SearchInput from "../../Shared/Search/SearchInput";
import CustomButton from "../../Shared/button/CustomButton";
import { Icon } from "@iconify/react";
import SuperAdminUserTable from "../../Components/SuperAdmin/superAdmin/SuperAdminUserTable";
import { superAdmin } from "../../assets/admin/data";
import CreateAdminModal from "../../Components/SuperAdmin/superAdmin/CreateAdminModal";


const SuperAdminDashboardHome = () => {
  const [search, setSearch] = React.useState("");
  const [modalOPen,setModalOpen] = useState(false)


  const handelOpenModal = ()=>{
    setModalOpen(true)
  }

  return (
    <>
      <TopHeading/>
      <div className=" mt-[-30px] mb-[30px]">
        <div className=" bg-white rounded-[16px]">
          <div className="px-[22px] py-[24px] flex items-center justify-between">
            <h2 className=" text-[24px] font-[700] text-text-primary">Admin</h2>
            <div className=" flex items-center gap-[20px]">
              {/* =====Search sort and add admin button===== */}
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Admin"
              />
              <CustomButton onClick={()=>handelOpenModal()}>
                <Icon icon="ic:baseline-add" className=" text-[20px] mr-1" />{" "}
                Add New Admin
              </CustomButton>
            </div>
          </div>

          {/* ---------admin Data table-------- */}
          <div>
            <SuperAdminUserTable tableData={superAdmin} />
          </div>
        </div>
      </div>
        {/* ---------Create new admin Modal-------- */}
        <CreateAdminModal modalOPen={modalOPen} setModalOpen={setModalOpen}/>
    </>
  );
};

export default SuperAdminDashboardHome;
