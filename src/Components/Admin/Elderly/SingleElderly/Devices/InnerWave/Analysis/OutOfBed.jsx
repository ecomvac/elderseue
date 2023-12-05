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
        <div className='p-5'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-1'>
                    {/* <Icon className='text-3xl text-[#00BE9C]' icon="material-symbols:ecg-heart-sharp" /> */}
                    <img src={"/images/wakeUpIcon.svg"} alt="" />
                    <p className='text-lg font-semibold text-text-primary'>Out Of Bed</p>
                </div>
                <div className='text-[15px] font-semibold text-text-primary'><span>Avg. <span className='text-[#00BE9C]'>1x</span></span></div>
            </div>
            <div className='h-[239px] mt-5'>
                <Area {...config} />
            </div>
        </div>
    );
};

export default OutOfBed;