"use client";

import { useContext, useEffect } from "react";
import {context} from "react" // Adjust the path to where your context is defined.

export default function Products() {
  // const { state, dispatch } = useContext(context);
  useEffect(()=>{
    const fetchImages = async ()=>{
      try{
        const response = await axios.get('https://localhost:5000/products',{
          image,
          stock,
          title,
          price,
          realaeseDate,
        })
      }catch(e){
res.status(422).json(alert='no items found')
      }
    }
  })

  const products = [
    {
      title: "Alpha Fly Next",
      image: "https://www.rundome.gr/2977648/nike-air-zoom-alphafly-next-3.jpg",
      price: "$199.99£",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "£150.00",
      stock: "Available",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="border p-4 hover:-translate-y-3 transition-all duration-200"
        >
          <img src={product.image} alt={product.title} className="w-full h-auto" />
          <div className="flex flex-col ">
          <p className="font-semibold">{product.title}</p>
          <span className="font-semibold">{product.price}</span>
          <span className="font-semibold text-green-400">{product.stock}</span>
          <button
            // onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="mt-2 px-3 py-1.5 rounded-full bg-black text-white font-semibold hover:bg-gray-600 transition-all duration-200"
          >
            Add to cart
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}