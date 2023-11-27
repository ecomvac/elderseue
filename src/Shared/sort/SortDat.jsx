import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SortDat = ({selected,setSelected,data,width,bg}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        style={{width:width,background:bg}}
        className={` bg-primary/10 w-[150px] text-primary font-medium cursor-pointer px-2 py-2 flex items-center rounded-[10px] justify-between ${
          !selected && " text-primary"
        } ${ bg? " bg-text-primary/10" : ""}`}
      >
        <div className="flex items-center gap-[1px]">
         <Icon icon="basil:calendar-outline" className='text-[20px]' />
            {selected
                ? selected?.length > 25
                    ? selected?.substring(0, 25) + "..."
                    : selected
                : data[0]}
        </div>
        <Icon icon="basil:caret-down-solid" className={`${open && "rotate-180"} text-[20px]`}/>
      </div>
            {
              open && <ul style={{width:width}} className=" absolute z-40 w-[150px] overflow-hidden top-[45px] bg-white shadow-md left-0 border-[1px] border-[#90969D] rounded-[10px]">
                    {
                        data.map((item,i)=>(
                            <li 
                            onClick={() => {
                                if (item) {
                                  setSelected(item);
                                  setOpen(false);
                                }
                              }}
                            className=" py-1 px-3 cursor-pointer hover:bg-gray-400 hover:text-white" key={i}>{item}</li>
                        ))
                    }
                </ul>
            }
    </div>
  );
};

export default SortDat;