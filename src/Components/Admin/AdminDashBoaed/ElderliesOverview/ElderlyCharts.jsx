import { Column } from '@ant-design/plots';
import React from 'react'

const ElderlyCharts = ({data}) => {

    const config = {
        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        legend: false,
        color:["#ffffffb3","#ffffffb3","#ffffffb3"],
        yAxis: {
            label: {
              formatter: (v) => `${(v)}`,
            },
              grid: {
                line: {
                  style: {
                    stroke: '#707EAE',
                    color:"#fff",
                    lineWidth: 0.00,
                    cursor: 'pointer',
                  },
                },
              },
            },
      };
    


  return (
    <div className=' h-[220px] text-white'>
        <Column {...config} />
    </div>
  )
}

export default ElderlyCharts