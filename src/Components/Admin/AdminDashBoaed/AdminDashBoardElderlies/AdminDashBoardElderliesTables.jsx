import { Icon } from '@iconify/react';
import React, { useContext } from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import CustomTable2 from '../../../../Shared/Table/CustomTable2';
import AdminDashBoardElderliesTablesAlerts from './AdminDashBoardElderliesTablesAlerts';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../Context/CustomContext';

const AdminDashBoardElderliesTables = ({tableData}) => {
    const {setBreadCrumb} = useContext(SidebarContext)
    const navigate = useNavigate()
    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                <button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>

                    <AdminFiled data={row} />
                </button>
            )
        },
        {
            title: 'MANAGED BY ',
            render: (row) => <button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className='text-[16px] font-[400] text-secondary2'>{row.MANAGEDBY}</span>,
            </button>
                
        },
        {
            title: 'ALERTS',
            key: "id",
            render: (row) => (<button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <AdminDashBoardElderliesTablesAlerts data={row}/>
            </button>
            )
        },
        {
            title: '',
            key: "id",
            render: (row) => (<button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <Icon icon="basil:share-box-outline"  className='text-[20px] cursor-pointer text-secondary2 hover:text-[#0070F0]' />
            </button>
            )
        },
    ];

    const handelClick = (record) => {
        navigate(`/admin/dashboard/elderly/${record?.id}`)
        setBreadCrumb({title:"Dashboard",url:"/admin/dashboard"})
    }
  return (
    <div>
        <CustomTable2 tableData={tableData} columns={columns} scroll={{x:"500px"}}/>
    </div>
  )
}

export default AdminDashBoardElderliesTables