import React from 'react'
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import CustomTable from '../../../Shared/Table/CustomTable';
import SuperAdminUserTableAction from './SuperAdminUserTableAction';

const SuperAdminUserTable = ({tableData}) => {
    const columns = [
        {
            title: 'ADMIN',
            key: "admin",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT PERSON',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.contactPerson}</span>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.businessName}</span>,
        },
        {
            title: 'BUSINESS ADDRESS',
            render: (row) => <span className='text-[14px] xl:text-base font-normal text-text-secondary'>{row.businessAdress}</span>,
        },
        {
            title: "",
            key: 'action',
            render: (row) => (
                <SuperAdminUserTableAction data={row} />
            )
        }
    ];

  return (
    <div>
        <CustomTable tableData={tableData} columns={columns} scroll={{x:"800px"}}/>
    </div>
  )
}

export default SuperAdminUserTable