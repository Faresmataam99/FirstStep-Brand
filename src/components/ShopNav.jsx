"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default ()=>{
    const [products,setProducts]=useState([])
    const [sort,setSort]=useState([])
    const [search,setSearch]=useState('')
    const [category,setCategory]=useState('')

const isAdmin = useSelector((state)=>state.user.isAdmin)
 
    const filter = ()=>{
      axios.get('http://localhost:5000/products',{
        params:{
          category,
          search,
          sortDirection : sort.sortDirection,
          sortBy : sort.sortBy
        }
      }).then ((response)=>setCategory(response.data.category))
    }
  
    
    useEffect(()=>{
      axios.get('http://localhost:5000/products')
      .then((response)=>setProducts(response.data))
    },[])


return(
    <>
     <div className="flex flex-col gap-3">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4 bg-white p-4 ">
          <div> 
            <h1 className="text-xl font-semibold">New releases ({products.length}) </h1>
            <p className="text-sm font-semibold">Pick up today</p>
          </div>
          <div className="flex items-center gap-4">
            <h1
              className="cursor-pointer rounded-lg hover:bg-gray-200 transition-colors px-3 py-1.5 duration-200"
            >
            </h1>
            <select className="hover:bg-gray-200 rounded-lg px-3 py-1.5 transition-colors duration-200" defaultValue={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value={{sortBy: 'name', sortDirection: 1 }}>Sort by</option>
              <option value={{sortBy: 'name', sortDirection: -1 }}>Featured</option>
              <option value={{sortBy: 'name', sortDirection: 1 }}>Newest</option>
              <option value={{sortBy: 'name', sortDirection: -1 }}>Price: High-low</option>
              <option value={{sortBy: 'name', sortDirection: 1 }}>Price: Low-high</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-full" onClick={filter}>  Search  </button> 
            {
              isAdmin && <span className="bg-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-300 text-white"> Admin </span>
            }
          </div>
        </div>
        </div>
    </>
)
}