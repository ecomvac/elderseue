import React from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import SingleElderly from '../../Components/Admin/Elderly/SingleElderly/SingleElderly'


const SupportAgentsElderlySinglePage = () => {


  return (
    <>
      <BreadCrumb title={"Elderly"} links={[{ title: "Home", url: "/super-admin/dashboard" }, { title: "Elderly", url: "/support-agent/dashboard/elderly" }, { title: "Kari Daughetry #453453", url: "" }]} />
      <div className='grid grid-cols-1 lg:mt-[-30px]'>
        <SingleElderly />
      </div>
    </>
  )
}

export default SupportAgentsElderlySinglePage