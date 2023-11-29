import React, { useState } from 'react';
import ReportPage from './ReportPage';
import { Icon } from '@iconify/react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { weeklyTrends, monthlyTrends } from '../../../../../assets/singleElderlyData'

const Report = () => {
    const [selectedTime, setSelectedTime] = useState('Monthly');
    const [data, setData] = useState(monthlyTrends);
    const handleTime = (e) => {
        setSelectedTime(e.target.value);
        if (e.target.value === 'Monthly') {
            setData(monthlyTrends)
            setSelectedTime('Monthly')

        } else {
            setData(weeklyTrends)
            setSelectedTime('Weekly')
        }
    }

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = document.querySelector("#pdf");
        const canvas = await html2canvas(data);
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save("report.pdf");
    };

    return (
        <div className='bg-white rounded-[20px] mt-[30px] mb-12 px-[22px] py-6'>
            <div className='flex items-center justify-between mb-9 flex-wrap gap-4'>
                <h1 className='font-bold text-text-primary text-2xl'>Elderly Report</h1>
                <div className='flex flex-wrap gap-5 items-center text-[#5D6670]'>
                    <div className='py-2.5 px-2.5  rounded-[10px] text-primary bg-primary/10 text-sm flex items-center focused:border-primary '>
                        <select className='w-[96px] outline-none cursor-pointer bg-primary/5' onChange={handleTime} value={selectedTime}>
                            <option defaultChecked value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>
                    <button onClick={createPDF} className='bg-primary rounded-[10px] flex items-center py-2.5 px-2'>
                        <p className='mr-3 font-medium text-sm text-white/90'>PDF</p>
                        <Icon className='text-white text-lg' icon="basil:download-solid" />
                    </button>
                </div>
            </div>
            <div className=''>
            <ReportPage data={data} id={"pdf"} selectedTime={selectedTime}></ReportPage>
            </div>
        </div>
    );
};

export default Report;