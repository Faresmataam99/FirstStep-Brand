"use client";

import { useEffect, useState } from "react";

export default () => {
  useEffect(() => {
    const response = async () => {
      const fetchingproducts = await axios
        .get("https://localhost:8000/products")
        .then((response) => setproducts(response.data.products));
    };
  });
  const [cart, setcart] = useState("");
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <div className="w-full">
          <img
            src="https://athlonsports.com/.image/t_share/MjExMTQ2MDU4MTU0MTI0OTg5/nike-air-force-1-07-lv8-sneakers.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <h1 className="text-xl font-bold">Air Force 07 </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl font-semibold">
            An astonishing given look by the icon that never fades
          </p>
        </div>
      </div>
      {/* {products.map((product) => {
        <div
          key={index}
          className="grid grid-cols-4 justify-center items-center gap-3 border translate-y-3 transition-all duration-200"
        ></div>;
      })} */}
    </>
  );
};

