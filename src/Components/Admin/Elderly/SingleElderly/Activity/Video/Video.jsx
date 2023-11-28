import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { videoData } from '../../../../../../assets/singleElderlyData'
import VideoScreen from "./VideoScreens";
const Video = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleModalOpen = () => {
  //   setOpen(true);
  // };
  // const modalInfo = {
  //   open,
  //   setOpen,
  // };

  const [activeScreen, setActiveScreen] = useState(0);
  const handleSmallScreenClick = (screenIndex) => {
    setActiveScreen(screenIndex);
  };

  return (
    <div className="w-full h-full bg-white px-[22px] py-6  rounded-[10px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary ">
          Live Camera Feed
        </h1>
        <button
          // onClick={handleModalOpen}
          className="flex items-center bg-[#F4EBFF] text-[#9039FF] font-medium text-sm rounded-[10px] px-3 py-2 gap-[10px]"
        >
          <Icon icon="material-symbols:history" />
          <span>Recorded History</span>
        </button>
      </div>
      {/* <RecordedHistoryModal modalInfo={modalInfo}></RecordedHistoryModal> */}
      <div className="xl:flex md:flex items-top mt-5 gap-2 ">
        <div className="xl:block md:block sm:hidden max-h-[400px] overflow-hidden rounded-[10px] overflow-y-scroll customScrollbar">
          {videoData.map(
            (item, index) =>
              index !== activeScreen && (
                <div className="mb-2" key={index}>
                  <VideoScreen
                    videoUrl={item.rtspUrl}
                    runningStatus={item.running}
                    icon={item.icon}
                    room={item.room}
                    isActive={false}
                    onClickSmallScreen={() => handleSmallScreenClick(index)}
                  />
                </div>
              )
          )}
        </div>
        <VideoScreen
          videoUrl={videoData[activeScreen].rtspUrl}
          runningStatus={videoData[activeScreen].running}
          icon={videoData[activeScreen].icon}
          room={videoData[activeScreen].room}
          isActive={true}
          onClick={() => { }}
          onClickSmallScreen={() => { }}
        />
        <Swiper
          navigation={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={20}
          className="block md:hidden mt-3 mySwiper"
        >
          {videoData.map(
            (item, index) =>
              index !== activeScreen && (
                <SwiperSlide key={index}>
                  <VideoScreen
                    videoUrl={item.rtspUrl}
                    runningStatus={item.running}
                    icon={item.icon}
                    room={item.room}
                    isActive={false}
                    onClickSmallScreen={() => handleSmallScreenClick(index)}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );

};

export default Video;
