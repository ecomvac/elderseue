import { Icon } from '@iconify/react';
import React, { useContext } from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import CustomTable2 from '../../../../Shared/Table/CustomTable2';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../Context/CustomContext';

const AdminDashBoardSupportAgentsTable = ({ tableData }) => {
    const {setBreadCrumb} = useContext(SidebarContext)
    const navigate = useNavigate()
    const columns = [
        {
            title: 'SUPPORT AGENT',
            key: "id",
            render: (row) => (
                <button onClick={() => handelClick(row.id)}>
                    <AdminFiled data={row} />
                </button>
            )
        },
        {
            title: 'CLOSED CASES',
            render: (row) => <button onClick={() => handelClick(row.id)}>
                <span className='text-[16px] cursor-pointer font-[400] text-secondary2'>{row.CLOSEDCASES}</span>
            </button>,
            sorter: (a, b) => a.CLOSEDCASES - b.CLOSEDCASES,
        },
        {
            title: 'RATING',
            render: (row) => <button onClick={() => handelClick(row.id)}>
                <span className='text-[16px] font-[400] text-secondary2'>{row.RATING}</span>
            </button>,
            sorter: (a, b) => a.RATING - b.RATING,
        },
        {
            title: 'COMMENTS',
            key: "id",
            render: (row) => (
                <button onClick={() => handelClick(row.id)}>
                    <div className=' flex items-center gap-1'>
                        <Icon icon="basil:chat-outline" className='text-[20px]' />
                        <span>{row.COMMENTS}</span>
                    </div>
                </button>

            )
        },
    ];
    const handelClick = (id) => {
        navigate(`/admin/dashboard/Support-Agents/${id}`)
        setBreadCrumb({title:"Dashboard",url:"/admin/dashboard"})
    }

    return (
        <div>
            <CustomTable2 tableData={tableData} columns={columns} scroll={{ x: "500px" }} />
        </div>
    )
}

export default AdminDashBoardSupportAgentsTable