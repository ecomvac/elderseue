import React from 'react'
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb'
import SingleElderly from '../../Components/Admin/Elderly/SingleElderly'

const AdminElderlySinglePage = () => {
  return (
    <>
         <BreadCrumb title={"Elderly"} links={[{title:"Home",url:"/super-admin/dashboard"},{title:"Elderly",url:"/super-admin/dashboard"},{title:"Kari Daughetry #453453" ,url:"sdfsfdsfsf"}]}/>
         <SingleElderly/>
    </>
  )
}

export default AdminElderlySinglePage