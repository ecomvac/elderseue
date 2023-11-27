import OverViewChart from '../OverViewChart/OverViewChart';
import { useContext, useState } from 'react';
import OverviewTrends from '../OverviewTrends';
// import { SidebarContext } from '../../../../../../../../Context/SidebarContext';
const AllOverview = ({trendsData}) => {
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
            <OverviewTrends chartInfo={chartInfo} overviewData={trendsData}></OverviewTrends>
            <div className='xl:w-2/3 w-full xl:mt-[-54px] md:mt-7 sm:mt-7'><OverViewChart data={data}></OverViewChart></div>
        </div>
    );
};

export default AllOverview;
