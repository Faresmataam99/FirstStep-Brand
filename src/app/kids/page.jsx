"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"


export default ()=>{
    const [kidscloths,setkidscloths]=useState([])
    const [kidsShoes,setkidsShoes]=useState([])
    const [kidsAccessories,setkidsAccessories]=useState([])
    

    return (
        <>
        <div className="flex  flex-col  max-w-screen-xl m-auto ">
            <div className="flex justify-around p-5 gap-4 w-full ">
<h1 className="font-semibold text-2xl">Kids</h1>
<div className="flex items-center">
    <ul className="list-none gap-4 flex items-center ">
        <li className="hover:underline text-lg">Shop by age</li>
        <li className="hover:underline text-lg">Shoes</li>
        <li className="hover:underline text-lg">Cloths</li>
        <li className="hover:underline text-lg">Accessories</li>
        <li className="hover:underline text-lg">Sale</li>
    </ul>
</div>
            </div>
            <div className=" flex items-center justify-center flex-col p-2">
                <img src="amazed.jpg" alt="" className=" w-full"/> 
<div className="flex items-center flex-col justify-center m-5 text-center gap-4">
    <h1>Cosmic Runner</h1>
    <h1 className="text-6xl font-bold">We run this</h1>
    <h1 className="text-sm">Redefining lifestye for the next generation</h1>
  <Link href={"/shopping"}> <button className="bg-black rounded-full px-5 py-2 text-white hover:bg-gray-800 transition-all duration-200 ">Shop</button></Link> 
</div>
            </div>
            <div className="flex flex-col mt-5 ">
                <h1 className="text-3xl font-semibold m-6">Trending</h1>
            </div>
                <div className="relative bg-black border overflow-hidden hover:-translate-y-4 transition-all duration-200 group w-full h-96">
              <img 
                src="/schoolnike.jpg"
                className="absolute inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div  className="absolute inset-0 flex justify-center items-center opacity-0  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/shopping">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
<div className="mt-20 flex items-center justify-center text-center">
  <h1 className="text-xl font-semibold"> Explore the collections for your kids <br />
  and suit them perfectly </h1> 
  <button className="bg-black ">buy the looks</button>
</div>


            <div className="grid grid-cols-3 gap-10 p-24">
                {/* first grid item */}
                <div onChange={kidscloths} className="flex items-center flex-col gap-4 hover:shadow-lg border">
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2cb7f435-c51b-4980-94b3-279f9a61c354/NIKE+COSMIC+RUNNER+%28TD%29.png" alt="" className="w-full h-full object-cover" />
                    <button className="bg-black  text-white  transition-all w-full m-3 rounded-full py-2 text-lg  duration-200 hover:bg-gray-800 font-semibold" >Shoes</button>
                </div>
                {/* second grid item */}
                <div onChange={kidsShoes} className="flex items-center justify-center flex-col gap-4 border hover:shadow-lg">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/304d03ae-6c86-43b8-8d25-c62ea2bd2132/G+NSW+CLUB+FLC+BF+CREW+LS+SHNE.png" alt="" className="w-full h-full object-cover" />
                    <button className="font-semibold text-lg bg-black w-full text-white rounded-full  m-3 py-2 transition-all duration-200  hover:bg-gray-800 ">Cloths </button>
                </div>
{/* third grid item */}
<div onChange={kidsAccessories} className="flex items-center justify-center flex-col gap-4 hover:shadow-lg border ">
    <img src="orangeback.png" alt="" className="w-full h-full object-cover" />
    <button className="text-lg bg-black rounded-full text-white font-semibold hover:bg-gray-800 m-3 transition-all w-full duration-200 py-2">Accessories</button>
</div>
            </div>
        </div>
        </>
    )
}