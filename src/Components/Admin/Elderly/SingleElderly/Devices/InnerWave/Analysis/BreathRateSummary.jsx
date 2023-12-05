import { Column } from '@ant-design/plots';
import { Icon } from '@iconify/react';
import React from 'react';

const BreathRateSummary = ({data,activeTab}) => {
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        isRange: false,
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
        yAxis: {
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
        minColumnWidth: 14,
        maxColumnWidth: 7,
        columnStyle: { fill: '#FFBB3E', radius: [10, 10, 10, 10] },
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
        <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-1'>
            <Icon className='text-3xl text-[#FFBB3E]' icon="healthicons:lungs" />
                <p className='text-lg font-semibold text-text-primary'>Respiratory Rate Summery</p>
            </div>
            <div className='text-[15px] font-semibold text-text-primary'><span>Avg. {activeTab==='Weekly'?<span className='text-[#FFBB3E]'>14bpm</span>:<span className='text-[#FFBB3E]'>15bpm</span>}</span></div>
        </div>
        <div className='h-[266px]'>
            <Column {...config} />
        </div>
    </div>
    );
};

export default BreathRateSummary;