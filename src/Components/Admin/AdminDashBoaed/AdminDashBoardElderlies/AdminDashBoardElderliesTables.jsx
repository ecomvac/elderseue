import { Icon } from '@iconify/react';
import React from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import CustomTable2 from '../../../../Shared/Table/CustomTable2';
import AdminDashBoardElderliesTablesAlerts from './AdminDashBoardElderliesTablesAlerts';

const AdminDashBoardElderliesTables = ({tableData}) => {
    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'MANAGED BY ',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.MANAGEDBY}</span>,
        },
        {
            title: 'ALERTS',
            key: "id",
            render: (row) => (
                <AdminDashBoardElderliesTablesAlerts data={row}/>
            )
        },
        {
            title: '',
            key: "id",
            render: (row) => (
                    <Icon icon="basil:share-box-outline"  className='text-[20px] cursor-pointer text-secondary2 hover:text-[#0070F0]' />
            )
        },
    ];
  return (
    <div>
        <CustomTable2 tableData={tableData} columns={columns} scroll={{x:"500px"}}/>
    </div>
  )
}

export default AdminDashBoardElderliesTables