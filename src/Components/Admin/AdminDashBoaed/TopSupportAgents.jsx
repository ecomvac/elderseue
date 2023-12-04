import React, { useState } from 'react'
import TopSupportAgentsCharts from './TopSupportAgentsCharts'
import { TopSupportAgentsMonthly } from '../../../assets/supportAgentData/AdminDashBoardChart'

const TopSupportAgents = () => {
    

    const [active,setActive] = useState(3)
    const tabData = [
        {
            id:1,
            title:"Daily"
        },
        {
            id:2,
            title:"Monthly"
        },
        {
            id:3,
            title:"Yearly"
        },
    ]


  return (
    <div>
        <div className=' flex md:items-center md:flex-row flex-col gap-3 justify-between'>
            <h2 className=' text-2xl font-bold text-text-primary'>Top Support Agents</h2>

            <div className=' w-[235px] bg-primary/20 rounded-[9px] p-1'>
                {tabData.map((tab)=>(
                    <button onClick={()=>setActive(tab.id)} key={tab.id} className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${tab.id===active ? " bg-text-primary text-white" :"text-[#8F6ABC]"}`}>{tab.title}</button>
                ))}
            </div>
        </div>
        <div>
            <TopSupportAgentsCharts data={TopSupportAgentsMonthly}/>
        </div>
    </div>
  )
}

export default TopSupportAgents