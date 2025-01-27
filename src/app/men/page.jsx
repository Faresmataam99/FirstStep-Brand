"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
export default ()=>{
    // scrollToTop = () => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth',
    //     });
    //   };

    const ScrollUp = ()=>{
        window.scrollTo({
top:0,
behaviour:'smooth'
        })
    }


    useEffect(()=>{
        const orders = async ()=>{
            try{
                const showingOrders = await axios.get('https://localhost:5000/orders')
            }catch(error){
res.status(422).json(error.message('Wrong credentials'))
            }
        }
    })
    
    return(
        <>
<div className="flex justify-center gap-4 flex-col">
<div className="flex items-center jusitfy-center max-w-screen-xl m-auto flex-col ">
        <div className="bg-white w-full justify-around text-lg gap-6 font-semibold flex p-5">
            <p className="text-xl">Men</p>
            <div>
            <ul className="flex items-center gap-6">
               <Link href="/shopping"> <li className="hover:underline">Shoes</li></Link>
               <Link href="/shopping"> <li className="hover:underline">Clothing</li></Link>
               <Link href="/shopping"> <li className="hover:underline">Accessories</li></Link>
               <Link href="/shopping"> <li className="hover:underline">Sales</li></Link>
            </ul>
            </div>

        </div>
<div>
    <img src="https://i.pinimg.com/736x/00/0a/c5/000ac51668dd3830f49c7290b96d1506.jpg" alt="" className="w-screen h-64"  />
<div className="flex items-center justify-center mt-8 mb-5 flex-col gap-3">
    <p className="text-sm font-light">Run ready</p>
    <p className="text-6xl font-bold text-center">The Nike Stride <br />
    Collection</p>
    <p className="text-sm font-light">The lightweight and breathable essentials you need to put in the miles</p>
    <button className="bg-black text-white p-2 rounded-full hover:bg-gray-200 transition-all duration-200">Shop</button>
</div>
</div>
    </div>
    <div className="flex items-center justify-center">
        <ReactPlayer url="https://youtu.be/sQUVFhXEcNo?t=60" className="w-screen"
        playing={true}
        controls={true}
        loop={true} 
        muted={true}
        width={"100%"}
        />
    </div>
    <div className="flex mt-5 justify-center flex-col  ">
<p className="text-3xl font-semibold p-3 m-10">Trending</p>
{/* gris section */}
<div className="grid grid-cols-2 w-full items-center justify-center">
    {/* first grid item */}
    <div className="relative bg-cover bg-center h-80 ">
<img src="fluo.jpg" alt="" className="w-full h-full object-cover"/>
<div className="absolute inset-0 flex flex-col gap-3 justify-end bg-black bg-opacity-30 p-4 text-white ">
<p>Made for Elements</p>
<p>Nike alphaFly next</p>
<Link href="/shopping"><button className="px-5 py-1.5 bg-white rounded-full w-fit text-black font-semibold hover:bg-gray-200 transition-all duration-200">Shop</button></Link>
</div>
    </div>
    {/* second grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="twoairmax.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col gap-3 bg-black justify-end bg-opacity-30 p-4 text-white">
            <p>Icons the never fade</p>
            <p>Air max 90</p>
            <Link href="/shopping"><button className="bg-white rounded-full w-fit text-black font-semibold px-5 py-1.5 hover:bg-gray-200 transition-all duration-200 ">Shop</button></Link>
        </div>
    </div>
    {/* third grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="/alphafly3.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col gap-3 justify-end bg-black bg-opacity-30 p-4 text-white ">
            <p className="text-3xl">give your runs a little pace</p>
           <Link href="/shopping"><button className="px-5 py-1.5 w-fit font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200">Shop</button></Link>
        </div>

    </div>
    {/* fourth grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="/skyNike.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white ">
<p>Stylish and comfortable</p>
<Link href="/shopping"><button className="bg-white text-black w-fit font-semibold px-5 py-1.5  hover:bg-gray-200 font-sembold transition-all duration-200 rounded-full">Shop</button></Link>
        </div>
    </div>
{/* <div className="h-64 relative bg-cover bg-center">
              <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/adf3f11e-95e4-4c55-818c-e349d5dbc4b6/women-s-shoes-clothing-accessories.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white">
              <p className="text-lg">Stylish Comfort</p>
              <p></p>
              <button className="bg-white text-black rounded-full  hover:bg-gray-300 font-semibold transition-all duration-200 px-3 py-1.5">
                Shop
              </button>
            </div>
          </div> */}
</div>
{/* end of the grid section */}
<div className="flex items-center justify-center gap-4 m-10 p-5">
    <img src="" alt="" />
    <div className="flex items-center justify-center gap-4 flex-col">
        <p className="text-6xl font-semibold text-center ">Elevate your distinct <br /> athletic lifestyle expression </p>
        <p className="text-lg text-center">Discover unique pieces that elevates your fashion statment reflecting the essence <br /> of who you are.Embrace the journey  of the athletic lifestyle with us and <br /> redefine your style narrative with us</p>
        <button className="px-4 py-1.5 bg-orange-500  rounded-full shadow-lg text-white hover:bg-orange-400 transition-all duration-200" onClick={ScrollUp}>Browse now</button>
    </div>
</div>

    </div>
</div>
        </>
    )
}