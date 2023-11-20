import React from "react";
import TopHeading from "../../Shared/TopHeading/TopHeading";
import SearchInput from "../../Shared/Search/SearchInput";
import CustomButton from "../../Shared/button/CustomButton";
import { Icon } from "@iconify/react";
import SuperAdminUserTable from "../../Components/SuperAdmin/superAdmin/SuperAdminUserTable";
import { superAdmin } from "../../assets/admin/data";

const SuperAdminDashboardHome = () => {
  const [search, setSearch] = React.useState("");

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
              <CustomButton>
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
    </>
  );
};

export default SuperAdminDashboardHome;
