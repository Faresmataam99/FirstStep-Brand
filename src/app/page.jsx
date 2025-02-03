"use client";
import Link from "next/link";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full gap-10">
        {/* Hero Section */}
        <div className="flex items-center justify-start bg-[url(/360.jpg)] bg-cover p-2 w-full h-screen"></div>

        {/* Intro Section */}
        <div className="flex justify-center flex-col w-full">
          <div className="hover:translate-x-6 transition-all duration-200">
            <p className="text-4xl font-bold m-3 mb-4">
              Providing the ideal{" "}
              <span className="text-orange-500">lifestyle</span> for you
            </p>
          </div>
          <div className="bg-opacity-10 bg-black relative">
            <img
              className="w-full h-auto"
              src="https://1565619539.rsc.cdn77.org/temp/1718358019_23a07bcda501d75612f6186d0eb9d486.jpg"
              alt="Lifestyle"
            />
          </div>
          
          {/* Main Info */}
          <div className="flex items-center justify-center gap-4 flex-col mt-12 mb-12">
            <h1 className="text-6xl font-extrabold">
              LEGENDS NEVER <span className="text-orange-600">GET OLD</span>
            </h1>
            <p className="text-2xl">
              The stories are true—the icon gets its first release in a decade
            </p>
            <Link href="/newcollection">
              <button className="m-2 px-4 py-1.5 bg-black rounded-full text-white font-bold hover:bg-gray-500">
                Shop AJ11 Collection
              </button>
            </Link>
          </div>

          {/* Subtext */}
          <div className="flex flex-col text-center justify-center items-center mb-1.5 mt-8">
            <p className="text-3xl font-thin">
              Elevate your everyday look with our brands icons
            </p>
          </div>
          {/* Grid Section */}
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* First Grid */}
            <div className="relative bg-black border rounded-lg overflow-hidden hover:-translate-y-4 transition-all duration-200 group h-96">
              <img
                src="https://i.pinimg.com/736x/14/3c/b4/143cb472cb193aaa0c9c6531093a2ddb.jpg"
                alt="Nike"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/airforce">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Grid */}
            <div className="relative bg-black border rounded-lg overflow-hidden hover:-translate-y-4 transition-all duration-200 group h-96">
              <img
                src="https://i.pinimg.com/736x/fc/6f/ea/fc6fea12fff5261083ddf2928f139a5c.jpg"
                alt="New Balance"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
            {/* Third Grid */}
            <div className="relative bg-black border rounded-lg overflow-hidden hover:-translate-y-4 transition-all duration-200 group h-96">
              <img
                src="https://i.pinimg.com/736x/59/15/62/5915626e91c70f5a35a486679ea7f711.jpg"
                alt="Adidas"
                className="absolute inset-0 object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/superstar">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* cards sections */}
<section className="flex  mt-20 mb-5 gap-6 mx-5 ">
  <div className="flex  justify-center rounded-lg border bg-orange-200 max-h-full gap-20">
    <div className="flex flex-col gap-10 hover:shadow-lg transition-all duration-200 justify-between p-2">
    <p className="text-7xl font-semibold">Your style delivered <br />
    exclusively <br /> online</p>
    <span className="p-3 text-left text-lg font-light  ">www.brandzone.com</span>
    </div>
  </div>

  <div className="grid grid-row-2">
{/* second grid items */}
  <div className="flex items-center justify-between  rounded-lg border p-2 ">
    <div className="flex gap-3 justify-between">
      <img src="/giftbox.png" alt="" height={100} width={100} />
      <div className="flex-col flex gap-3">
<p className="text-2xl font-semibold">Welcome offer just for you </p>
<p>Enjoy your first discount on a your first purchase</p>
<Link href="/cart"><button className="bg-black w-fit text-white font-light px-3 py-1.5 rounded-full hover:bg-gray-700 transition-all duration-200">Get discount</button></Link>
</div>

    </div>
  </div>
  {/* third grid item */}
  <div className="flex items-center justify-center border rounded-lg gap-6 relative">
    <img src="https://i.pinimg.com/736x/e3/13/36/e313369191a3e26616e0bf5b8958c5fd.jpg" alt="" height={300} width={300} />
    <div className="flex flex-col gap-3 w-96">
    <p className="text-3xl ">Explore the new running collection</p>
    <button className="bg-black  w-fit text-white font-light px-3 py-1.5 rounded-full hover:bg-gray-700 transition-all duration-200">Shop now</button>
    </div>
  </div>
  </div>
  </section>
      </div>
    </>
  );
}
