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
  const [hovered, setHovered] = useState(false);

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
                className="cursor-pointer p-2 hover:text-orange-600 transition"
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
            <button
              onClick={logout}
              className="bg-rose-950 text-rose-400 border border-rose-400 border-b-4 font-medium px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <li className="hover:text-orange-600 transition">Sign in</li>
            </Link>
          )}

          {isConnected ? (
            <li className="text-orange-600 font-semibold">{user.firstname}</li>
          ) : (
            <Link href="/register">
              <li className="hover:text-orange-600 transition">Join us</li>
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
          {["New", "Men", "Kids", "Brands", "Sales", "Women"].map((item) => (
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
          />

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