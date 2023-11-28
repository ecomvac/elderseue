import React from 'react';
import { Table, Progress, DatePicker, Space } from 'antd';
import { Icon } from '@iconify/react';
import { Area, G2 } from '@ant-design/plots';
import { configuration } from '../../../../../../../../Shared/areaChartThemeConfiguration';
const { RangePicker } = DatePicker;

const OverViewChart = ({ data }) => {

    const { registerTheme } = G2;
    registerTheme('custom-theme', configuration)
    const config = {
        data: data.table, 
        xField: 'date',
        yField: 'value',
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
        areaStyle: () => ({
          fill: 'l(270) 1:#9039FF 0.2:#fff',
        }),
        tooltip: {
            customContent: (title, items) => {
                return (
                    <div>
                        {items?.map((item, index) => {

                            const { value,title } = item;
                            return (
                                <span
                                    key={index}
                                    className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
                                    data-index={index}
                                >
                                    <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{title}</span>
                                    <span className="text-white pl-2   font-bold text-xl py-2">{value}</span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },
        theme:'custom-theme'
      };

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date'
        },
        {
            title: 'Value',
            dataIndex: 'value'
        }
    ]
    // const tableData = data?.table;
    // const config = {
    //     data: tableData,
    //     xField: 'date',
    //     yField: 'value',
    //     smooth: true,
    //     xAxis: {
    //         range: [0, 1],
    //     },
    //     color: 'indigo',
    //     areaStyle: () => {
    //         return {
    //             fill: 'l(270) 0:#ffffff 0.5:#8f39ff67 1:#9039FF',
    //         };
    //     },
    //     tooltip: {
    //         customContent: (title, items) => {
    //             return (
    //                 <div>
    //                     {items?.map((item, index) => {

    //                         const { value,title } = item;
    //                         return (
    //                             <span
    //                                 key={index}
    //                                 className="flex flex-col  bg-text-primary rounded-[10px] mx-0"
    //                                 data-index={index}
    //                             >
    //                                 <span className='text-white pl-2 pr-6 bg-white/10 w-full text-[13px] font-medium py-2'>{title}</span>
    //                                 <span className="text-white pl-2   font-bold text-xl py-2">{value}</span>
    //                             </span>
    //                         );
    //                     })}

    //                 </div>
    //             );
    //         },
    //     }
    // };

    return (
        <div>
            {/* --------------title--------------------- */}
            <div className='lg2:flex justify-between md:flex py-6 px-8 border-b'>
                <div className='flex flex-wrap items-center mr-2'>
                    <h1 className='text-[22px] mr-2.5 font-bold text-text-primary'>{data?.title}</h1>
                    <div className={`rounded-xl px-1.5  flex items-center 
                        ${(data?.category) === 'Critical' && 'bg-[#FF5959] '}
                        ${(data?.category) === 'Average' && 'bg-[#01BE4F]'}
                        ${(data?.category) === 'Warning' && 'bg-[#EF9D00]'}
                    `}>
                        <span className='mr-1 text-white'>
                            {
                                data?.category === 'Average' ? <Icon className={`my-2`} icon="ion:ellipse-sharp" /> : <Icon className={`text-3xl
                            
                        `} icon="octicon:triangle-down-24" />
                            }
                        </span>
                        <span className='text-white font-medium'>{data?.category}</span>
                    </div>
                </div>

                <div id='overView' className='lg2:my-0 md:my-0 sm:my-5 '>
                    <Space direction="horizontal">
                        <RangePicker format='MM-DD' />
                    </Space>
                </div>
            </div>
            {/* -------------------chart-------------------- */}
            <div className='px-6'>
                <Area {...config} />
            </div>
            {/* ----------------average box----------------- */}
            <div className='flex items-center justify-between px-7 py-2 border-b border-t  my-7'>
                <div>
                    <h1 className='text-2xl font-bold text-text-primary'>{data?.average}</h1>
                    <p className='text-text-secondary text-base font-medium'>Average {data?.title}</p>

                </div>
                <div className='lg2:flex items-center md:flex'>
                    {/* ----------average-------------- */}
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-6 justify-center bg-green-200 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-green-600'></div>
                        </div>
                        <div className='flex items-center lg2:mr-7 md:mr-7'>
                            <div>
                                <p className='  text-text-secondary text-base font-medium'>Average</p>
                                <p className='text-2xl font-bold text-text-primary'>17%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={16} showInfo={false} size={40} strokeWidth={13} strokeColor={'#01BE4F'} />

                        </div>
                    </div>
                    {/* -----------warning----------- */}
                    <div className='flex items-center gap-3 '>
                        <div className='w-3 h-6 justify-center bg-[#FF974D]/30 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-[#FF974D]'></div>
                        </div>
                        <div className='flex items-center lg2:mr-7 md:mr-7 lg2:my-0 md:my-0 sm:my-2'>
                            <div>
                                <p className=' text-text-secondary text-base font-medium'>Warning</p>
                                <p className='text-2xl font-bold text-text-primary'>35%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={45} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF974D'} />

                        </div>
                    </div>
                    {/* "------------critical-------------" */}
                    <div className='flex items-center gap-3 '>
                        <div className='w-3 h-6 justify-center bg-[#FF5959]/30 rounded-xl flex items-center'>
                            <div className='w-1.5 h-4 rounded-2xl bg-[#FF5959]'></div>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <p className='  text-text-secondary text-base font-medium'>Critical</p>
                                <p className='text-2xl font-bold text-text-primary'>17%</p>
                            </div>
                            <Progress className='mr-2.5' type="circle" percent={39} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF5959'} />

                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------table------------------- */}
            <div className='border mb-6  mx-6'><Table id="trends-table" columns={columns} dataSource={data.table}/></div>
        </div>
    );
};

export default OverViewChart;