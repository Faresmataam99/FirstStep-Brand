"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default () => {
  const [product,setProduct] =useState({});
  return (
    <>
      <div className="flex items-center gap-3 justify-center p-4 ">
        <div className="flex jusitfy-center flex-col gap-4 max-w-screen m-auto">
          <p>{product.title}</p>
          <span>{product.price}</span>
          <span>{product.category}</span>
          <div className="flex items-center justify-between p-2 w-full">
            <p className="text-lg font-semibol">Select size</p>
            <p className="text-lg font-semibold">Size Guide</p>
          </div>
        </div>
      </div>
    </>
  );
};
