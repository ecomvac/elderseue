import OverViewChart from '../OverViewChart/OverViewChart';
import { useContext, useState } from 'react';
import OverviewTrends from '../OverviewTrends';
// import { SidebarContext } from '../../../../../../../../Context/SidebarContext';
const AllOverview = ({ trendsData }) => {
    const [data, setData] = useState(trendsData[0])
    // const {setOverViewActive} = useContext(SidebarContext)
    const handleTrend = (e) => {
        setData(e)
        // setOverViewActive(e.title)
    }
    const chartInfo = {
        handleTrend,
        data
    }
    return (
        <div className='xl:flex'>
            <div className='w-full xl:w-1/3'><OverviewTrends chartInfo={chartInfo} overviewData={trendsData}></OverviewTrends></div>
            <div className='w-full xl:w-2/3 border-l  -mt-[150px]'><OverViewChart data={data}></OverViewChart></div>
        </div>
    );
};

export default AllOverview;
