import React from 'react'

const ElderlyTrends = () => {
  return (
    <div>
        <h2 className=' text-text-primary font-bold text-2xl mb-5'>Elderly Trends</h2>
        <div className=' grid grid-cols-3 gap-[50px]'>
            <div>
                <div className=' bg-[#58CB6C] w-full h-[4px] rounded-[18px]'></div>
               <div className='p-[8px]'>
                    <h2 className=' text-[19px] font-bold'>Average</h2>
                    <p className=' text-[13px] font-normal text-text-primary/60'>Everything is stable with elderly trends.</p>
               </div>

               <div>
                    {
                        
                    }
               </div>
            </div>
            <div>
            <div className=' bg-Warning w-full h-[4px] rounded-[18px]'></div>
            <div className='p-[8px]'>
                    <h2 className=' text-[19px] font-bold'>Warning</h2>
                    <p className=' text-[13px] font-normal text-text-primary/60'>Emerging concerns in elderly trends, monitor closely.</p>
               </div>
            </div>
            <div>
                <div className=' bg-Critical w-full h-[4px] rounded-[18px]'></div>
                <div className='p-[8px]'>
                    <h2 className=' text-[19px] font-bold'>Critical</h2>
                    <p className=' text-[13px] font-normal text-text-primary/60'>Urgent action required, elderly trends have reached a critical point.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ElderlyTrends