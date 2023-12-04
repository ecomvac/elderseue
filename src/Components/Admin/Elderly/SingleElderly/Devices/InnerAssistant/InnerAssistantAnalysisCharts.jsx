import { Column } from '@ant-design/plots';
import React from 'react'

const InnerAssistantAnalysisCharts = ({data}) => {
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        isPercent: true,
        legend: false,
        color: ['#9A4BFF', '#00D192', '#888888','#FF8A35'],
        isStack: true,
        minColumnWidth: 10,
        maxColumnWidth: 20,
        yAxis: {
          label: {
            formatter: (v) => `${v}%`,
          },
          grid: {
            line: {
              style: {
                stroke: '#707EAE',
                color: '#fff',
                lineWidth: 0.08,
                cursor: 'pointer',
              },
            },
          },
        },
        xAxis: {
          tickLine: {
            style: {
              stroke: '#fcfcfd',
            },
          },
          line: {
            style: {
              stroke: '#fcfcfd',
            },
          },
        },
        columnStyle: (data, dataColor) => {
          const baseStyle = { fill: dataColor, radius: [0, 0, 0, 0] };
          if (data?.type === 'NormalActivity') {
            baseStyle.radius = [0, 0, 5, 5];
          } else if (data?.type === 'WanderingNight') {
            baseStyle.radius = [5, 5, 0, 0];
          }
    
          return baseStyle;
        },
        tooltip: {
          customContent: (title, items) => {
            return (
              <></>
            );
          },
        },
      };
    
      return (
        <div className='h-[280px]'>
          <Column {...config} />
        </div>
      )
}

export default InnerAssistantAnalysisCharts