"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "@/lib/store/userSlice";
import axios from "axios";

export default function AnimatedPage() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const product = useSelector((state) => state.cart.products);
  const cartLength = useSelector(state => state.cart.products).length;


  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (query) {
          const response = await axios.get(`http://localhost:5000/products?title=${query}`);
          setProducts(response.data); // Assuming response.data is an array of product objects
        } else {
          const response = await axios.get(`http://localhost:5000/products`);
          setProducts(response.data); // Assuming response.data is an array of product objects
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, [query]); // Add query to dependency to re-fetch when query changes

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Filter products based on the input query
    const filteredSuggestions = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && !inputRef.current.contains(event.target) &&
        suggestionsRef.current && !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]); // Close the suggestions panel if click is outside
      }
    };


  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Empty dependency array to ensure it runs once when component is mounted

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
  }, [dispatch]);

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
          <Link href={"/help"}>
          <li>Help</li></Link>
          {isConnected ? (
            <Link href={""}>
              <li className="bg-orange-200 px-4 p-80000 text-md py-1.5 rounded-full">{user.firstname} {user.lastname}</li>
            </Link>
          ) : (
            <Link href="/register">
              <li className="hover:text-orange-600 text-md transition">Join us</li>
            </Link>
          )}

          {isConnected ? (
            <button
              onClick={logout}
              className="rounded-full bg-red-600 text-md text-white px-4 py-1.5"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <li className="hover:text-orange-600 text-md transition">Sign in</li>
            </Link>
          )}
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between bg-white p-4 h-16 w-full shadow-md">
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
          {["New", "Men", "Kids", "Woman"].map((item) => (
            <Link href={`/${item.toLowerCase()}`} key={item}>
              <li className="hover:underline hover:underline-offset-4 transition">
                {item}
              </li>
            </Link>
          ))}
        </ul>

        {
user.isAdmin ? (
  /* From Uiverse.io by innocentpice */ 
<div class="flex  p-2 border-2 border-red-300 items-center justify-center rounded">
 <Link href={"/"}><button class="flex p-2 hover:bg-orange-300 rounded">
    <svg
      class="icon"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
      ></path>
    </svg>
  </button></Link> 
 <Link href={"/orderlist"}> <button class="flex p-2 hover:bg-orange-200 rounded">
    <svg
      class="icon"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      ></path>
    </svg>
  </button></Link>

  <Link href={"/productform"}>
  <div className="hover:bg-orange-200 p-2 ">
<img src="chaussure.png" alt="" height={20} width={20} />
  </div>
  </Link>

  <Link href={"/dashboard"}><button class="flex p-2 hover:bg-orange-200 rounded">
    <svg
      class="icon"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
  </button></Link>
</div>

):(
  <div>

  </div>
)

        }

        {/* Search & Cart */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              ref={inputRef}
              className="p-2  border-none w-80 list-none rounded-full bg-gray-100 hover:bg-gray-300 focus:outline-none transition-all duration-300"
              placeholder="Search items"
              value={query}
              onChange={handleChange}
            />
            <motion.div
              ref={suggestionsRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-2 w-40 bg-white border list-none border-gray-300 rounded-lg shadow-lg"
            >
              {suggestions.slice(0, 4).map((product, index) => (
                <Link href={`/shopping/${product.id}`} key={index}>
                  <li className="p-2 text-sm hover:bg-gray-200 cursor-pointer">{product.title}</li>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Shopping Bag with Counter */}
          <div className="relative hover:bg-gray-200 transition-all duration-200 hover:rounded-full p-2">
            <Link href="/cart">
              <img src="/bag.png" alt="cart" height={30} width={30} />
              <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold bg-orange-500 text-white rounded-full">
                {cartLength}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
