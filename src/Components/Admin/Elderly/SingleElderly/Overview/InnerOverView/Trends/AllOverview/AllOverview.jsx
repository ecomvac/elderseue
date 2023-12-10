
import { useState } from 'react';
import OverViewChart from '../OverViewChart/OverViewChart';
import OverviewTrends from '../OverviewTrends';
const AllOverview = ({ trendsData,chartData}) => {
    const [handleTrendClick,setHandleTrendClick]=useState(false)
    
    return (
        <div className='xl:flex  rounded-b-[30px]'>
            <div className='w-full xl:w-1/3 '><OverviewTrends  setHandleTrendClick={setHandleTrendClick} overviewData={trendsData}></OverviewTrends></div>
            <div className='w-full xl:w-2/3  border-l mt-0 xl:-mt-[150px] h-[90vh] overflow-y-auto'><OverViewChart handleTrendClick={handleTrendClick}   data={chartData}></OverViewChart></div>
        </div>
    );
};

export default AllOverview;
