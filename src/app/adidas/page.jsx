"use client";
import { Inter } from "next/font/google"; // 
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: "400" }); // 

export default function Home() {
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
            className={`flex mt-24 p-4  flex-col gap-3 font-bold text-white text-4xl text absolute inset-0 ${inter.className}`}
          >
            <p>The brand with the three stripes</p>
            <p>Die welt marke mit den 3 streifen</p>
            <p>La marque aux trois bandes</p>
            <p>スリーストライプスのブランド</p>
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
        </div>
      </div>
    </>
  );
}
