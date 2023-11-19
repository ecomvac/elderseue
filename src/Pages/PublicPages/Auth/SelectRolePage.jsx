import React, { useState } from "react";
import selectRoleImg from "../../../assets/sellectRole.svg";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Radio } from "antd";

const SelectRolePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleRole = (e) => {
    console.log("radio checked", e);
    setValue(e);
  };

  const onSubmit = () => {
    if (value) {
      navigate("/login");
    } else {
      setError("Please Select your role!");
    }
  };

  const UserRole=[
    {
        title:"Supper Admin",
        icon: <Icon className="text-primary text-3xl font-bold mr-4" icon="mingcute:user-security-line"/>,
        roll:"super-admin"
    },
    {
        title:"Admin",
        icon:<Icon className="text-primary text-3xl font-bold mr-4" icon="mingcute:user-3-line" />,
        roll:"admin"
    },
    {
        title:"Support Agent",
        icon: <Icon className="text-primary text-3xl font-bold mr-4" icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />,
        roll:"support-agent"
    },
  ]

  return (
    <div className="md:flex w-full items-center justify-between ">
      <div className="flex items-center md:h-[100vh] md:w-[50%] w-full md:pt-10 pt-5 justify-center">
        <div className="lg:w-[469px] h-full px-5">
          <div className="md:mt-40 mt-20">
            <h1 className="font-bold text-[36px] text-secondary">Sign In</h1>
            <p className=" text-light-black text-[16px] font-[400] mt-2">
                Select Your Role And Enter Additional Information To Sign In To Your Account
            </p>
            <div>
              {error && (
                <h1 className="text-rose-600 font-bold mt-3">{error}</h1>
              )}
            </div>
            <Radio.Group className="my-11 w-full" value={value}>
              <div
                onClick={() => handleRole("supperAdmin")}
                className={`border cursor-pointer rounded-xl flex justify-between p-7 mb-6  ${
                  value === "supperAdmin" ? "bg-[#e6f1fe] border-primary" : ""
                }`}
              >
                <div className="flex items-center">
                  <Icon
                    className="text-primary text-3xl font-bold mr-4"
                    icon="mingcute:user-security-line"
                  />
                  <h1 class="text-secondary font-medium text-lg">
                    Supper Admin
                  </h1>
                </div>
                <div className="flex items-center">
                  <Radio value={"supperAdmin"}></Radio>
                </div>
              </div>
              <div
                onClick={() => handleRole("admin")}
                className={`border cursor-pointer rounded-xl flex justify-between p-7 my-6 ${
                  value === "admin" ? "bg-[#e6f1fe] border-primary" : ""
                }`}
              >
                <div className="flex items-center">
                  <Icon
                    className="text-primary text-3xl font-bold mr-4"
                    icon="mingcute:user-3-line"
                  />
                  <h1 class="text-secondary font-medium text-lg">Admin</h1>
                </div>

                <div className="flex items-center">
                  <Radio value={"admin"}></Radio>
                </div>
              </div>
              <div
                onClick={() => handleRole("supportAgent")}
                className={`border cursor-pointer rounded-xl flex justify-between p-7 mt-6 ${
                  value === "supportAgent" ? "bg-[#e6f1fe] border-primary" : ""
                }`}
              >
                <div className="flex items-center">
                  <Icon
                    className="text-primary text-3xl font-bold mr-4"
                    icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport"
                  />
                  <h1 class="text-secondary font-medium text-lg">
                    Support Agent
                  </h1>
                </div>

                <div className="flex items-center">
                  <Radio value={"supportAgent"}></Radio>
                </div>
              </div>
            </Radio.Group>
            <div className=" flex justify-between">
              <div className="flex items-center">
                <div className="bg-primary w-[30px] h-[13px] rounded-xl mr-2.5"></div>
                <div className="bg-gray-400 w-[13px] h-[13px] rounded-xl"></div>
              </div>
              <div className="">
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="text-white bg-primary rounded-xl px-3 py-2 text-sm font-medium flex items-center"
                >
                  Next
                  <Icon
                    className="ml-2.5 "
                    icon="streamline:interface-arrows-right-arrow-right-keyboard"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative md:h-[100vh] w-full md:w-[50%] md:flex items-center">
        <img
          className="mx-auto h-full w-full object-cover"
          src={"/images/login_image.png"}
          alt="logo"
        />
        <div className=" absolute top-[50%] left-[50%] flex items-center flex-col justify-center translate-x-[-50%] translate-y-[-50%]">
            <img src="/images/logo.png" alt="" className="w-[267px] h-[51px]" />
            <p className=" font-[500] text-[18px] text-[#fff] text-center pt-[15px] w-[500px]">Caring Connections, Empowering Lives: Nurturing Well-being Through Every Click.</p>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;
