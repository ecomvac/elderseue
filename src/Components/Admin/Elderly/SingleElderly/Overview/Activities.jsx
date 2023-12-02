import { Icon } from "@iconify/react";
import React from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";

const Activities = () => {
  const data = [
    {
      id: 1,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      items: [],
      status: "normal",
    },
    {
      id: 2,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      items: [],
      status: "warning",
    },
    {
      id: 3,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      items: [
        {
          time: "09:45 AM",
          title: "Elderly enters the living room",
        },
        {
          time: "09:45 AM",
          title: "Elderly enters the living room",
        },
      ],
      status: "normal",
    },
  ];

  return (
    <SectionWrapper>
      <div className=" p-5">
        <div>
          <h2 className=" text-2xl font-bold text-dark-black">
            Last 5 Activities
          </h2>
        </div>

        <div className=" mt-[30px] flex items-start">
          <div>
            <div className=" flex items-center w-[60px] gap-1 justify-center flex-col">
              <div className=" w-[36px] h-[36px] mt-1 relative rounded-full flex items-center  justify-center bg-success">
                <Icon
                  icon="lets-icons:check-fill"
                  className=" text-[25px] text-white"
                />
              </div>
              <div className={` h-[40px] w-[2px] mb-1 rounded-full bg-[#E8E9EE]`} />
            </div>
            <div className=" flex items-center w-[60px] gap-1 justify-center flex-col">
              <div className=" w-[36px] h-[36px] relative rounded-full flex items-center  justify-center bg-[#FF974D]">
                <Icon
                  icon="lets-icons:check-fill"
                  className=" text-[25px] text-white"
                />
              </div>
              <div className={` h-[40px] w-[2px] mb-1 rounded-full bg-[#E8E9EE]`} />
            </div>
            <div className=" flex items-center w-[60px] gap-1 justify-center flex-col">
              <div className=" w-[36px] h-[36px] relative rounded-full flex items-center  justify-center bg-success">
                <Icon
                  icon="lets-icons:check-fill"
                  className=" text-[25px] text-white"
                />
              </div>
              <div className={` h-[168px] w-[2px] rounded-full relative bg-[#E8E9EE]`} >
              </div>
            </div>
          </div>

          <div className=" mt-[0px]">
            {data.map((activitie, index) => (
              <div
                key={index}
                className=" flex items-start flex-col gap-[33px]"
              >
                <div className=" min-h-[51px]">
                  <h3 className=" text-[13px] font-medium text-light-black">
                    {activitie?.time}
                  </h3>
                  <h2 className=" text-base font-medium text-text-primary">
                    {activitie.title}
                  </h2>
                </div>
                <div className="flex items-center flex-col gap-4 ml-[-7px]">
                  {activitie?.items?.map((item, index) => (
                    <div key={index} className=" mt-[-20px] relative">
                      <div className="w-[20px] h-[2px] absolute top-[18px] bg-[#E8E9EE] left-[-23px]"></div>
                      <div className=" min-h-[70px]">
                        <h3 className=" text-[13px] font-medium text-light-black">
                          {item?.time}
                        </h3>
                        <h2 className=" text-base font-medium text-text-primary">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className=" mb-5 relative">
              <div className="w-[20px] h-[2px] absolute top-[9px] bg-[#E8E9EE] left-[-30px]"></div>
              <button className=" text-sm font-bold text-primary flex items-center gap-1">
                <span className=" w-[19px] h-[19px] bg-primary rounded-full flex items-center justify-center text-white">
                  <Icon icon="ic:round-add" className=" text-white text-[16px]"/>
                </span>{" "}
                Show All
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Activities;
