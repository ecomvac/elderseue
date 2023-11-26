import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Popover } from 'antd';
import DeleteModal from '../../../../../Shared/delete/DeleteModal';

const AllDevices = ({ data }) => {
    
    const [deleteModal, setDeleteModal] = useState(false);
    const [popoverStates, setPopoverStates] = useState(Array(data.length).fill(false));

    const handleOpenChange = (index, newOpen) => {
        const newPopoverStates = [...popoverStates];
        newPopoverStates[index] = newOpen;
        setPopoverStates(newPopoverStates);
    };
    const content = (index) => (
        <div className=" w-[190px]">
            <button className="text-sm flex w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] py-3 px-5">Edit Device</button>
            <button onClick={() => { setDeleteModal(true); handleOpenChange(index, false) }} className="text-sm w-full flex items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5">Delete Device</button>
        </div>
    );
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[870px] overflow-y-auto'>
            {
                data?.map((device, index) => <>
                    <div key={index} className='rounded-[18px] bg-white p-4'>
                        <div className='flex justify-between'>
                            <span className='flex flex-col gap-2.5'>
                                <img src={device?.img} alt="Device" className='w-10' />
                                <p className='font-medium text-lg text-text-primary'>{device?.name}</p>
                            </span>
                            <Popover className='flex items-start w-6 h-6' open={popoverStates[index]} onOpenChange={(newOpen) => handleOpenChange(index, newOpen)} content={() => content(index)} placement="leftTop" trigger="click">
                                <button className='hover:bg-primary/10 p-1 rounded-full'>
                                    <img src={'/images/explore.svg'} className='w-5 h-5' alt="" />
                                </button>
                            </Popover>

                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <span className='flex items-center gap-1'>
                                <span className={
                                    `
                                    ${device?.status==='inactive'?'text-gray-500 p-[2px] bg-gray-200 rounded-full text-[14px]':'text-green-500 p-[2px] bg-green-200 rounded-full text-[14px]'}
                                    `
                                }><Icon icon="octicon:dot-fill-24" /></span>
                                <span className='text-base font-medium text-[#969BB3]'>{device?.title}</span>
                            </span>
                            <span className={`${device?.status==='inactive'?'text-white bg-gray-400 p-2 text-lg rounded-full':'text-white bg-primary p-2 text-lg rounded-full'}`}>
                                {device?.document ?<Icon icon="ci:file-document" />:<Icon icon="mingcute:power-fill" />}
                                </span>

                        </div>
                    </div>
                </>)
            }
            <DeleteModal modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this device?"} title2={" Process can be undo."} />
        </div>
    );
};

export default AllDevices;