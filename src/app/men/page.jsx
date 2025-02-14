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
            </ul>
            </div>

        </div>
<div className="flex flex-col items-center gap-6 max-w-screen-xl">
    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/243a7c32-0aa7-4c0c-a238-c2b91b91d67e/pdp-replace.jpg" alt="" className="w-screen h-screen object-cover"  />
<div className="flex items-center justify-center mt-8 mb-5 flex-col gap-3">
    <p className="text-lg font-semibold">Run ready</p>
    <p className="text-6xl font-bold text-center">The Nike Zoom <br />
    Collection</p>
    <p className="text-lg font-light">The lightweight and breathable essentials you need to put in the miles</p>
   <Link href={"/shopping"}> <button className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-200 font-lg transition-all duration-200">Shop</button> </Link>
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
<p className="font-semibold text-lg">Made for Elements</p>
<p className="font-bold text-lg">Nike alphaFly next</p>
<Link href="/shopping"><button className="px-5 py-1.5 bg-white rounded-full w-fit text-black font-semibold hover:bg-gray-200 transition-all duration-200">Shop</button></Link>
</div>
    </div>
    {/* second grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="twoairmax.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col gap-3 bg-black justify-end bg-opacity-30 p-4 text-white">
            <p className=" text-lg font-semibold">Icons the never fade</p>
            <p className=" text-lg font-bold">Air max 90</p>
            <Link href="/shopping"><button className="bg-white rounded-full w-fit text-black font-semibold px-5 py-1.5 hover:bg-gray-200 transition-all duration-200 ">Shop</button></Link>
        </div>
    </div>
    {/* third grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="/alphafly3.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col gap-3 justify-end bg-black bg-opacity-30 p-4 text-white ">
            <p className="text-lg font-semibold">give your runs a little pace</p>
            <p className="text-lg font-bold">Air zoom pegasus</p>
           <Link href="/shopping"><button className="px-5 py-1.5 w-fit font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200">Shop</button></Link>
        </div>

    </div>
    {/* fourth grid item */}
    <div className="h-80 relative bg-cover bg-center">
        <img src="https://i.pinimg.com/736x/9a/60/78/9a6078cb04a39075892d708e323ea3d4.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white gap-3 ">
<p className="font-semibold text-lg">Stylish and comfortable</p>
<p className="font-bold text-lg">The Vapor Max Ev </p>
<Link href="/shopping"><button className="bg-white text-black w-fit font-semibold px-5 py-1.5  hover:bg-gray-200 font-sembold transition-all duration-200 rounded-full">Shop</button></Link>
        </div>
    </div>
</div>
{/* end of the grid section */}
<section className="flex items-center justify-center p-6 gap-10 mt-10 mb-6 ">
          <Link href="/shopping">
            <div className="font-semibold hover:-translate-y-4 gap-4 transition-all duration-200 flex justify-center hover:shadow-lg flex-col  ">
              <img
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/17245fa0-53f7-4e1a-bcea-39e3210a65c6/M+J+ESS+FLC+PO.png"
                alt=""
               height={600}
               width={600}
              />
<button className="rounded-full bg-black text-white font-semibold px-4 py-2"> Clothing </button>
            </div>
          </Link>

          <Link href="/shopping">
            <div className="flex justify-center gap-4 hover:-translate-y-4 transition-all duration-200 flex-col hover:shadow-lg font-semibold ">
              <img
                src="https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw96b95243/nk/ac0/4/7/f/4/f/ac047f4f_ce27_4b18_94c4_1d1e77557f09.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
                alt=""
                className="object-cover w-full h-full"
              />
<button className="rounded-full bg-black text-white font-semibold px-4 py-2"> Shoes </button>
             
            </div>
          </Link>

          <Link href="/shopping">
            <div className="flex font-semibold gap-4 justify-center flex-col hover:-translate-y-4 transition-all hover:shadow-lg duration-200">
              <img src="https://i.pinimg.com/736x/b0/cf/a9/b0cfa9cd7fe0d0eda98561a88bf55408.jpg" alt="" height={500} width={500} />
<button className="rounded-full bg-black text-white font-semibold px-4 py-2">Running Gear </button>

            </div>
          </Link>
          <Link href="/shopping">
            <div className="flex  justify-center gap-4 font-semibold transition-all duration-200 hover:-translate-y-4 flex-col hover:shadow-lg ">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e977d1e-9dc0-4619-9a01-3694d1775453/NK+HERITAGE+EUGENE+WNTRZD+BKPK.png"
                alt=""
                className="object-cover w-full h-full"
              />
<button className="rounded-full bg-black text-white font-semibold px-4 py-2">Accessories </button>
              </div>
          </Link>
          
        </section>

    </div>
</div>
        </>
    )
}