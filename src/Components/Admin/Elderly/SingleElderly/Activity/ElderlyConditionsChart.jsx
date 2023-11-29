import React from 'react';
import { Column } from '@ant-design/plots';

const ElderlyConditionsChart = ({ data }) => {
    const config = {
        data: data,
        xField: 'day',
        yField: 'value',
        color: "#ffffff",
        minColumnWidth: 45,
        maxColumnWidth: 45,
        columnStyle: {
          fill: '#dec4ff',
          radius: [10,10, 10, 10], // Set the radius for rounded corners
        },
        yAxis: {
            label: {
                style: {
                    fill: '#9039FF',
                },
            },
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
        xAxis: {
            label: {
                style: {
                    fill: '#FFFFFF',
                },
            },
        },
        tooltip: {
            customContent: (day, data) => {
                const itemValue = data.map(v => v.value)
                return `<div className="custom-tooltip rounded-[14px] px-[5px] py-[3px]">
                            <h4 className="font-bold text-xl">${itemValue}</h4>
                            <div className="text-[#5D6670]">${day}</div>
                        </div>`;
            },
        }

    };
    return (
        <div className='mt-2 h-[220px]'><Column {...config} /></div>
    );
};

export default ElderlyConditionsChart;