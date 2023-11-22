import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React from "react";
import CustomButton from "../button/CustomButton";

const CustomModal = ({
  modalOPen,
  setModalOpen,
  width,
  className,
  title,
  children,
  handleSubmit,
  buttonText,
}) => {
  return (
    <div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={width}
        className={` ${className}`}
      >
        <div className=" py-2">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[24px] font-[700] text-text-primary">
              {title}
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="w-full mt-[0px]">
            <div className="mt-[10px]">{children}</div>
            <div className="mt-[38px] flex items-center gap-5">
              <CustomButton className={" w-full"}>{buttonText}</CustomButton>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="font-[500] text-[14px] h-[40px] w-full hover:border-primary px-5 rounded-[10px] bg-transparent text-[#666D90] border border-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
