import { Area } from '@ant-design/plots';
import React from 'react';

const OutOfBed = ({ data }) => {
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        smooth: true,
        legend: false,
        color: '#00BE9C',
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#ffffff 0:#ffffff',
                        lineWidth: 1,
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },
            tickLine: {
                style: {
                    stroke: '#ffffff', // Set the tick line color to white
                },
            },
            line: {
                style: {
                    stroke: '#ffffff', // Set the axis line color to white
                },
            },
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#f7f7fa 0:#f7f7fa',
                        lineWidth: 1,
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },

        },
        areaStyle: () => ({
            fill: 'l(270) 1:#FFFFFF 0.2:#fff',
        }),
        tooltip: {
            customContent: (title, items) => {
                return (
                    <></>
                );
            },
        },
    };
    return (
        <div>
            <div className='h-[239px] mt-5'>
                <Area {...config} />
            </div>
        </div>
    );
};

export default OutOfBed;