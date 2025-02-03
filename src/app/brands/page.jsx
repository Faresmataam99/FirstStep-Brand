"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default () => {
  // const [bgColor, setBgColor] = useState("#ffffff"); 
  // const handleHover = (color) => {
  //   setBgColor(color);
  // };
  const [bgColor,setBgColor]=useState('')
  const handleHover = (color)=>{
    setBgColor(color)
  }

  return (
    <>
      <motion.div
        className="h-screen w-screen fixed top-0 left-0 -z-10"
        style={{ backgroundColor: bgColor }}
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.3 }}
      />
      <div className="grid grid-cols-3 gap-6  items-center justify-center p-10">
      <Link href={"adidas"}>
       <div
          onMouseOver={() => handleHover("#EEF4FC")} 
          className="border hover:scale-110 transition-all duration-200"
        >
          <img src="./adidasbrand.jpg" alt="Adidas" />
        </div></Link> 
        <div
          onMouseOver={() => handleHover("#8c454b")} 
          className="border hover:scale-110 transition-all duration-200"
        >
          
          <img src="nbbrand.jpg" alt="New Balance"/>
        </div>
        <div
          onMouseOver={() => handleHover("#546E7F")} 
          className="border hover:scale-110 transition-all duration-200"
        >
          <img src="brandnike.jpg" alt="Nike" />
        </div>
      </div>
    </>
  );
};