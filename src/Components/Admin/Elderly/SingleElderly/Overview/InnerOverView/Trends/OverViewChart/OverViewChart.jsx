import React from 'react';
import { Table, Progress, DatePicker, Space } from 'antd';
import { Icon } from '@iconify/react';
import { Area } from '@ant-design/plots';
const { RangePicker } = DatePicker;

const OverViewChart = ({ data }) => {
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
    const tableData = data?.table;
    const config = {
        data: tableData,
        xField: 'date',
        yField: 'value',
        smooth:true,
        xAxis: {
            range: [0, 1],
        },
        areaStyle: () => {
            return {
              fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
          },
    };
    
  
    return (
        <div>
            <div className='lg2:flex justify-between md:flex'>
                <div className='flex flex-wrap items-center mr-2'>
                    <h1 className='text-2xl mr-2.5 font-medium text-secondary'>{data?.title}</h1>
                    <div className={`rounded-xl px-1.5 py-1 flex items-center
                        ${(data?.category) === 'Critical' && 'bg-[#FEF2F2]'}
                        ${(data?.category) === 'Average' && 'bg-[#E6F9EE]'}
                        ${(data?.category) === 'Warning' && 'bg-[#FEF7EA]'}
                    `}>
                        <span className='mr-1'>
                            {
                                data?.category==='Average' ?<Icon className={`text-lg text-[#01BE4F]`} icon="ion:ellipse-sharp" />:<Icon className={`text-2xl
                            ${(data?.category) === 'Critical' && 'text-[#FF5959]'}
                            ${(data?.category) === 'Warning' && 'text-[#FF974D]'}
                        `} icon="octicon:triangle-down-24" />
                            }
                        </span>
                        <span className='text-secondary font-medium'>{data?.category}</span>
                    </div>
                </div>
                
                <div className='lg2:my-0 md:my-0 sm:my-5'><Space direction="horizontal">
                    <RangePicker format='MM-DD' />
                </Space></div>
            </div>
            <div>
                <Area {...config} />
            </div>
            <div className='flex items-center justify-between px-7 py-2 border rounded-lg my-7'>
                <div>
                    <p className='text-secondary text-sm font-medium'>Average</p><h1 className='text-2xl font-bold text-black'>{data?.average}</h1>
                </div>
                <div className='lg2:flex items-center md:flex'>
                    <div className='flex items-center lg2:mr-7 md:mr-7'>
                        <Progress className='mr-2.5' type="circle" percent={16} showInfo={false} size={40} strokeWidth={13} strokeColor={'#01BE4F'} />
                        <div>
                            <p className='font-medium text-secondary'>Average</p>
                            <p className='text-lg font-bold text-black'>16%</p>
                        </div>
                    </div>
                    <div className='flex items-center lg2:mr-7 md:mr-7 lg2:my-0 md:my-0 sm:my-2'>
                        <Progress className='mr-2.5' type="circle" percent={45} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF974D'} />
                        <div>
                            <p className='font-medium text-secondary'>Warning</p>
                            <p className='text-lg font-bold text-black'>45%</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Progress className='mr-2.5' type="circle" percent={39} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF5959'} />
                        <div>
                            <p className='font-medium text-secondary'>Critical</p>
                            <p className='text-lg font-bold text-black'>39%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border rounded-lg'><Table id="trends-table" columns={columns} dataSource={tableData} /></div>
        </div>
    );
};

export default OverViewChart;