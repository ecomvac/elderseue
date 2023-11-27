import React from 'react';
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import ElderlyTableAction from './ElderlyTableAction';
import CustomTable from '../../../../Shared/Table/CustomTable';

const ElderlyTable = ({tableData}) => {
    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                    <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) =>
                <span className=' text-base font-normal text-text-secondary'>{row.contactNumber}</span>
        },
        {
            title: 'ADDRESS',
            render: (row) =>
                <span className=' text-base font-normal text-text-secondary'>{row.businessAdress}</span>
        },
        {
            title: 'CRITICAL',
            render: (row) =>
                <span className=' text-base font-normal text-text-secondary'>{row.CRITICAL}</span>
        },
        {
            title: 'WARNING',
            render: (row) =>
                 <span className=' text-base font-normal text-text-secondary'>{row.WARNING}</span>
        },
        {
            title: 'PROBLEM',
            render: (row) =>
                 <span className=' text-base font-normal text-text-secondary'>{row.PROBLEM}</span>
        },
        {
            title: "ACTIONS",
            key: "id",
            render: (row) => (
                <ElderlyTableAction data={row} />
            )
        }
    ];
    return (
        <div>
            <CustomTable tableData={tableData} columns={columns} scroll={{x:"1000px"}}/>
        </div>
    );
};

export default ElderlyTable;