import React, { useState } from "react";
import SectionWrapper from "../../../../../Shared/SectionWrapper";
import { Icon } from "@iconify/react";
import CustomButton from "../../../../../Shared/button/CustomButton";
import toast from "react-hot-toast";
import CustomErrorToast from "../../../../../Shared/Tosat/CustomErrorToast";
import AddTask from "./AddTask";

const Task = () => {
  const [message, setMessage] = useState("");
  const [open,setOpen] = useState(false)
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
          text: "Please take the medicine before the time expires",
          user: "Papon Rabish",
        },
      ],
    },
  ]);

  const sentMessage = (index) => {
    if (!message) {
      toast.custom((t) => (
        <CustomErrorToast t={t} text={"Please add a message"} title={"Error"} />
      ));
    } else {
      const updateData = [...tasks];
      const newMessage = {
        time: "10:25 am",
        text: message,
        user: "You",
      };
      updateData[index].message.push(newMessage);
      setTasks(updateData);
    }
  };

  return (
    <>
      <SectionWrapper>
        <div className="p-5">
          <div className=" flex items-center justify-between">
            <h2 className=" text-2xl font-bold text-dark-black">Tags</h2>
            <button onClick={()=>setOpen(true)} className="py-[8px] px-3 text-[13px] font-medium flex items-center justify-center gap-1 h-[37px] outline-none border-none text-primary bg-primary/10 rounded-[10px]">
              <Icon icon="ic:round-add" className=" text-[18px]" /> Add Task
            </button>
          </div>

          <div className=" mt-7">
            {tasks.map((task, index) => (
              <div key={index}>
                <div className=" flex items-center gap-1 justify-between">
                  <h2
                    className={`py-1 px-2 rounded-full ${
                      task.TaskPriority === "Low Priority" &&
                      " bg-[#8EBF00]/10 text-[#8EBF00]"
                    } ${
                      task.TaskPriority === "Medium Priority" &&
                      " bg-[#FF974D]/10 text-[#FF974D]"
                    } ${
                      task.TaskPriority === "High Priority" &&
                      " bg-[#FF5959]/10 text-[#FF5959]"
                    }`}
                  >
                    {task.TaskPriority}
                  </h2>
                  <div className="flex items-center gap-1 text-[13px] font-medium text-light-black">
                    <Icon icon="uiw:date" /> {task.Recurrence}
                  </div>
                </div>
                <div className=" mt-3">
                  <h2 className=" text-[18px] font-medium text-text-primary">
                    {task.title}
                  </h2>
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

                <div className=" flex items-center justify-between py-4">
                  <div className=" flex items-center gap-3">
                    <div className=" flex items-center ">
                      <div className="w-[25px] h-[25px] overflow-hidden rounded-full">
                        <img
                          src="/images/user1.png"
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <div className=" ml-[-7px] w-[30px] font-semibold text-[10px] h-[30px] border-[2px] z-30 border-white rounded-full flex items-center justify-center text-white bg-[#802DEA]">
                        PR
                      </div>
                    </div>
                    <div className=" flex items-center gap-2 text-[#0070F0]">
                      <Icon
                        icon="eva:message-square-outline"
                        className=" text-[20px]"
                      />
                      <h3 className=" text-[13px] font-medium">
                        {task.message.length}
                      </h3>
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

                <div className=" w-full h-[1px] bg-[#E7E8EA]"></div>
                <div className=" flex flex-col gap-5 mt-5">
                  {task.message.map((mess, index) => (
                    <div className=" flex items-start gap-3">
                      <div>
                        {mess.user === "You" ? (
                          <>
                            <div className="w-[25px] h-[25px] overflow-hidden rounded-full">
                              <img
                                src="/images/user1.png"
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className=" w-[30px] font-semibold mt-[-4px] text-[10px] h-[30px] border-[2px] z-30 border-white rounded-full flex items-center justify-center text-white bg-[#802DEA]">
                              PR
                            </div>
                          </>
                        )}
                      </div>
                      <div className="">
                        <div className="flex items-center gap-2">
                          <h2 className=" text-[15px] font-medium text-text-primary">
                            {mess.user}
                          </h2>
                          <div className="w-[5px] h-[5px] rounded-full bg-[#969BB3]"></div>{" "}
                          <span className=" text-[13px] font-medium text-light-black">
                            {mess.time}
                          </span>
                        </div>
                        <p className=" text-sm font-normal text-[#666D90] mt-1">
                          {mess.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className=" flex items-center gap-4 mt-[18px]">
                  <input
                    className="py-[18px] text-sm px-4 text-text-primary placeholder:text-[#A3AED0] h-[39px]  rounded-[10px] w-full outline-none   border-[1px] focus:border-primary"
                    type={"text"}
                    placeholder={"Type message "}
                    id="otp"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <CustomButton
                    onClick={() => sentMessage(index)}
                    className={"px-5"}
                  >
                    Send
                  </CustomButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <AddTask modalOPen={open} setModalOpen={setOpen}/>
    </>
  );
};

export default Task;
