"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";
import Image from "next/image";

export default function SwipeSlider({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  autoPlay = true,
  delay = 4000,
}) {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">
      <Image src={"/images/strReview.png"} alt={"alt"} height={40} width={40} />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={autoPlay ? { delay, disableOnInteraction: false } : false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : [<SwiperSlide key="single">{children}</SwiperSlide>]}
      </Swiper>

      {/* Global Nav Buttons (optional) */}
      <div className="flex gap-5 mt-4">
        <button
          onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
          className="arrow-btn-box flex justify-center items-center"
        >
          <IoIosArrowBack className="arow-icon" />
        </button>
        <button
          onClick={() => document.querySelector(".swiper").swiper.slideNext()}
          className="arrow-btn-box flex justify-center items-center"
        >
          <IoIosArrowForward className="arow-icon" />
        </button>
      </div>
    </div>
  );
}
