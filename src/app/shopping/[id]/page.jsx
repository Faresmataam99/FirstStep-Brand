"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/cartSlice";

import { useSelector } from "react-redux"; 

export default () => {

  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState([]);
  const [product, setproducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${params.id}`)
      .then((response) => {
        setproducts(response.data)
      });
  }, [params.id]);

  const onMouseImages = (image) => {
    setSelectedImage(product.image);
  };


  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-center p-20">
        <div className="grid grid-cols-2 gap-2 flex-grow">
          {/* ounmouse images panel */}
          {/* <div className="flex gap-2 flex-col col-span-2">

            {products.map((product) => (
              <img
                key={index}
                onMouseOver={() => onMouseImages(product.image)}
                className="hover:bg-opacity-20 duration-100 bg-black transition-all h-20"
                src={product.image}
              />
            ))}
          </div> */}
          {/* Large image */}
          <div className="col-span-9 h-full">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="flex flex-col  sticky top-0 right-0 max-w-screen-lg m-auto ">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <h1 className="text-lg font-light "> {product.category} </h1>
            <span className="text-xl font-light">{product.price} £ </span>
          </div>
          <div className="flex items-center  flex-col gap-3  m-auto ">
            <div className="flex justify-between w-full gap-4">
              <h1 className="hover:underline font-semibold">Select size</h1>
              <p className="hover:underline font-semibold">Size guide</p>
            </div>
            <div className="flex items-center gap-4 ">
            <ul className="flex items-center gap-4">
                {product.sizes?.map((size,index) => (
                  <li key={index} className="border rounded-lg p-3 hover:bg-gray-200 duration-200 transition-all">
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col mt-5">

          <div className="flex items-center justify-center gap-2 flex-col">

              <button
                onClick={() => dispatch(addToCart(product))}
                className="rounded-full  px-7 py-4 bg-black text-white w-full hover:bg-gray-200 transition-all duration-200"
              >
                Add to bag
              </button>
              <div className="px-4 rounded-full py-2 border hover:bg-gray-200 w-full transition-all duration-200 text-lg flex items-center gap-2 ">
                <h1>Add to favourites</h1>
                <img src="/heart.png" alt="" height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
