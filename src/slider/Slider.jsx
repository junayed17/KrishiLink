import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.css";

import { Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="mySwiper max-w-[1600px] mx-auto"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_1.jpg"
              alt="Slide 1"
              className="w-full object-cover"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  sliderFont text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] "
              data-aos="fade-up"
            >
              “Bridging Farmers, Traders & Consumers — Growing Together with
              KrishiLink.”
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_2.jpg"
              alt="Slide 2"
              className="w-full object-cover"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  sliderFont text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] "
              data-aos="fade-up"
            >
              “From Fields to Future — KrishiLink connects every hand that feeds
              the nation.”
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_3.jpg"
              alt="Slide 3"
              className="w-full object-cover"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  sliderFont text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] "
              data-aos="fade-up"
            >
              “Not just a marketplace — a social agro network for growth and
              collaboration.”
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_4.jpg"
              alt="Slide 4"
              className="w-full  object-cover"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  sliderFont text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] "
              data-aos="fade-up"
            >
              “Empowering Farmers, Uniting Communities — The Green Connection
              Begins Here.”
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
