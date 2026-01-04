import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.css";

import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export default function App() {
  return (
    <section className="h-[70vh]">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="mySwiper max-w-[1600px] mx-auto mb-6 h-full"
      >
        <SwiperSlide className="h-full">
          <div className="relative h-full text-center">
            <img
              // src="https://themewagon.github.io/AgriCulture/assets/img/hero_1.jpg"
              src="https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg?s=612x612&w=0&k=20&c=h27yHr07QNSghYS20iwYBCGjZIa2HlXqrZDkM0ZsYEw="
              alt="Slide 1"
              className="w-full object-cover h-full"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  "
              // data-aos="fade-up"
            >
              <h1 className="sliderFont text-[20px] sm:text-2xl md:text-4xl  lg:text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] ">
                “Connecting Farmers, Traders & Consumers.”
              </h1>
              <Link
                to="/AllCrops"
                className="inline-flex items-center justify-center gap-2  headingFont px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all z-20 text-center mt-2 shadow"
              >
                Explore posts
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="relative h-full text-center">
            <img
              // src="https://themewagon.github.io/AgriCulture/assets/img/hero_2.jpg"
              src="https://img.freepik.com/free-photo/composition-fresh-vegetables-blurred-vegetable-garden-background_169016-40138.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Slide 2"
              className="w-full object-cover h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className="sliderFont text-[20px] sm:text-2xl md:text-4xl  lg:text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                “From Fields to Future — Feeding the Nation Together.”
              </h1>
              <Link
                to="/AllCrops"
                className="inline-flex items-center justify-center gap-2  headingFont px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all z-20 text-center mt-2 shadow"
              >
                Explore posts
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative h-full text-center">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_3.jpg"
              alt="Slide 3"
              className="w-full object-cover h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className="sliderFont text-[20px] sm:text-2xl md:text-4xl  lg:text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                “Beyond Marketplace. Built for Agro Growth.”
              </h1>
              <Link
                to="/AllCrops"
                className="inline-flex items-center justify-center gap-2  headingFont px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all z-20 text-center mt-2 shadow"
              >
                Explore posts
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative h-full text-center">
            <img
              src="https://themewagon.github.io/AgriCulture/assets/img/hero_4.jpg"
              alt="Slide 4"
              className="w-full  object-cover h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className="sliderFont text-[20px] sm:text-2xl md:text-4xl  lg:text-5xl text-[#fff200] drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                “Empowering Farmers & Communities — The Green Connection.”
              </h1>
              <Link
                to="/AllCrops"
                className="inline-flex items-center justify-center gap-2  headingFont px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all z-20 text-center mt-2 shadow"
              >
                Explore posts
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
