"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";

const Classics = () => {
  const images = [
    {
      id: 1,
      src: "https://i.ebayimg.com/images/g/VRkAAOSwVbBg93nL/s-l400.jpg",
      alt: "air force",
    },
    {
      id: 2,
      src: "https://static.ftshp.digital/img/p/1/0/9/4/3/3/8/1094338.jpg",
      alt: "Dunk",
    },
    {
      id: 3,
      src: "https://authentic-shoes.com/wp-content/uploads/2024/02/Giay-Nike-Air-Force-1-Low-Just-Do-It-%E2%80%98Tie-Dye-Swoosh-FB8251-100-8-300x289.png",
      alt: "air force low",
    },
    {
      id: 4,
      src: "https://www.sneakerhype.eu/cdn/shop/products/nike-air-max-1-crepe-hemp-2022-sneakerhype-4.jpg?v=1731081305",
      alt: "air max one",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/7f/bd/8b/7fbd8bea32512276d5324a71354a51e6.jpg",
      alt: "air max 97",
    },
    {
      id: 6,
      src: "tennis.jpg",
      alt: "nike blazer",
    },
  ];

  return (
    <>
      <div className="flex itmes-center justify-center m-10 p-4 gap-6">
        <Swiper
          modules={[Mousewheel, FreeMode]}
          spaceBetween={30}
          slidesPerView={3}
          mousewheel={true}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.25,
            momentumVelocityRatio: 0.5,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative bg-black border rounded-lg overflow-hidden hover:translate-y-4 transition-all duaration-200 group h-96">
                <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 object-cover w-full h-full"
              />
           </div>
           <div className="absolute bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300 ">
<Link href="/airforce">
<button>Shop now</button>
</Link>
           </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*  
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/airforce">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
*/}
    </>
  );
  
};

export default Classics;