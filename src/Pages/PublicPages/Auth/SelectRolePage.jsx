import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CustomButton from "../../../Shared/button/CustomButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomToast from "../../../Shared/Tosat/CustomToast";
import CustomErrorToast from "../../../Shared/Tosat/CustomErrorToast";

const SelectRolePage = () => {
  const navigate = useNavigate();
  const [active,setActive] = useState("super-admin")
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



  const UserRole=[
    {
        title:"Supper Admin",
        icon: <Icon className="text-primary text-3xl font-bold" icon="mingcute:user-security-line"/>,
        roll:"super-admin"
    },
    {
        title:"Admin",
        icon:<Icon className="text-primary text-3xl font-bold" icon="mingcute:user-3-line" />,
        roll:"admin"
    },
    {
        title:"Support Agent",
        icon: <Icon className="text-primary text-3xl font-bold" icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />,
        roll:"support-agent"
    },
  ]

  const onSubmit = (data) => {

    console.log(data)

    if (data.email === "admin@gmail.com" || data.email === "support@gmail.com" || data.email === "super@gmail.com") {

      if (data.email === "admin@gmail.com") {
        navigate("/admin/dashboard")
      }
      if (data.email === "support@gmail.com") {
        navigate("/support-agent/dashboard")
      }
      if (data.email === "super@gmail.com") {
        navigate("/super-admin/dashboard")

      }
      reset();
      toast.custom((t) => <CustomToast t={t} text={"Admin successfully logged into the admin dashboard."} />)
    } else {
      toast.custom((t) => <CustomErrorToast t={t} text={"There are items that require your attention"} title={"Error"} />)

    }
  };

  return (
    <div className="md:flex w-full items-center justify-between ">
      <div className="flex items-center md:h-[100vh] md:w-[50%] w-full md:pt-10 pt-5 justify-center">
        <div className="lg:w-[470px] h-full px-5">
          <div className="md:mt-40 mt-20">
            <h1 className="font-bold text-[36px] text-secondary">Sign In</h1>
            <p className=" text-light-black text-[16px] font-[400] mt-2">
                Select Your Role And Enter Additional Information To Sign In To Your Account
            </p>

            <div className="py-[35px]">
                <div className=" grid grid-cols-3 items-center gap-5">
                    {UserRole?.map((role)=>(
                      <div key={role.roll} onClick={()=>setActive(role.roll)} className={` gap-[12px] cursor-pointer hover:border-[3px] hover:border-primary rounded-[16px] flex items-center justify-center flex-col py-6 px-[10px] ${role.roll===active ? " border-[3px] shadow-shadowOne border-primary" : "border border-primary/25"}`}>
                          <div className=" w-[53px] h-[53px] bg-[#F9F5FF] rounded-full flex items-center justify-center">
                              {role?.icon}
                          </div>
                          <h4 className=" text-black font-[500] text-[14px]">{role.title}</h4>
                      </div>
                    ))}
                </div>  
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
                  <div className="flex flex-col items-start ">
                    <label htmlFor="otp" className="mb-1 font-semibold text-[#0D1A29]">
                      Email
                    </label>
                    <input
                      className="py-3 px-2 text-gray-500 rounded-[10px] w-full  border-[1px] focus:outline-primary"
                      type="email"
                      placeholder={"Enter Your Email"}
                      id="otp"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter a valid e-mail address",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="flex flex-col items-start mt-5 mb-2">
                    <label htmlFor="otp" className="mb-1 font-semibold">
                      <p>Password</p>
                    </label>
                    <input
                      className="py-3 px-2 text-gray-500 rounded-[10px] w-full  border-[1px] focus:outline-primary"
                      type={show ? "text" : "password"}
                      placeholder={"Enter Your Password"}
                      id="otp"
                      {...register}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                  </FormGroup> */}
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="font-bold  py-3 rounded-[10px] bg-primary text-white w-full"
                    >
                      Login
                    </button>
                  </div>
                </form>

            <div className=" flex justify-between w-full">
                  <CustomButton style={{width:"100%",fontSize:"14px",fontWeight:"7000",height:"50px"}} title={"sign up"}/>
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
