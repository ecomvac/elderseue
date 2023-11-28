import OverViewChart from '../OverViewChart/OverViewChart';
import OverviewTrends from '../OverviewTrends';
const AllOverview = ({ trendsData,chartData}) => {
 
   
    return (
        <div className='xl:flex'>
            <div className='w-full xl:w-1/3'><OverviewTrends  overviewData={trendsData}></OverviewTrends></div>
            <div className='w-full xl:w-2/3 border-l mt-0 xl:-mt-[150px]'><OverViewChart data={chartData}></OverViewChart></div>
        </div>
    );
};

export default AllOverview;
