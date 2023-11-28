import { Icon } from '@iconify/react';
import React from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import CustomTable2 from '../../../../Shared/Table/CustomTable2';

const AdminDashBoardSupportAgentsTable = ({tableData}) => {

    const columns = [
        {
            title: 'SUPPORT AGENT',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CLOSED CASES',
            render: (row) => <span className='text-[16px] cursor-pointer font-[400] text-secondary2'>{row.CLOSEDCASES}</span>,
            sorter: (a, b) => a.CLOSEDCASES - b.CLOSEDCASES,
        },
        {
            title: 'RATING',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.RATING}</span>,
            sorter: (a, b) => a.RATING - b.RATING,
        },
        {
            title: 'COMMENTS',
            key: "id",
            render: (row) => (
                <div className=' flex items-center gap-1'>
                    <Icon icon="basil:chat-outline" className='text-[20px]' />
                    <span>{row.COMMENTS}</span>
                </div>
            )
        },
    ];


  return (
    <div>
        <CustomTable2 tableData={tableData} columns={columns} scroll={{x:"500px"}}/>
    </div>
  )
}

export default AdminDashBoardSupportAgentsTable