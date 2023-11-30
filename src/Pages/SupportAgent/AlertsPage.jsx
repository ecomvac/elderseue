import React from "react";
import BreadCrumb from "../../Shared/TopHeading/BreadCrumb";
import TodayAlerts from "../../Components/SupportAgent/Alerts/TodayAlerts";
import AllAlerts from "../../Components/SupportAgent/Alerts/AllAlerts";
import AlertsOverview from "../../Components/SupportAgent/Alerts/AlertsOverview";
import SupportAgentAlertsProgress from "../../Components/SupportAgent/Alerts/SupportAgentAlertsProgress";
import { alertsData } from "../../assets/admin/data";


const AlertsPage = () => {
  return (
    <>
      <BreadCrumb
        title={"Alerts"}
        links={[
          { title: "Home", url: "/support-agent/dashboard" },
          { title: "Alerts", url: "/support-agent/dashboard" },
        ]}
      />
      <div className=" lg:mt-[-30px] mb-[30px]">
        <div className="flex items-start gap-[30px] lg2:flex-row flex-col justify-between">
          <div className="lg2:w-[65%] w-full ">
            <TodayAlerts />
            <div className="bg-white w-full pt-[30px] rounded-[20px] mt-[30px]">
              <AllAlerts />
            </div>
          </div>
          <div className="lg2:w-[35%] w-full ">
            <div className=" bg-white py-[30px] rounded-[20px] px-[22px]">
                <AlertsOverview/>
            </div>
            <div className=" bg-white rounded-[20px] mt-[30px] ">
                <SupportAgentAlertsProgress data={alertsData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertsPage;
