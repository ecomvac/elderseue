import React, { useState } from 'react';
import selectRoleImg from '../../../assets/sellectRole.svg'
import logo from '../../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { Radio } from 'antd';

const SelectRolePage = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const handleRole = (e) => {
        console.log('radio checked', e);
        setValue(e);
    };


    const onSubmit = () => {

        if (value) {
            navigate("/login");
        } else {
            setError('Please Select your role!')
        }
    };

    return (
        // <div className='lg:flex items-center h-screen'>
        //     <div className="lg:max-w-[632px] sm:w-full sm:px-5 md:px-10 mx-auto lg:px-24">
        //         <div>
        //             <img src={logo} alt="logo" className="sm:mt-4 md:mt-6 lg:mt-0 w-52" />
        //             <div className="mt-16">
        //                 <h1 className="font-bold text-2xl">Select Your Role</h1>
        //                 <p className="text-[#6b6b6b] mt-2">
        //                     Choose your role to access the platform: Super Admin, Admin, or Support Agent.
        //                 </p>
        //                 <div>
        //                     {error && <h1 className='text-rose-600 font-bold mt-3'>{error}</h1>}
        //                 </div>
        //                 <Radio.Group  className="my-11 w-full" value={value}>
        //                     <div onClick={() => handleRole('supperAdmin')} className={`border cursor-pointer rounded-xl flex justify-between p-7 mb-6  ${value === 'supperAdmin' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
        //                         <div className='flex items-center'>
        //                             <Icon className='text-primary text-3xl font-bold mr-4' icon="mingcute:user-security-line" />
        //                             <h1 class="text-secondary font-medium text-lg">Supper Admin</h1>


        //                         </div>
        //                         <div className='flex items-center'>
        //                             <Radio value={'supperAdmin'}></Radio>
        //                         </div>

        //                     </div>
        //                     <div onClick={() => handleRole('admin')} className={`border cursor-pointer rounded-xl flex justify-between p-7 my-6 ${value === 'admin' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
        //                         <div className='flex items-center'>
        //                             <Icon className='text-primary text-3xl font-bold mr-4' icon="mingcute:user-3-line"/>
        //                             <h1 class="text-secondary font-medium text-lg">Admin</h1>

        //                         </div>

        //                         <div className='flex items-center'>
        //                             <Radio value={'admin'}></Radio>
        //                         </div>

        //                     </div>
        //                     <div onClick={() => handleRole('supportAgent')} className={`border cursor-pointer rounded-xl flex justify-between p-7 mt-6 ${value === 'supportAgent' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
        //                         <div className='flex items-center'>
        //                             <Icon className='text-primary text-3xl font-bold mr-4' icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />
        //                             <h1 class="text-secondary font-medium text-lg">Support Agent</h1>

        //                         </div>

        //                         <div className='flex items-center'>
        //                             <Radio value={'supportAgent'}></Radio>
        //                         </div>

        //                     </div>

        //                 </Radio.Group>
        //                 <div className=" flex justify-between">
        //                     <div className='flex items-center'>
        //                         <div className='bg-primary w-[30px] h-[13px] rounded-xl mr-2.5'></div>
        //                         <div className='bg-gray-400 w-[13px] h-[13px] rounded-xl'></div>

        //                     </div>
        //                     <div className=''>
        //                         <button
        //                             onClick={onSubmit}
        //                             type="submit"
        //                             className="text-white bg-primary rounded-xl px-3 py-2 text-sm font-medium flex items-center"
        //                         >
        //                             Next
        //                             <Icon className='ml-2.5 '  icon="streamline:interface-arrows-right-arrow-right-keyboard" />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="lg:block md:hidden w-8/12 mx-auto mt-5 bg-[#FBFCFD] flex justify-center sm:hidden">
        //             <img className='mx-auto' src={selectRoleImg} alt="logo" />
        //      </div>
        // </div>
        <div className='md:flex w-full '>
            <div className="flex items-center md:h-[100vh] md:w-[40%] w-full md:pt-10 pt-5 md:flex justify-center">
                <div className="lg:w-[70%] px-5">
                    <img src={logo} alt="logo" className=" w-52" />
                    <div className="md:mt-40 mt-20">
                        <h1 className="font-bold text-2xl">Select Your Role</h1>
                        <p className="text-[#6b6b6b] mt-2">
                            Choose your role to access the platform: Super Admin, Admin, or Support Agent.
                        </p>
                        <div>
                            {error && <h1 className='text-rose-600 font-bold mt-3'>{error}</h1>}
                        </div>
                        <Radio.Group  className="my-11 w-full" value={value}>
                            <div onClick={() => handleRole('supperAdmin')} className={`border cursor-pointer rounded-xl flex justify-between p-7 mb-6  ${value === 'supperAdmin' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
                                <div className='flex items-center'>
                                    <Icon className='text-primary text-3xl font-bold mr-4' icon="mingcute:user-security-line" />
                                    <h1 class="text-secondary font-medium text-lg">Supper Admin</h1>


                                </div>
                                <div className='flex items-center'>
                                    <Radio value={'supperAdmin'}></Radio>
                                </div>

                            </div>
                            <div onClick={() => handleRole('admin')} className={`border cursor-pointer rounded-xl flex justify-between p-7 my-6 ${value === 'admin' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
                                <div className='flex items-center'>
                                    <Icon className='text-primary text-3xl font-bold mr-4' icon="mingcute:user-3-line"/>
                                    <h1 class="text-secondary font-medium text-lg">Admin</h1>

                                </div>

                                <div className='flex items-center'>
                                    <Radio value={'admin'}></Radio>
                                </div>

                            </div>
                            <div onClick={() => handleRole('supportAgent')} className={`border cursor-pointer rounded-xl flex justify-between p-7 mt-6 ${value === 'supportAgent' ? 'bg-[#e6f1fe] border-primary' : ''}`}>
                                <div className='flex items-center'>
                                    <Icon className='text-primary text-3xl font-bold mr-4' icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />
                                    <h1 class="text-secondary font-medium text-lg">Support Agent</h1>

                                </div>

                                <div className='flex items-center'>
                                    <Radio value={'supportAgent'}></Radio>
                                </div>

                            </div>

                        </Radio.Group>
                        <div className=" flex justify-between">
                            <div className='flex items-center'>
                                <div className='bg-primary w-[30px] h-[13px] rounded-xl mr-2.5'></div>
                                <div className='bg-gray-400 w-[13px] h-[13px] rounded-xl'></div>

                            </div>
                            <div className=''>
                                <button
                                    onClick={onSubmit}
                                    type="submit"
                                    className="text-white bg-primary rounded-xl px-3 py-2 text-sm font-medium flex items-center"
                                >
                                    Next
                                    <Icon className='ml-2.5 '  icon="streamline:interface-arrows-right-arrow-right-keyboard" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:h-[100vh] mt-5 md:mt-0 md:w-[60%] md:flex items-center justify-center bg-[#FBFCFD]">
                    <img className='mx-auto' src={selectRoleImg} alt="logo" />
             </div>
        </div>
    );
};

export default SelectRolePage;