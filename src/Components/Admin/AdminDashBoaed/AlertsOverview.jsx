import React, { useState } from "react";
import SortDat from "../../../Shared/sort/SortDat";
import AlertsOverviewCharts from "./AlertsOverviewCharts";

const AlertsOverview = () => {
    const [selected,setSelected,] = useState()
    const data = ["Last Week","last year"]
  return (
    <div>
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl font-bold text-text-primary">
          Top Support Agents
        </h2>
        <SortDat selected={selected}setSelected={setSelected} data={data}/>
      </div>
      <div className=" flex items-start justify-between mt-5">
            <div className="w-[40%]">
                <div>
                    <h3 className=" text-[13px] font-medium text-text-secondary">Total Alert</h3>
                    <h2 className=" text-[22px] font-bold text-text-primary">10,563</h2>
                    
                </div>
            </div>
            <div className="w-[60%]">
                <AlertsOverviewCharts/>
            </div>
      </div>
    </div>
  );
};

export default AlertsOverview;
