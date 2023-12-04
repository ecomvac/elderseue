import React from 'react';
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import ElderlyTableAction from './ElderlyTableAction';
import CustomTable from '../../../../Shared/Table/CustomTable';
import { useNavigate } from 'react-router-dom';

const ElderlyTable = ({tableData,role}) => {
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
            title: 'CONTACT NUMBER',
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.contactNumber}</span>
                </button>
        },
        {
            title: 'ADDRESS',
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.businessAdress}</span>
                </button>
        },
        {
            title: 'CRITICAL',
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                <span className=' text-base font-normal text-text-secondary'>{row.CRITICAL}</span>,
                </button>,
                responsive: ['xl'],
        },
        {
            title: 'WARNING',
            responsive: ['xl'],
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                 <span className=' text-base font-normal text-text-secondary'>{row.WARNING}</span>
                 </button>
        },
        {
            title: 'PROBLEM',
            responsive: ['xl'],
            render: (row) =><button onClick={()=>handelClick(row)} className='w-full  cursor-pointer'>
                 <span className=' text-base font-normal text-text-secondary'>{row.PROBLEM}</span>
                 </button>
        },
        {
            title: "ACTIONS",
            key: "id",
            render: (row) => (
                <ElderlyTableAction data={row} role={role}/>
            )
        }
    ];

    const handelClick = (record) => {
        navigate(role==="support-agent" ? `/support-agent/dashboard/elderly/${record?.id}`: `/admin/dashboard/elderly/${record?.id}`)
    }


    return (
        <div>
            <CustomTable tableData={tableData} columns={columns} scroll={{x:"750px"}}/>
        </div>
    );
};

export default ElderlyTable;