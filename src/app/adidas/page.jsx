"use client";
import { Inter } from "next/font/google"; // 
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: "400" }); // 

export default function Home() {
  const [products,setProducts]=useState([])
  const [query,setQuery]=useState('')

  useEffect(()=>{
    try{
      if(query){
        const fetchProducts = async()=>{
          const response = axios.get(`http://localhost:5000/products?brand=${query}`)
          .then((response)=>setProducts(response.data))
        }
    }else{
      const response = axios.get(`http://localhost:5000/products`)
      .then((response)=>setProducts(response.data))
    }
      }catch(e){
        console.error(e)
      }
    
   
  })
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 max-w-screen-xl m-auto">
        <div className="relative flex items-center justify-center flex-col">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enSG/Images/DesktopHeader_tcm207-476324.jpg"
            alt=""
            className="w-full"
          />
          <div
            className={`flex mt-24 p-4  flex-col gap-14 font-bold px-11 text-white text-4xl text absolute inset-0 ${inter.className}`}
          >
            <p className="font-extrabold">The brand with the three stripes</p>
            <p className="font-extrabold">Die welt marke mit den 3 streifen</p>
            <p className="font-extrabold">La marque aux trois bandes</p>
            <p className="font-extrabold">スリーストライプスのブランド</p>
          </div>
<div className="flex m-20 items-center justify-center gap-4 shadow-lg border text-xl font-semibold p-3">
  <img src="samba.jpg" alt="" height={500} width={500} />
  <div className="flex  flex-col gap-3 text-center ">
  <p className="text-3xl">Refinde Heritage</p>
  <p>The iconic Nastas hits the store again</p>
  <div className="flex items-center justify-center">
<Link href="/shopping"><button className="bg-black rounded-full px-4 py-3  hover:bg-gray-700 transition-all duration-200 text-white">Browse the collection</button></Link>
  </div>
  </div>
</div>
        </div>
        <div className="flex justify-center itmes-center flex-col gap-4">
          {/* samba presentaiton */}
          <div className="flex gap-4 border ">

            <img src="sambatemplate.jpg" alt="" className="w-[500px] h-[500px] object-cover" />
            <div className="flex flex-col gap-3 font-semibold text-2xl p-2 items-center justify-center">
            <h1>Discover the new adidas colellection</h1>
            <h2>Samba the iconic shoes throughout generations</h2>
           <Link href={"/shopping"}>  <button className="rounded-full text-lg text-white bg-black hover:bg-gray-700 transition-all duration-200 px-4 py-2">Shop</button></Link>
            </div>
          </div>
          {/* end of the presentation */}

          <div className="flex items-center justify-center flex-col m-10 p-4  ">
<div className="text-center items-center flex-col flex">
  <p className="text-4xl font-semibold">Bold style with everyday comfort</p>
  <p className="text-6xl font-bold "> Discover the new collection <br />
  of <div className="flex items-center flex-col m-2 justify-center">
  <img src="orangeadidas.png" alt="" height={50} width={50} />
  <span className="text-orange-400 hover:shadow-lg rounded-full p-4  hover:shadow-orange-400 transition-all duration-200"> Adidas Campus</span>
    </div> 
   </p>
</div>
</div>

{/* image side */}
<div className="flex items-center justify-center">
<img src="twowomenad.jpg" alt="" className="w-screen object-cover relative" />
<div className="flex flex-col">
<p className="font-bold text-6xl  "> originals never fade</p>
</div>
</div>
{/* image side */}

        </div>
      </div>
    </>
  );
}
