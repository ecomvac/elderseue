import React, { useState } from 'react';
import { customerTable } from "../../../../../assets/singleElderlyData";
import CustomTable from '../../../../../Shared/Table/CustomTable';
import { Icon } from '@iconify/react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import CustomButton from '../../../../../Shared/button/CustomButton';
import TableActions from './TableActions';
const FamilyMember = () => {
    const [tableData, setTableData] = useState(customerTable);
    const [memberId,setMemberId]=useState(null)
    const removeMember = () => {
        const updatedTableData = tableData.filter(member => member.id !== memberId);
        setTableData(updatedTableData);
    };
    const columns = [
        {
            title: 'NAME',
            render: (row) => <span className=' text-base font-normal text-text-secondary flex items-center gap-2.5'><span>{row.name}</span>{row?.role && <span className='text-primary bg-secondLightPrimary text-[13px] py-[3px] px-1.5 rounded-lg'>Admin</span>}</span>
        },
        {
            title: 'RELATION',
            render: (row) => <span className=' text-base font-normal text-text-secondary'>{row.relation}</span>,
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <span className='text-base font-normal text-text-secondary'>{row.contact}</span>,
        },
        {
            title: 'AGE',
            render: (row) => <span className='text-base font-normal text-text-secondary'>{row.age}</span>,
        },
        {
            title: 'BLOOD GROUP',
            render: (row) => <span className=' text-base font-normal text-text-secondary'>{row.blood}</span>
        },
        {
            title: <Icon icon="basil:other-2-outline" className=" text-[35px]" />,
            key: 'id',
            render: (row) => (
                <TableActions setMemberId={setMemberId} removeMember={removeMember} data={row} />
            )
            // render: (row) => <span className=' text-base font-normal text-text-secondary'><Icon icon="bi:three-dots-vertical" /></span>
        }
    ];
    return (
        <>
            <SectionWrapper>
                <div className='flex items-center justify-between px-[22px] pt-[22px] pb-5'>
                    <span className='text-2xl font-bold text-text-primary'>Family Members</span>
                    <CustomButton>
                        <span className='flex gap-1 items-center'>
                            <span><Icon icon="ic:twotone-add" /></span>
                            <span>Add Member</span>
                        </span>
                    </CustomButton>
                </div>
                <CustomTable tableData={tableData} columns={columns} scroll={{ x: "1000px" }} />
            </SectionWrapper>

        </>
    );
};

export default FamilyMember;