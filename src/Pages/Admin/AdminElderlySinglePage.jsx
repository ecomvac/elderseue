import React from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import SingleElderly from '../../Components/Admin/Elderly/SingleElderly/SingleElderly'


const AdminElderlySinglePage = () => {


  return (
    <>
      <BreadCrumb title={"Elderly"} links={[{ title: "Home", url: "/super-admin/dashboard" }, { title: "Elderly", url: "/super-admin/dashboard" }, { title: "Kari Daughetry #453453", url: "sdfsfdsfsf" }]} />
      <div className='grid grid-cols-1 lg:mt-[-30px]'>
        <SingleElderly />
      </div>
    </>
  )
}

export default AdminElderlySinglePage