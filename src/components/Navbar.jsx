"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "@/lib/store/userSlice";
import axios from "axios";

export default function AnimatedPage() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const user = useSelector((state) => state.user.user);
  const cartLength = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if(query){
          const response = await axios.get(`http://localhost:5000/products?title=${query}`);
          setProducts(response.data); // Assuming response.data is an array of product objects
        }else{
          const response = await axios.get(`http://localhost:5000/products`);
          setProducts(response.data); // Assuming response.data is an array of product objects
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to ensure it runs only once on mount

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Filter products based on the input query
    const filteredSuggestions = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase()) // Assuming product name is in 'name' field
    );
    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/account", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          dispatch(loginAction(response.data));
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction(user));
  };

  return (
    <div className="bg-gray-200 text-sm font-bold">
      {/* Top Navigation */}
      <div className="flex items-center justify-end p-2 bg-gray-100">
        <ul className="flex items-center gap-6">
          <Link href="/findastore">
            <li className="hover:text-orange-600 transition">Find a store</li>
          </Link>

          {/* Assistance Hover */}
          <div className="relative">
            <Link href="/help">
              <li
                className="cursor-pointer p-2 text-md hover:text-orange-600 transition"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Help
              </li>
            </Link>

            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="
                absolute left-0 mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                Need help? Click here for support.
              </motion.div>
            )}
          </div>
          {isConnected ? (
            <Link href={""}>
              <li className="  bg-orange-200 px-4 text-md py-1.5 rounded-full ">{user.firstname}</li>
            </Link>
          ) : (
            <Link href="/register">
              <li className="hover:text-orange-600 text-md transition">Join us</li>
            </Link>
          )}

          {isConnected ? (
            <button
              onClick={logout}
              className="rounded-full bg-red-600 text-md text-white px-4 py-1.5 "
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <li className="hover:text-orange-600 text-md  transition">Sign in</li>
            </Link>
          )}

        </ul>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between bg-white p-4 h-16  w-full shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <img src="/bagbrand.png" alt="Brand Logo" height={50} width={50} />
          </Link>
          <div className="flex flex-col">
            <p className="text-xl font-semibold tracking-widest">
              Brand <span className="text-orange-600">Zone</span>
            </p>
            <p className="text-gray-500 text-sm">Home of the athletic lifestyle</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg font-semibold">
          {["New", "Men", "Kids", "Brands", "Woman"].map((item) => (
            <Link href={`/${item.toLowerCase()}`} key={item}>
              <li className="hover:underline hover:underline-offset-4 transition">
                {item}
              </li>
            </Link>
          ))}
        </ul>

        {/* Search & Cart */}
        <div className="flex items-center gap-6">
          <input
            className="p-2 w-40 border-none rounded-full bg-gray-100 hover:bg-gray-300 focus:outline-none transition-all duration-300"
            placeholder="Search items"
            value={query}
            onChange={handleChange}
            list="search-options"
          />
          <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg"
          id="search-options">
              {suggestions.slice(0,4).map((product, index) => (
        <Link href={`/shopping/${product.id}`} key={index}>
            <li className="p-2 text-sm hover:bg-gray-200 cursor-pointer">{product.title}</li>
        </Link>
      ))}
</motion.div>

          <div className=" hover:bg-gray-200 transition-all duration-200 hover:rounded-full p-2">
            <Link href="/favourite">
              <img src="/heart.png" alt="favourite" height={20} width={20} />
            </Link>
          </div>

          {/* Shopping Bag with Counter */}
          <div className="relative hover:bg-gray-200 transition-all duration-200 hover:rounded-full p-2">
            <Link href="/cart">
              <img src="/bag.png" alt="cart" height={20} width={20} />
              {cartLength > 0 && (
                <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold bg-orange-500 text-white rounded-full">
                  {cartLength}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
