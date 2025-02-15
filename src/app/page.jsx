"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/lib/store/productSlice";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm); // Get searchTerm from Redux store

  const [products, setProducts] = useState([]);

  // Fetch products based on search term
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products?search=${searchTerm}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (searchTerm) {
      fetchProducts(); // Fetch only if searchTerm is set
    }
  }, [searchTerm]); // Dependency on searchTerm

  const handleViewCollection = (title) => {
    dispatch(setSearchTerm(title)); // Set searchTerm when a collection is clicked
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col w-full gap-10">
        {/* Hero Section */}
  
      <div className="grid grid-cols-2 gap-6  items-center justify-center p-10">
      <Link href={"/adidas"}>
       <div
          className="border hover:-translate-x-3 transition-all duration-200 hover:shadow-lg"
        >
          <img src="./adidasbrand.jpg" alt="Adidas" height={500} width={500} />
        </div></Link> 
       <Link href={"/men"}><div
          className="border hover:translate-x-3 transition-all duration-200 hover:shadow-blue-300 hover:shadow-lg"
        >
          <img src="brandnike.jpg" alt="Nike" height={500} width={500} />
        </div></Link>
      </div>
        {/* Intro Section */}
        <div className="flex justify-center flex-col w-full">
          <div className="hover:translate-x-6 transition-all duration-200">
            <p className="text-4xl font-bold m-3 mb-4">
              Providing the ideal{" "}
              <span className="text-orange-500">lifestyle</span> for you
            </p>
          </div>
          <div className="bg-opacity-10 bg-black relative">
            <img
              className="w-full h-auto"
              src="https://1565619539.rsc.cdn77.org/temp/1718358019_23a07bcda501d75612f6186d0eb9d486.jpg"
              alt="Lifestyle"
            />
          </div>

          {/* Main Info */}
          <div className="flex items-center justify-center gap-4 flex-col mt-12 mb-12">
            <h1 className="text-6xl font-extrabold">
              LEGENDS NEVER <span className="text-orange-600">GET OLD</span>
            </h1>
            <p className="text-2xl">
              The stories are true—the icon gets its first release in a decade
            </p>
            <button className="bg-black rounded-full text-white px-4 py-1.5 font-semibold "> discover the lifestyle  </button>
          </div>

          {/* Subtext */}
          <div className="flex flex-col text-center justify-center items-center mb-1.5 mt-8">
            <p className="text-4xl font-thin">
              Elevate your everyday look with our brands icons
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* First Grid (Nike) */}
            <div className="relative bg-black border rounded-lg overflow-hidden hover:-translate-y-4 transition-all duration-200 group h-96">
              <img
                src="https://i.pinimg.com/736x/14/3c/b4/143cb472cb193aaa0c9c6531093a2ddb.jpg"
                alt="Nike"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href={`/shopping?search=${searchTerm}`}>
                  <button
                    onClick={() => handleViewCollection("Nike Air Force")}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300"
                  >
                    View the collection
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Grid (Adidas) */}
            <div className="relative bg-black border rounded-lg overflow-hidden hover:-translate-y-4 transition-all duration-200 group h-96">
              <img
                src="https://i.pinimg.com/736x/59/15/62/5915626e91c70f5a35a486679ea7f711.jpg"
                alt="Adidas"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href={`/shopping?search=${searchTerm}`}>
                  <button
                    onClick={() => handleViewCollection("Adidas Superstar")}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300"
                  >
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
