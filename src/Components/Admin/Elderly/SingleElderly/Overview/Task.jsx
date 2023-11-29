import React, { useState } from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Taking Medicine Three Times",
      description: "",
      taskType: "Medication",
      TaskPriority: "Medium Priority",
      eventOccurrences: "3",
      Recurrence: "Today",
      message: [
        {
          time: "09:25 am",
          text: "The medicine is running out of mealtime, please take the medicine quickly",
          user: "You",
        },
        {
          time: "06:25 am",
          text: "The medicine is running out of mealtime, please take the medicine quickly",
          user: "Papon Rabish",
        },
      ],
    },
  ]);

  return (
    <SectionWrapper>
      <div className="p-5">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-bold text-dark-black">Tags</h2>
          <button className="py-[8px] px-3 text-[13px] font-medium flex items-center justify-center gap-1 h-[37px] outline-none border-none text-primary bg-primary/10 rounded-[10px]">
            <Icon icon="ic:round-add" className=" text-[18px]" /> Add Task
          </button>
        </div>

        <div className=" mt-7">
            {tasks.map((task,index)=>(
                <div key={index}>
                    <div className=" flex items-center gap-1 justify-between">
                        <h2 className={`py-1 px-2 rounded-full ${task.TaskPriority==="Low Priority" && " bg-[#8EBF00]/10 text-[#8EBF00]"} ${task.TaskPriority==="Medium Priority" && " bg-[#FF974D]/10 text-[#FF974D]"} ${task.TaskPriority==="High Priority" && " bg-[#FF5959]/10 text-[#FF5959]"}`}>{task.TaskPriority}</h2>
                        <div className="flex items-center gap-1 text-[13px] font-medium text-light-black">
                            <Icon icon="uiw:date" /> {task.Recurrence}
                        </div>
                    </div>
                    <div className=" mt-3">
                        <h2 className=" text-[18px] font-medium text-text-primary">{task.title}</h2>
                        <div className="flex items-center mt-1 ">
                            <div className=" w-[28px] h-[28px] border-[2px] z-30 border-white rounded-full flex items-center justify-center text-white bg-[#802DEA]">
                                <Icon icon="mingcute:check-fill" />
                            </div>
                            <div className=" w-[28px] ml-[-7px] h-[28px] z-20 border-[2px] border-white rounded-full flex items-center justify-center text-white bg-[#E7E8EA]">
                                <Icon icon="mingcute:check-fill" />
                            </div>
                            <div className=" w-[28px] h-[28px] ml-[-7px] z-10 border-[2px] border-white rounded-full flex items-center justify-center text-white bg-[#E7E8EA]">
                                <Icon icon="mingcute:check-fill" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Task;
