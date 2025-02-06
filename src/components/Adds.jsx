"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules"; // ✅ Added Navigation
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; 
import "swiper/css/autoplay"; 
import Link from "next/link";

export const Adds = () => {
  return (
    <div className="flex items-center flex-row bg-gray-300 justify-center p-4">
      <Swiper
        modules={[FreeMode, Navigation, Autoplay]} 
        slidesPerView={1}
        autoplay={{
          delay: 3000, 
        }}
        navigation={true} 
        loop={true} 
        className="w-full max-w-3xl"
      >
        {/* First Slide */}
        <SwiperSlide>
          <Link href={"/login"}>
            <h1 className="hover:underline text-sm text-center font-semibold">
              Members: get free shipping on orders more than 15000 DZD
            </h1>
          </Link>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <Link href={"/register"}>
            <h1 className="hover:underline text-sm text-center font-semibold">
              Get a BrandZone Gift Card
            </h1>
          </Link>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <Link href={"/findastore"}>
            <h1 className="hover:underline text-center text-sm font-semibold">
              Look for store pickup at checkout
            </h1>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Adds;