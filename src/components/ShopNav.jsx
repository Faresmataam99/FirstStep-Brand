"use client"

import { useState } from "react"

export default ()=>{
    const [Showfilter,setShowfilter]=useState('')
return(
    <>
     <div className="flex flex-col gap-3">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4 bg-white p-4 ">
          <div>
            <h1 className="text-xl font-semibold">New releases</h1>
            <p className="text-sm font-semibold">Pick up today</p>
          </div>
          <div className="flex items-center gap-4">
            <h1
              className="cursor-pointer rounded-lg hover:bg-gray-200 transition-colors px-3 py-1.5 duration-200"
            >
            </h1>
            <select className="hover:bg-gray-200 rounded-lg px-3 py-1.5 transition-colors duration-200">
              <option>Sort by</option>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: High-low</option>
              <option>Price: Low-high</option>
            </select>
          </div>
        </div>
        </div>
    </>
)
}