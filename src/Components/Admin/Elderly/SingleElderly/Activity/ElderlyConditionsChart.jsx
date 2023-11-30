import React from 'react';
import { Column } from '@ant-design/plots';

const ElderlyConditionsChart = ({ data }) => {
    const config = {
        data: data,
        xField: 'day',
        yField: 'value',
        color: "#ffffff",
        // interactions: [
        //     {
        //       type: "active-region",
        //       enable: false,
        //     },
        //   ],
        interactions: [{ type: 'element-active' }],
        state: {
            active: {
                animate: { duration: 100, easing: 'easeLinear' },
                style: {
                    lineWidth:3,
                    stroke: '#ffffff',

                },
            },
        },
        // interactions: [
        //     {
        //         type: 'column-active',
        //         cfg: {
        //             style: {
        //                 fill: 'red', // Set the column color to white on hover
        //             },
        //         },
        //     },
        // ],
        
        minColumnWidth: 45,
        maxColumnWidth: 45,
        columnStyle: {
            fill: '#dec4ff',
            radius: [10, 10, 10, 10], // Set the radius for rounded corners
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
            customContent: (title, items) => {
                return (
                    <div>
                        {items?.map((item, index) => {

                            const { value, title } = item;
                            return (
                                <span
                                    key={index}
                                    className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
                                    data-index={index}
                                >
                                    <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{title}</span>
                                    <span className="text-white pl-2 pr-5  font-bold text-xl py-2">{value} Visits</span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },

    };
    return (
        <div className=' h-[220px]'><Column {...config} /></div>
    );
};

export default ElderlyConditionsChart;