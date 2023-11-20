import React from 'react'
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import CustomTable from '../../../Shared/Table/CustomTable';
import SuperAdminUserTableAction from './SuperAdminUserTableAction';
import { Icon } from '@iconify/react';

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
            render: (row) => <span className='text-[16px] font-[400] text-text-body'>{row.contactPerson}</span>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <span className='text-[16px] font-[400] text-text-body'>{row.businessName}</span>,
        },
        {
            title: 'BUSINESS ADDRESS',
            render: (row) => <span className='text-[16px] font-[400] text-text-body'>{row.businessAdress}</span>,
        },
        {
            title: <Icon icon="basil:other-2-outline" className=" text-[35px]"/>,
            key: 'action',
            render: (row) => (
                <SuperAdminUserTableAction data={row} />
            )
        }
    ];

  return (
    <div>
        <CustomTable tableData={tableData} columns={columns} scroll={{x:"1000px"}}/>
    </div>
  )
}

export default SuperAdminUserTable