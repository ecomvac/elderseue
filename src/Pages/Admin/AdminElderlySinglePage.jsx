import React from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import SingleElderly from '../../Components/Admin/Elderly/SingleElderly/SingleElderly'
import { useParams } from 'react-router-dom'


const AdminElderlySinglePage = () => {
const params = useParams();
  return (
    <>
      <BreadCrumb title={"Elderly"} links={[{ title: "Home", url: "/admin/dashboard" }, { title: "Elderly", url: "/admin/dashboard/elderly" }, { title: "Kari Daughetry #453453", url: "" }]} />
      <div className='grid grid-cols-1 lg:mt-[-30px]'>
        <SingleElderly userId={params.id}/>
      </div>
    </>
  )
}

export default AdminElderlySinglePage