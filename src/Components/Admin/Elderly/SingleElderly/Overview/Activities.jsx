import { Icon } from "@iconify/react";
import React from "react";

const Activities = () => {
  const data = [
    {
      id: 1,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      item: "",
      status: "normal",
    },
    {
      id: 2,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      item: "",
      status: "warning",
    },
    {
      id: 3,
      time: "09:45 AM",
      title: "Elderly enters the living room",
      item: [
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
    <div className="">
      <div>
        <h2 className=" text-2xl font-bold text-dark-black">
          Last 5 Activities
        </h2>
      </div>
      <div>
        {data.map((activitie, index) => (
          <div key={index} className=" flex items-center ">
            <div className=" w-[36px] h-[36px] relative rounded-full flex items-center mb-10 justify-center bg-success">
              <Icon
                icon="lets-icons:check-fill"
                className=" text-[25px] text-white"
              />
              {index !== data.length - 1 && (
                <div
                  className={` absolute h-[30px] w-1 ${" bg-[#384766]"} bottom-[-100%]`}
                />
              )}
            </div>
            <div>
                <h3 className=" text-[13px] font-medium text-light-black">{activitie?.time}</h3>
                <h2 className=" text-base font-medium text-text-primary">{activitie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
