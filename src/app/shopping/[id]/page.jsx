"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [product, setproduct] = useState([]);
  const params = useParams();


  useEffect(() => {
axios.get(`http://localhost:5000/products/${params.id}`)
    .then((response) => setproduct(response.data));
  });

  const onMouseImages = (image) => {
    setSelectedImage(product.image);
  };
  

  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-center justify-center p-4">
        <div className="grid grid-cols-12 gap-2 flex-grow">
          {/* ounmouse images panel */}
          <div className="flex gap-2 flex-col col-span-2">

            {/* {products.map((product) => (
              <img
                key={index}
                onMouseOver={() => onMouseImages(product.image)}
                className="hover:bg-opacity-20 duration-100 bg-black transition-all h-20"
                src={product.image}
              />
            ))} */}
          </div>

          {/* Large image */}
          <div className="col-span-9 h-full">
            <img src={product.image} alt=""    />
          </div>
        </div>
        {/* Other content (size selection, add to bag, etc.) */}
        <div className="flex flex-col sticky top-0 right-0 max-w-screen-lg m-auto ">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <h1 className="text-lg font-light "> {product.category} </h1>
            <span className="text-xl font-light">{product.price} £ </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 max-w-screen-lg m-auto ">
            <div className="flex justify-between w-full">
              <h1 className="hover:underline font-semibold">Select size</h1>
              <p className="hover:underline font-semibold">Size guide</p>
            </div>

            <div className="grid grid-cols-2 items-center list-none gap-2">
              <div className="list-none">
                <li className="border w-44 rounded-lg p-3 hover:bg-gray-200 duration-200 transition-all ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
              </div>

              {/* More sizes */}
              <div className="list-none">
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">
                  M-4/W-5.5
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">
                  M-10/W-9
                </li>
                {/* More sizes */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col mt-5">
            <div className="flex items-center justify-center gap-2 flex-col  ">
              <button className="rounded-full  px-7 py-4 bg-black text-white w-full hover:bg-gray-200 transition-all duration-200">
                Add to bag
              </button>
              <button className="px-4 rounded-full py-2 border hover:bg-gray-200 w-full transition-all duration-200">
                Add to favourites
                <img src="/heart.png" alt="" height={20} width={20} />
              </button>
            </div>

            <div className="flex gap-4 flex-col">
              <h1>Shipping and returns</h1>
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Reviews</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
