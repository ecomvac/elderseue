import { Icon } from "@iconify/react";
import React from "react";

const DailyOverviewBar = () => {
  const NormalActivity1 = "7%";
  const NormalActivity2 = "33%";
  const Sedentary1 = "26%";
  const Sedentary2 = "26%";
  const WanderingDay = "3%";
  const WanderingNight = "5%";

  return (
    <div>
      <div className="flex items-center w-full gap-1">
        <div
          style={{ width: NormalActivity1 }}
          className=" h-[83px] rounded-sm bg-[#9A4BFF]"
        />
        <div
          style={{ width: Sedentary1 }}
          className=" h-[83px] rounded-sm bg-[#00D192]"
        />
        <div
          style={{ width: WanderingDay }}
          className=" h-[83px] rounded-sm bg-[#FF8A35]"
        />
        <div
          style={{ width: Sedentary2 }}
          className=" h-[83px] rounded-sm bg-[#00D192]"
        />
        <div
          style={{ width: WanderingNight }}
          className=" h-[83px] rounded-sm bg-[#888888]"
        />
        <div
          style={{ width: NormalActivity2 }}
          className=" h-[83px] rounded-sm bg-[#9A4BFF]"
        />
      </div>

      <div className=" mt-2">
        <div className=" bg-[#000000]/10 w-full h-[1px]">

        </div>
        <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1 mt-2 relative">
                <Icon icon="lucide:sun" className=" text-[#969BB3] text-[16px]"/>
                <h2 className=" text-[13px] font-medium text-[#49517A]">06:00</h2>
                <div className=" absolute top-[-9px] left-0 bg-[#000000]/10 w-[1px] h-[15px]"></div>
            </div>
            <div className=" flex items-center gap-1 mt-2 relative">
                <Icon icon="mdi:weather-night" className=" text-[#969BB3] text-[16px]"/>
                <h2 className=" text-[13px] font-medium text-[#49517A]">18:00</h2>
                <div className=" absolute top-[-9px] left-[50%] bg-[#000000]/10 w-[1px] h-[15px]"></div>
            </div>
            <div className=" flex items-center gap-1 mt-2 relative">
                <Icon icon="lucide:sun" className=" text-[#969BB3] text-[16px]"/>
                <h2 className=" text-[13px] font-medium text-[#49517A]">06:00</h2>
                <div className=" absolute top-[-9px] right-0 bg-[#000000]/10 w-[1px] h-[15px]"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOverviewBar;
