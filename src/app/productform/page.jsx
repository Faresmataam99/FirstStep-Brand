"use client";

import { useState, useRef } from "react";
import axios from "axios";

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

  const fileInputRef = useRef(null); // Reference for the file input

  const submit = async (e) => {
    e.preventDefault();
    const productData = {
      title,
      price,
      category,
      description,
      type,
      stock,
      colors: colorArray,
      sizes: sizeArray,
      image, // Add the image field to the productData
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/products",
        productData
      );
      setProducts(response.data);
    } catch (e) {
      console.error("Error adding product:", e);
    }
  };

  const addedProduct = () => {
    // Logic for adding product can go here
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
      <div className="flex items-center justify-center p-20">
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
    </>
  );
};
