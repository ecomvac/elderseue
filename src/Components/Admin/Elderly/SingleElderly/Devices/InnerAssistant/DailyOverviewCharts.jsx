import { Icon } from "@iconify/react";
import { Progress } from "antd";
import React from "react";

const DailyOverviewCharts = () => {
  return (
    <div className="grid grid-cols-2 gap-y-6">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-primary ">
            <Icon
              className="absolute top-4 text-2xl"
              icon="solar:moon-sleep-bold"
            />
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={20}
            size={55}
            strokeWidth={13}
            strokeColor={"#9A4BFF"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Sleep Time
          </span>
          <span className="text-[#9A4BFF] text-[22px] font-semibold -mt-1">
            {25}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-[#88DB00] ">
            <Icon
              className="absolute top-4 text-2xl"
              icon="solar:ranking-bold"
            />
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={10}
            size={55}
            strokeWidth={13}
            strokeColor={"#88DB00"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Sleep Score
          </span>
          <span className="text-[#88DB00] text-[22px] font-semibold -mt-1">
            {10}%
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-[#FF5959] ">
            <Icon
              className="absolute top-4 text-2xl"
              icon="material-symbols:ecg-heart"
            />
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={20}
            size={55}
            strokeWidth={13}
            strokeColor={"#FF5959"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Avg. Heart Rate
          </span>
          <span className="text-[#FF5959] text-[22px] font-semibold -mt-1">
            {20}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex justify-center text-[#FFBB3E] ">
            <Icon
              className="absolute top-4 text-2xl"
              icon="healthicons:lungs"
            />
          </div>
          <Progress
            type="circle"
            showInfo={false}
            percent={30}
            size={55}
            strokeWidth={13}
            strokeColor={"#FFBB3E"}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#969BB3] text-base font-medium">
            Avg. Breathing Rate
          </span>
          <span className="text-[#FFBB3E] text-[22px] font-semibold -mt-1">
            {30}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyOverviewCharts;
