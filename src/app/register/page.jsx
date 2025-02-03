"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spline_Sans_Mono } from "next/font/google";

export default () => {
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [birthdate,setbirthdate]=useState('')
  const [country,setcountry]=useState('')
  const [email,setemail] = useState("");
  const [password,setpassword]=useState('')

  const router = useRouter();

  const submit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/register",{
        email,
        password,
        firstname,
        lastname,
        birthdate,
        country,
        } 
      );
      router.push("/"); 
    } catch (err) {
      console.error("Login error:", err.message);
    }
  };
  
  const swipeAnimation = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  return (
    <>
      <div className="flex items-center justify-center gap-10 m-20">
        
          <motion.form
            onSubmit={submit}
            className="flex bg-gray-100 items-center justify-center flex-col hover:shadow-lg transition-all duration-200 gap-4 p-4 rounded-lg"
            {...swipeAnimation}
          >
            <input
              onChange={(e)=>setfirstname(e.target.value)}
              value={firstname}
              className="p-2 text-lg rounded-full hover:bg-gray-200 transition-all duration-200 w-96"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name..."
              required
            />
            <input
              onChange={(e)=>setlastname(e.target.value)}
              value={lastname}
              className="p-2 text-lg rounded-full hover:bg-gray-200 transition-all duration-200 w-96"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name..."
              required
            />
            <input
              onChange={(e)=>setcountry(e.target.value)}
              value={country}
              className="p-2 text-lg rounded-full hover:bg-gray-200 duration-200 transition-all w-96"
              type="text"
              id="country"
              name="country"
              placeholder="Country..."
              required
            />
            <input
              onChange={(e)=>setbirthdate(e.target.value)}
              value={birthdate}
              className="p-2 text-lg rounded-full hover:bg-gray-200 transition-all duration-200 w-96"
              type="text"
              id="text"
              name="text"
              placeholder=""
              required
            />
            
            <input
              onChange={(e)=>setemail(e.target.value)}
              value={email}
              className="p-2 text-lg rounded-full hover:bg-gray-200 transition-all duration-200 w-96"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
            <input
              onChange={(e)=>setpassword(e.target.value)}
              value={password}
              className="p-2 text-lg rounded-full hover:bg-gray-200 transition-all duration-200 w-96"
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              required
            />

            <button
              type="submit"
              className="px-4 py-1.5 hover:bg-gray-500 duration-200 transition-all bg-black text-white rounded-full"
            >
              Submit
            </button>
          </motion.form>
       
          <motion.div
            className="text-2xl font-bold text-center"
            {...swipeAnimation}
          >
          </motion.div>
        <motion.div
          className="flex items-center justify-center flex-col text-center"
          {...swipeAnimation}
        >

            <p className="text-3xl font-semibold">
              Become part of the family, discover, become up to date <br /> and
              take advantage of many offers and discounts <br />
              <span className="flex items-center justify-center gap-3">
                <a href="/" className="text-orange-500 hover:underline transition-all duration-200 font-bold">
                    at Nike.com
                </a>
                <img src="./nike.png" height={40} width={40} alt="" />
              </span>
            </p>
        </motion.div>
      </div>
    </>
  );
};