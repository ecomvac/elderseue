import { Column } from '@ant-design/plots';
import React from 'react'

const AlertsOverviewCharts = () => {
  const data = [
    {
      type: 'Critical',
      day: 'Sun',
      value: 20,
    },
    {
      type: 'Critical',
      year: 'Mon',
      value: 30,
    },
    {
      type: 'Critical',
      year: 'Tue',
      value: 40,
    },
    {
      type: 'Critical',
      year: 'Wed',
      value: 20,
    },
    {
      type: 'Critical',
      year: 'Thu',
      value: 30,
    },
    {
      type: 'Critical',
      year: 'Fri',
      value: 40,
    },
    {
      type: 'Critical',
      year: 'Sat',
      value: 50,
    },
    {
      type: 'Warning',
      day: 'Sun',
      value: 60,
    },
    {
      type: 'Warning',
      year: 'Mon',
      value: 40,
    },
    {
      type: 'Warning',
      year: 'Tue',
      value: 20,
    },
    {
      type: 'Warning',
      year: 'Wed',
      value: 60,
    },
    {
      type: 'Warning',
      year: 'Thu',
      value: 40,
    },
    {
      type: 'Warning',
      year: 'Fri',
      value: 20,
    },
    {
      type: 'Warning',
      year: 'Sat',
      value: 10,
    },
    {
      type: 'Problem',
      day: 'Sun',
      value: 20,
    },
    {
      type: 'Problem',
      year: 'Mon',
      value: 30,
    },
    {
      type: 'Problem',
      year: 'Tue',
      value: 40,
    },
    {
      type: 'Problem',
      year: 'Wed',
      value: 20,
    },
    {
      type: 'Problem',
      year: 'Thu',
      value: 30,
    },
    {
      type: 'Problem',
      year: 'Fri',
      value: 40,
    },
    {
      type: 'Problem',
      year: 'Sat',
      value: 40,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    legend: false,
    color: ['#F83333', '#F5A406', '#5C76FF'],
    isStack: true,
    minColumnWidth: 20,
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
      if (data?.type === 'Problem') {
        baseStyle.radius = [0, 0, 5, 5];
      } else if (data?.type === 'Critical') {
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

export default AlertsOverviewCharts