"use client";

import { useState, useRef } from "react";
import axios from "axios";
import{  Router , useRouter } from "next/router";  
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [colors, setColors] = useState("");
  const [sizes, setSizes] = useState("");
  const [brand, setBrand] = useState('');
  const [addedProduct, setAddedProduct] = useState(false);  // State to track if product is added
  const fileInputRef = useRef(null); // Reference for the file input

  const dispatch=useDispatch()
  const user = useSelector((state)=>state.user.user)
  const isAdmin= useSelector((state)=>state.user.isAdmin)


  const submit = async (e) => {

    e.preventDefault();
    const colorsArray = colors.split(',').map(color => color.trim());
    const sizesArray = sizes.split(',').map(size => size.trim());
    
    const productData = {
      title,
      price,
      category,
      description,
      type,
      stock,
      colors: colorsArray,
      sizes: sizesArray,
      brand,
      image, // Add the image field to the productData
    };
    
    try {
      const response = await axios.postForm(
        "http://localhost:5000/products",
        productData
      );
      setProducts(response.data);
      setAddedProduct(true);  // Set the state to show the success message

    } catch (e) {
      console.error("Error adding product:", e);
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // Trigger the click event of the file input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the selected file to the state
    }
  };

  return (

    <>
    {
      user.isAdmin ?(

      <div className="flex items-center justify-center p-20 flex-col">
        {/* Success Message */}
      {addedProduct && (
        <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
          <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
            <div className="flex gap-2">
              <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-white">done successfully </p>
                <p className="text-gray-500">This is the description section</p>
              </div>
            </div>
            <button
              className="text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear"
              onClick={() => setAddedProduct(false)}  // Hide the message
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* succes message */}
        <div className="grid grid-cols-2 rounded-lg border">
          {/* the whole form */}
          <div className="flex items-center h-full">
            <img
              src="jordanroom.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-6">
            <form
              className="flex items-center flex-col gap-4 w-full"
              onSubmit={submit}
            >
              {/* Title */}
              <div className="relative mb-5 w-full">
                <input
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className="absolute left-0 top-0 mt-1 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Title
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Price */}
              <div className="relative mb-5 w-full">
                <input
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Price
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Brand */}
              <div className="relative mb-5 w-full">
                <input
                  value={brand}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setBrand(e.target.value)}
                />
                <label className="absolute left-0 top-0 mt-1 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Brand
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Type */}
              <div className="relative mb-5 w-full">
                <input
                  value={type}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Type
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Colors */}
              <div className="relative mb-5 w-full">
                <input
                  value={colors}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setColors(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Colors
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Description */}
              <div className="relative mb-5 w-full">
                <input
                  value={description}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Description
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Category */}
              <div className="relative mb-5 w-full">
                <input
                  value={category}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Category
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Sizes */}
              <div className="relative mb-5 w-full">
                <input
                  value={sizes}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setSizes(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Sizes
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* Stock */}
              <div className="relative mb-5 w-full">
                <input
                  value={stock}
                  type="text"
                  className="w-full py-2 text-base border-b-2 border-gray-300 bg-transparent outline-none focus:border-orange-500 focus:pb-3 transition-all duration-300"
                  onChange={(e) => setStock(e.target.value)}
                />
                <label className="absolute left-0 top-0 text-gray-400 pointer-events-none text-base transition-all duration-300 transform scale-100 origin-top-left focus:scale-75 focus:text-orange-500 -translate-y-6">
                  Stock
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300"></div>
              </div>

              {/* File upload */}
              <div
                className="h-48 w-72 flex flex-col items-center justify-center gap-5 cursor-pointer border-2 border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-[0_48px_35px_-48px_rgba(0,0,0,0.1)] hover:bg-orange-100"
                onClick={handleFileUploadClick}
              >
                <div className="flex items-center justify-center">
                  <svg className="h-20 fill-gray-500"></svg>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-normal text-gray-500">
                    Upload your file
                  </span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>

              <button
                type="submit"
                className="border rounded-full transition-all duration-200 hover:bg-orange-300 px-4 py-1.5 mt-4"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>

):(
  <div className="w-screen h-screen items-center justify-center ">
    <p className="font-lg text-2xl">not Allowed</p>
  </div>
)
}
    </>
  );
};
