import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import React, { useState } from 'react'

const AdminSupportAgentTableAction = () => {
    const [edit,setEdit] = useState(false)
    const [resetModal,setResetMOdal] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const [popupShow,setPopupShow] = useState(false)



  
    const handleOpenChange = (newOpen) => {
      setPopupShow(newOpen);
    };

    // =====Action button Edit Reset Delete=====
    const content = (
        <div className=" w-[170px]">
            <button onClick={()=>{setEdit(true);setPopupShow(false)}} className=" text-sm w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] flex  py-3 px-5">Edit Details</button>
            <button onClick={()=>{setResetMOdal(true);setPopupShow(false)}} className=" text-sm flex  w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] py-3 px-5">Reset password</button>
            <button onClick={()=>{setDeleteModal(true);;setPopupShow(false)}} className=" text-sm w-full flex  items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5">Delete Admin</button>
        </div>
      );


  return (
    <>
     <div>
      <div>
        <Popover open={popupShow}  onOpenChange={handleOpenChange} content={content} placement="leftTop" trigger="click">
          <button className=" hover:bg-primary/10 rounded-full w-[40px] h-[40px] flex items-center justify-center"><Icon icon="basil:other-2-outline" className=" text-[35px]"/></button>
        </Popover>
      </div>
    </div>

      {/* ============= admin edit Modal============ */}
      {/* <SuperAdminEditModal item={data} modalOPen={edit} setModalOpen={setEdit}/> */}
    {/* ============= admin password change Modal============ */}
      {/* <SuperAdminResetPasswordModal  modalOPen={resetModal} setModalOpen={setResetMOdal}/> */}
    {/* ============= admin delete Modal============ */}
      {/* <DeleteModal modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this admin account? This process"} title2={"can be undo."}/> */}
    </>
  )
}

export default AdminSupportAgentTableAction