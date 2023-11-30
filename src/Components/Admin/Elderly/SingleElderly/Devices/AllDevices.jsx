import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Popover } from 'antd';
import DeleteModal from '../../../../../Shared/delete/DeleteModal';

const AllDevices = ({ data }) => {
    const [deviceData, setDeviceData] = useState(data)
    const [deleteModal, setDeleteModal] = useState(false);
    const [popoverStates, setPopoverStates] = useState(Array(data.length).fill(false));
    const [deviceId, setDeviceId] = useState(null)

    const [showDocument, setShowDocument] = useState(null)

    const removeDevice = () => {
        const updatedDeviceData = deviceData.filter(device => device.id !== deviceId);
        setDeviceData(updatedDeviceData);
    }

    const handleOpenChange = (index, newOpen) => {
        const newPopoverStates = [...popoverStates];
        newPopoverStates[index] = newOpen;
        setPopoverStates(newPopoverStates);
    };
    const content = (index, id) => (
        <div className=" w-[190px]">
            <button className="text-sm flex w-full items-start rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#9039FF] py-3 px-5">Edit Device</button>
            <button onClick={() => { setDeleteModal(true); handleOpenChange(index, false); setDeviceId(id) }} className="text-sm w-full flex items-start rounded-[10px] font-medium text-light-black hover:bg-danger/10 hover:text-danger py-3 px-5">Delete Device</button>
        </div>
    );
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[870px] overflow-y-auto mt-6'>
            {
                deviceData?.map((device, index) => <>
                    <div key={index} className='relative'>
                        {
                            showDocument===device.id && <>
                                {
                                    (device?.document) &&
                                    <div  onMouseLeave={() => setShowDocument(null)}  className='bg-primary rounded-[18px] p-4 flex items-end justify-between absolute w-full'>
                                        <span className='flex flex-col'>
                                            <span className='text-white/95 font-bold text-base mb-2'>{device?.document?.title}</span>
                                            <span className='flex flex-col gap-2'>
                                                <span className='text-sm font-medium text-white/80'>Temperature: <span className='text-white/95 font-bold'>{device?.document?.documents?.tem}</span><sup>o</sup>F</span>
                                                <span className='text-sm font-medium text-white/80'>Humidity: <span className='text-white/95 font-bold'>{device?.document?.documents?.humidity}%</span></span>
                                                <span className='text-sm font-medium text-white/80'>CO2 Level: <span className='text-white/95 font-bold'>{device?.document?.documents?.co2}</span><sub>ppm</sub></span>
                                                <span className='text-sm font-medium text-white/80'>Noise Level: <span className='text-white/95 font-bold'>{device?.document?.documents?.noise}</span><sub>dB</sub></span>
                                            </span>
                                        </span>

                                        <span className={`cursor-pointer text-primary bg-white p-2 text-lg rounded-full`}>
                                            <Icon icon="ci:file-document" />
                                        </span>
                                    </div>
                                }
                            </>
                        }
                        <div className='rounded-[18px] bg-white p-4'>
                            <div className='flex justify-between'>
                                <span className='flex flex-col gap-2.5'>
                                    <img src={device?.img} alt="Device" className='w-10' />
                                    <p className='font-medium text-lg text-text-primary'>{device?.name}</p>
                                </span>
                                <Popover className='flex items-start w-6 h-6' open={popoverStates[index]} onOpenChange={(newOpen) => handleOpenChange(index, newOpen)} content={() => content(index, device?.id)} placement="leftTop" trigger="click">
                                    <button className='hover:bg-primary/10 p-1 rounded-full'>
                                        <img src={'/images/explore.svg'} className='w-5 h-5' alt="" />
                                    </button>
                                </Popover>

                            </div>
                            <div className='mt-5 flex items-center justify-between'>
                                <span className='flex items-center gap-1'>
                                    <span className={
                                        `
                                    ${device?.status === 'inactive' ? 'text-gray-500 p-[2px] bg-gray-200 rounded-full text-[14px]' : 'text-green-500 p-[2px] bg-green-200 rounded-full text-[14px]'}
                                    `
                                    }><Icon icon="octicon:dot-fill-24" /></span>
                                    <span className='text-base font-medium text-[#969BB3]'>{device?.title}</span>
                                </span>
                                <span className={`cursor-pointer${device?.status === 'inactive' ? ' bg-gray-400 p-2 text-lg rounded-full' : ' bg-primary p-2 text-lg rounded-full'}`}>
                                    {device?.document ? <Icon className='text-white'onMouseEnter={() => setShowDocument(device.id)} icon="ci:file-document" /> : <Icon className='text-white' icon="mingcute:power-fill" />}
                                </span>

                            </div>
                        </div>

                    </div>
                </>)
            }
            <DeleteModal onDelete={() => removeDevice()} modalOPen={deleteModal} setModalOpen={setDeleteModal} title={"Are you sure to delete this device?"} title2={" Process can be undo."} />
        </div>
    );
};

export default AllDevices;