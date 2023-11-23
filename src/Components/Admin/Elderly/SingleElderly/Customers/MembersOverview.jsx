import React from 'react';
import SectionWrapper from '../../../../../Shared/SectionWrapper';
import { Pie, measureTextWidth } from '@ant-design/plots';

const MembersOverview = () => {
    function renderStatistic(containerWidth, text, fontSize, fontWeight) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, fontSize);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

        let scale = 1;

        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }

        const textStyleStr = `width:${containerWidth}px;`;
        return `<div style="${textStyleStr};font-size:${fontSize}px; font-weight:${fontWeight}; line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }

    const data = [
        {
            type: 'Male',
            value:6,
        },
        {
            type: 'Female',
            value:4,
        },

    ]
    const config = {
        appendPadding: 100,
        data,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        startAngle: (-5 / 5) * Math.PI,
        endAngle: (0 / 5) * Math.PI,
        innerRadius: 0.60,
        color: ['#ffffff', '#d3b0ff'],
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                textAlign: 'center',
                fontSize: 0
            },
            autoRotate: true,
            content: '{value}',
        },
        statistic: {
            title: {
                offsetY: 65,
                customHtml: (container, view, datum, data) => {
                    const { width, height } = container.getBoundingClientRect();
                    const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    const text = datum ? ` ${datum.value}` : ` ${data.reduce((r, d) => r + d.value, 0)}`;
                    return renderStatistic(d, text, 28, 700);
                },
            },
            content: {
                offsetY: 70,
                customHtml: (container, view, datum,) => {
                    const { width } = container.getBoundingClientRect();
                    const text = datum ? datum.type : 'Total Member';
                    return renderStatistic(width, text, 12, 500);
                },
            },
        },
        interactions: [
        ],
    };
    return (
        <>
            <SectionWrapper>
                <div className='bg-primary rounded-[20px]'>
                    <Pie {...config} />
                </div>

            </SectionWrapper>

        </>
    );
};

export default MembersOverview;