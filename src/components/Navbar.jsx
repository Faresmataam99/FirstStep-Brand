"use client";
import Link from "next/link";
import { useEffect,useContext, useState } from "react";
import { color, motion } from "framer-motion";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';

import {Swiper,SwiperSlide} from "swiper/react";
import {Parallax,Pagination,Navigation} from "swiper/modules"


export default function AnimatedPage() {

  const [isActive, setIsActive] = useState(false);
  const [Favourites,setFavourites]=useState('');
  const [Cart,setCart]=useState('')

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (

    <div className="flex flex-col bg-gray-200 text-sm font-bold relative z-10 border">
      {isActive && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsActive(false)}
        />
      )}
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-2">
        <Link href="/brands">
      </Link>
        <ul className="flex flex-row gap-6">
          <Link href="/findastore">
            <li>Find a store</li>
          </Link>
          <Link href="/help">
            <li>Help</li>
          </Link>
          <Link href="/register">
            <li>Join us</li>
          </Link>
          <Link href="/login">
            <li>Sign in</li>
          </Link>
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between bg-white p-4 ">
        <div className="flex items-center justify-center gap-3">
        <Link href="/"><img src="/blackbag.png" alt="" height={50} width={50} />
      </Link>
<div className="flex flex-col">
<p className="text-xl font-semibold tracking-widest">Brand <span className="text-orange-600">Zone</span></p>
<p className=" font-light">Home of the athletic lifestyle</p>
</div>
        </div>
        <ul className="flex flex-row list-none font-semibold gap-8 text-lg">
          <Link href="/new">
            <li className="hover:underline hover:underline-offset-1">New</li>
          </Link>
          <Link href="/men">
            <li className="hover:underline hover:underline-offset-1">Man</li>
          </Link>
          <Link href="/kids">
            <li className="hover:underline hover:underline-offset-1">Kids</li>
          </Link>
          <Link href="/brands">
            <li className="hover:underline hover:underline-offset-1">Brands</li>
          </Link>
          <Link href="/sales">
            <li className="hover:underline hover:underline-offset-1">Sales</li>
          </Link>
          <Link href="/woman">
            <li className="hover:underline hover:underline-offset-1">Women</li>
          </Link>
        </ul>

        {/* Search Bar */}
        <div className="relative flex items-center gap-24">
         
          <motion.div
            className="flex items-center bg-gray-200 hover:bg-gray-100 p-1.5 rounded-full"
            onClick={() => setIsActive(true)}
          >
            <motion.input
              className="p-2 border-none rounded-full bg-gray-100 hover:bg-gray-300 focus:outline-none transition-all duration-300"
              placeholder="Search items"
              initial={{ width: "200px" }}
              animate={isActive ? { width: "600px" } : { width: "200px" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <div className="hover:bg-gray-200 transition-all duration-200 hover:rounded-full p-2">
<Link href="/favourite"><img src="/heart.png" alt="favourite" height={20} width={20}/></Link>
          </div>
          <div className="hover:bg-gray-200 transition-all duration-200 hover:rounded-full p-2">
<Link href="/cart"><img src="/bag.png"  alt="bag" height={20} width={20} /></Link>
          </div>
          </div>
      </div>

    
      {/* Side Panel for Suggestions */}
      <motion.div
        className="fixed top-0 right-0 h-full bg-white shadow-lg z-20"
        initial={{ x: "100%" }}
        animate={isActive ? { x: "0%" } : { x: "100%" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center flex-col gap-4 p-6 ">
          <h1 className="text-xl text-gray-700">Most searched items ....</h1>
          <Link href="/airmax90">
            <span className="bg-gray-400 text-lg rounded-full px-3 py-1.5 hover:bg-gray-200 transition-all duration-200">
              Adidas samba
            </span>
          </Link>
          <Link href="/airforceone">
            <span className="bg-gray-400 text-lg rounded-full px-3 py-1.5 hover:bg-gray-200 transition-all duration-200">
              Air force 1
            </span>
          </Link>
          <Link href="/dunk">
            <span className="bg-gray-400 px-3 text-lg rounded-full py-1.5 hover:bg-gray-200 transition-all duration-200">
              Dunk
            </span>
          </Link>
          <Link href="/jordanone">
            <span className="bg-gray-400 text-lg rounded-full px-3 py-1.5 hover:bg-gray-200 transition-all duration-200">
              stan smith
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
