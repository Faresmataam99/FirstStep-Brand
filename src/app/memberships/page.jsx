"use client"

export default ()=>{
  useEffect(()=>{
    try{

    }catch(e){
      
    }
  })
    return(
        <>
        <div className="grid grid-cols-3 gap-6 p-10">
<div className="flex flex-col bg-white rounded-3xl border shadow-lg ">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <div className="flex items-center gap-2">
        <h2
          className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
        BrandZone
        </h2>
        <img src="bagbrand.png" height={50} width={50} alt="" />
        </div>
        <p className="mt-2 text-sm text-gray-500">Get 10% of Each item of our <br /> new collection</p>
        <p className=" mt-2 text-sm text-gray-500">Free delievery on items more than 15000 DZD</p>
      </div>
      <div className="mt-8">
        <p>
          <span className="text-5xl font-light tracking-tight text-black">
            15£
          </span>
          <span className="text-base font-medium text-gray-500"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8 mt-7">
    <a
      aria-describedby="tier-company"
      className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div>
{/* second membership */}

<div className="flex flex-col bg-white rounded-3xl border shadow-lg">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <div className="flex items-center  gap-2">
        <h2
          className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
        BrandZone
        </h2>
        <img src="bagbrand.png" alt="" height={50} width={50 } />
        </div>
        <p className="mt-2 text-sm text-gray-500">Get 15% of Each item of our <br/>new collection</p>
        <p className="mt-2 text-sm text-gray-500">buy two three items and get one for free</p>
        <p className="mt-2 text-sm text-gray-500">free delivery</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="text-5xl font-light tracking-tight text-black">
            25£
          </span>
          <span className="text-base font-medium text-gray-500"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div>

{/* third card */}
<div className="flex flex-col bg-white rounded-3xl border shadow-lg">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <div className="flex items-center  gap-2">
        <h2
          className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
        BrandZone
        </h2>
        <img src="bagbrand.png" height={50} width={50} alt="" />
        </div>
        <p className="mt-2 text-sm text-gray-500">Get 25% off in Each item of our <br/>new collection</p>
        <p className="mt-2 text-sm text-gray-500">Buy two items and get one for free</p>
        <p className="mt-2 text-sm text-gray-500">Free delivery on all your items</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="text-5xl font-light tracking-tight text-black">
            30£
          </span>
          <span className="text-base font-medium text-gray-500"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div>

</div>
        
        </>
    )
}