import React from 'react';
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb';
import SingleSupportAgent from '../../Components/Admin/SingleSupportAgent/SingleSupportAgent';

const SingleSupportAgentPage = () => {
    return (
        <div>
            <BreadCrumb title={"Support Agent"} links={[{ title: "Home", url: "/admin/dashboard" }, { title: "Support Agent", url: "/admin/dashboard/Support-Agents" }, { title: "Kari Daughetry #453453", url: "" }]} />
            <div className='grid grid-cols-1 lg:mt-[-30px]'>
                <SingleSupportAgent/>
            </div>
        </div>
    );
};

export default SingleSupportAgentPage;