import React from 'react'
import AdminSupportAgentTableAction from './AdminSupportAgentTableAction';
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import CustomTable from '../../../Shared/Table/CustomTable';
import { Icon } from '@iconify/react';

const AdminSupportAgentTable = ({tableData}) => {
    const columns = [
        {
            title: 'SUPPORT AGENT',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <span className=' text-[14px] xl:text-base  font-normal text-text-secondary'>{row.contactNumber}</span>,
        },
        {
            title: 'CONTACT PERSON',
            render: (row) =>  <span className=' text-[14px] xl:text-base  font-normal text-text-secondary'>{row.contactPerson}</span>
        },
        {
            title: 'BUSINESS ADDRESS',
            render: (row) => <span className=' text-[14px] xl:text-base  font-normal text-text-secondary'>{row.businessAdress}</span>

        },
        {
            title: 'STATUS',
            key: "id",
            render: (row) => (
                <div className={`py-1 px-1 rounded-full cursor-pointer  h-[28px] flex items-center justify-center gap-1 ${row.status === "Active" ? " bg-success w-[80px]" : "bg-[#666D90] w-[88px]"}`}>
                    <div className={`w-[13px] h-[13px] rounded-full border-[3px] border-white bg-transparent`}>

                    </div>
                    <span className=' text-white font-medium text-[13px]'>{row.status}</span>
                </div>
            ),
            sorter: (a, b) => a.status - b.status,
        },
        {
            title: <Icon icon="basil:other-2-outline" className=" text-[35px]"/>,
            key: "id",
            render: (row) => (
                <AdminSupportAgentTableAction data={row} />
            )
        }
    ];
  return (
    <div>
        <CustomTable tableData={tableData} columns={columns} scroll={{x:"800px"}}/>
    </div>
  )
}

export default AdminSupportAgentTable