import React from "react";

const AdminFiled = ({data}) => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  console.log("Color:", stringToColor(data?.firstName));

  return (
    <div className='flex items-center gap-2.5 w-full'>
      <div style={{background:stringToColor(data?.firstName),backgroundOpacity: "0.05" }}  className={`w-[40px] h-[40px] rounded-[11px] flex items-center justify-center bg-opacity-30`}>
            <p  className=" text-[19px] font-[400] AkayaTelivigala-Regular">{data?.firstName?.slice(0,1)}{data?.lastName?.slice(0,1)}</p>
      </div>
      <div>
        <h3 className="text-[16px] text-text-primary font-[500]">
          {data?.firstName + " " + data?.lastName}
        </h3>
        <p className=" text-[13px] font-[400] text-[#A3AED0]">{data.email}</p>
      </div>
    </div>
  );
};

export default AdminFiled;
