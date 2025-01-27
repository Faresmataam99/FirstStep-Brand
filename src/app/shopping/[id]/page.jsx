"use client";

import { useState } from "react";

const products = [
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cc80f6fd-9d82-4621-9072-cf19d8f47eab/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1ba5e6f-8f5c-4996-871a-040b48b4cbe1/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6be98a58-2b45-4a53-9bf3-93afd5444cb3/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ce61b32-52b6-4d74-93cc-02894cd687b1/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e80394a-74ac-443e-a648-64ae873e0189/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aef66967-244b-4283-9438-a2c6263bdd24/WMNS+JORDAN+HEIR+SERIES.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8b63b767-8618-4f8f-9067-b0bfd2c8c882/WMNS+JORDAN+HEIR+SERIES.png",
  },
];

export default () => {
  const [selectedImage, setSelectedImage] = useState(products[0].image); // Start with the first image in the list

  const onMouseImages = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the larger image to the one hovered over
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-center p-4 ">
        <div className="flex items-center gap-2 flex-grow">
          <div className="flex gap-2 flex-col">
            {/* Small images */}
            {products.map((product, index) => (
              <img
                key={index}
                onMouseOver={() => onMouseImages(product.image)} // Pass image URL on hover
                className="hover:bg-opacity-20 duration-100 bg-black transition-all"
                src={product.image}
                alt=""
                height={50}
                width={50}
              />
            ))}
          </div>

          {/* Large image */}
          <div className="flex h-fit">
            <img
              src={selectedImage} // Use the selected image from state
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>

        {/* Other content (size selection, add to bag, etc.) */}
        <div className="flex flex-col sticky top-0 right-0 max-w-screen-lg m-auto ">
          <div className="flex flex-col gap-3">
            <h1>{/* Product name */}</h1>
            <h1>Shoes</h1>
            <span>{/* Product price */}</span>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 max-w-screen-lg m-auto ">
            <div className="flex justify-between w-full">
              <h1 className="hover:underline font-semibold">Select size</h1>
              <p className="hover:underline font-semibold">Size guide</p>
            </div>

              <div className="grid grid-cols-2 items-center list-none gap-2">
<div className="list-none" >
<li className="border w-44 rounded-lg p-3 hover:bg-gray-200 duration-200 transition-all ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
</div>
          
                {/* More sizes */}
              <div className="list-none">
              <li className="border w-44 hover:bg-gray-200 transition-all rounded-lg p-3 ">M-4/W-5.5</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
                <li className="border w-44 hover:bg-gray-200 transition-all duration-200 rounded-lg p-3 ">M-10/W-9</li>
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
