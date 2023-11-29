import React, { useState } from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      time: "09:25 am",
      text: "Please manage IoT devices and ensure efficient home security system operation. Familiarize yourself, troubleshoot, collaborate, and report",
      user: "You",
    },
  ]);

  return (
    <SectionWrapper>
      <div className="p-5">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-bold text-dark-black">Notes</h2>
          <button className="py-[8px] px-3 text-[13px] font-medium flex items-center justify-center gap-1 h-[37px] outline-none border-none text-primary bg-primary/10 rounded-[10px]">
            <Icon icon="ic:round-add" className=" text-[18px]" /> Add Note
          </button>
        </div>

        <div className="mt-7">
          {notes.map((note, index) => (
            <div key={index}>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
                    <img
                      src="/images/user1.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="">
                    <span className=" text-[13px] font-medium text-light-black">
                      {note.time}
                    </span>
                    <h2 className=" text-[15px] mt-[-3px] font-medium text-text-primary">
                      {note.user}
                    </h2>
                  </div>
                </div>
                <div className=" flex items-center gap-2">
                  <button className=" text-[20px] text-primary">
                    <Icon icon="eva:edit-2-outline" />
                  </button>
                  <button className=" text-[20px] text-danger">
                    <Icon icon="eva:trash-2-outline" />
                  </button>
                </div>
              </div>
              <p className=" text-sm font-normal text-[#666D90] mt-1">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Notes;
