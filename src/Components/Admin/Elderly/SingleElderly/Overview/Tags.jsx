import React, { useState } from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import CustomErrorToast from "../../../../../Shared/Tosat/CustomErrorToast";

const Tags = () => {
  const [tags, setTags] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      title: "High blood sugar",
      category: "elderly",
    },
    {
      id: 2,
      title: "low blood pressure",
      category: "elderly",
    },
    {
      id: 3,
      title: "UWB/BLE tracking systems",
      category: "elderly",
    },
    {
      id: 4,
      title: "Real-time location systems",
      category: "elderly",
    },
    {
      id: 5,
      title: "RFID reader",
      category: "elderly",
    },
  ]);

  const addTages = () => {
    if (!tags) {
      toast.custom((t) => (
        <CustomErrorToast t={t} text={"Please add a tags"} title={"Error"} />
      ));
    } else {
      setData((pre) => [...pre, { id: Math.random(), tag: tags }]);
      setTags("");
    }
  };

  const removeTags = (id) => {
    const finalTags = data.filter((item) => item.id !== id);
    setData(finalTags);
  };

  return (
    <SectionWrapper>
      <div className=" p-5">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-bold text-dark-black">Tags</h2>
          <div>
            <select
              name=""
              id=""
              className="py-[8px] px-3 outline-none border-none text-primary bg-primary/10 rounded-[10px]"
            >
              <option value="">Add as Elderly Tag</option>
              <option value="">Add ad System Tags</option>
            </select>
          </div>
        </div>

        <div className=" py-6">
          <form action="">
            <input
              className="py-[18px] text-sm px-4 text-text-primary placeholder:text-[#A3AED0] h-[40px]  rounded-[16px] w-full outline-none   border-[1px] focus:border-primary"
              type={"text"}
              placeholder={"Type And Press ‘Enter’ To Add "}
              id="otp"
            />
          </form>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-5">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#E6F1FE] rounded-full h-[37px] px-3"
              >
                <span className="text-[13px] font-bold text-primary">
                  {item.title}
                </span>
                <button onClick={() => removeTags(item.id)}>
                  <Icon icon="mi:close" className="text-[17px]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Tags;
