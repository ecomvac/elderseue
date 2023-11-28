import { Area, G2 } from '@ant-design/plots';
import React from 'react'
import { configuration } from '../../../Shared/areaChartThemeConfiguration';

const TopSupportAgentsCharts = ({data}) => {

    const { registerTheme } = G2;
    registerTheme('custom-theme', configuration)
    const config = {
        data: data, 
        xField: 'day',
        yField: 'caseSolved',
        smooth: true,
        legend: false,
        color:'indigo',
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: 'l(90) 1:#D9D9D9 0:#EBEBEB',
                lineWidth: 1,
                lineDash: [4, 5],
                strokeOpacity: 1,
                cursor: 'pointer',
              },
            },
          },
        },
        yAxis: {
          grid: {
            line: {
              style: {
                stroke: '#9039FF',
                lineWidth: 0,
                cursor: 'pointer',
              },
            },
          },
        },
        color: 'indigo',
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#8f39ff67 1:#9039FF',
            };
        },
        tooltip: {
          customContent: (title, items) => { 
            const dataPoint = data.find(point => point.day === parseInt(title));
            if (dataPoint) {
              return `
              <div style="padding:10px 0px;">
              <div style="color:#3D4854; font-weight: 600; margin-bottom:12px;">${dataPoint.date}</div>
              <div style="color:#3D4854;font-size:16px; font-weight: 600; margin-bottom:8px;">${dataPoint.name}</div>
              <div style="color:#3D4854;font-size:16px; font-weight: 400; ;">Case Solved <span style="margin-left:40px; font-weight: 600;"> ${dataPoint.caseSolved}</span></div>
              </div>
              `;
            } else {
              return ''; // Handle the case when dataPoint is not found
            }
          },
        },
        theme:'custom-theme'
      };

  return (
    <div className='mt-[35px]'>
    <div className='w-full md:h-[302px] h-[300px] text-secondary'>
       <Area {...config} />
   </div>
</div>
  )
}

export default TopSupportAgentsCharts