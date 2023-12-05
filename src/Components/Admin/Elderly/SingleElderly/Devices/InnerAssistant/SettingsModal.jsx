import React from 'react'
import CustomModal from '../../../../../../Shared/modal/CustomModal'
import { Slider } from 'antd'

const SettingsModal = ({modalOPen,setModalOpen}) => {

    const handleSubmit = ()=>{
        setModalOpen(false)
    }

    const onChange = (value) => {
        console.log('onChange: ', value);
      };
      const onAfterChange = (value) => {
        console.log('onAfterChange: ', value);
      };

  return (
    <CustomModal
    modalOPen={modalOPen}
    setModalOpen={setModalOpen}
    handleSubmit={handleSubmit}
    width={590}
    title="Settings"
    buttonText={"Save Changes"}
  > 
    <div className=' flex items-center flex-col gap-4 mt-10'>
        <div className='w-full'>
            <label htmlFor="" className=' text-[13px] font-medium text-text-primary'>Buffer Times</label>
            <div className=' flex items-center justify-between gap-4'>
                <Slider defaultValue={30} className='custom-slider w-full' onChange={onChange} onAfterChange={onAfterChange} />
                <h2 className=' text-xl font-medium text-primary w-[100px]'>1m 25s</h2>
            </div>
        </div>
        <div className='w-full'>
            <label htmlFor="" className=' text-[13px] font-medium text-text-primary'>Working Distance</label>
            <div className=' flex items-center justify-between gap-4'>
                <Slider defaultValue={30} className='custom-slider w-full' onChange={onChange} onAfterChange={onAfterChange} />
                <h2 className=' text-xl font-medium text-primary w-[100px]'>5.0 M</h2>
            </div>
        </div>
        <div className='w-full'>
            <label htmlFor="" className=' text-[13px] font-medium text-text-primary'>Installation Height</label>
            <div className=' flex items-center justify-between gap-4'>
                <Slider defaultValue={30} className='custom-slider w-full' onChange={onChange} onAfterChange={onAfterChange} />
                <h2 className=' text-xl font-medium text-primary w-[100px]'>2.4 M</h2>
            </div>
        </div>
    </div>

  </CustomModal>
  )
}

export default SettingsModal