import React, { useState } from 'react'
import TopSupportAgentsCharts from './TopSupportAgentsCharts'

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


    const chartData = [
        {
            date:"05 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:300,
            day:"Jan",
        },
        {
            date:"06 July, 2023",
            name:"Tanjim Ahmed",
            caseSolved:325,
            day:"Feb",
        },
        {
            date:"07 July, 2023",
            name:"Tanjim Ahmed",
            caseSolved:350,
            day:"Mar",
        },
        {
            date:"08 July, 2023",
            name:"Tasfia Islam",
            caseSolved:370,
            day:"Apr",
        },
        {
            date:"09 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:350,
            day:"May",
        },
        {
            date:"10 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:413,
            day:"Jun",
        },
        {
            date:"11 July, 2023",
            name:"Tasfia Islam",
            caseSolved:370,
            day:"Jul",
        },
        {
            date:"12 July, 2023",
            name:"Tasfia Islam",
            caseSolved:330,
            day:"Aug",
        },
        {
            date:"13 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:280,
            day:"Sep",
        },
        {
            date:"14 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:270,
            day:"Oct",
        },
        {
            date:"15 July, 2023",
            name:"Towsif Ahmed",
            caseSolved:300,
            day:"Nov",
        },
        {
            date:"16 July, 2023",
            name:"Tasfia Islam",
            caseSolved:320,
            day:"Dec",
        },
    ]

  return (
    <div>
        <div className=' flex items-center justify-between'>
            <h2 className=' text-2xl font-bold text-text-primary'>Top Support Agents</h2>

            <div className=' bg-primary/20 rounded-[9px] p-1'>
                {tabData.map((tab)=>(
                    <button onClick={()=>setActive(tab.id)} key={tab.id} className={` w-[75px] py-2 px-5 font-normal text-[12px] rounded-[9px] ${tab.id===active ? " bg-text-primary text-white" :"text-[#8F6ABC]"}`}>{tab.title}</button>
                ))}
            </div>
        </div>
        <div>
            <TopSupportAgentsCharts data={chartData}/>
        </div>
    </div>
  )
}

export default TopSupportAgents