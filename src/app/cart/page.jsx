"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";

export default ({ itemsFromOtherPages = [] }) => {
  const [activeItem, setActiveItem] = useState(itemsFromOtherPages); 
  const [promo, setPromo] = useState(""); 
  const [total, setTotal] = useState(0);


  const isConnected = useSelector(state=>state.userisConnected)
  const user = useSelector(state=>state.user.user)
  if(!isConnected || user.type !='admin'){
    <div className="rounded-lg bg-orange-500 text-center p-4 ">
<h1 className="text-white font-bold">Our apologies but we are reviewing your validations <br /> for the moment, take a look once in while, <br /> thank you for your understanding and patience </h1>
    </div>
  
  useEffect(() => {
    const newTotal = activeItem.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [activeItem]); 

  const OrderOrganizing = ()=>{
  useEffect(()=>{
    axios.get()
  })
  }

  const promoCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user");
      console.log("Promo code applied successfully:", response.data);
    } catch (error) {
      alert("Not the selected product, check again");
      console.error(error);
    }
  };
}
  return (
    <>
      <div className="flex gap-4 flex-col">
        <div className="flex  justify-between flex-row p-2 w-full ">
          {/* Bag Panel */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Bag</p>
            {activeItem.length === 0 ? (
              <Link href="/new">
                <button className="bg-black relative rounded-lg text-white px-4 py-1.5 hover:bg-orange-600 transition-all duration-200 ">
                  No items in the bag yet
                </button>
                <div className="flex items-center flex-col">
                  <h1></h1>

                </div>
              </Link>
            ) : (
              <ul>
                <img src={product.image} alt="" />
                {activeItem.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
                <p className="text-light text-md">{item.price} DZD</p>
              </ul>
            )}
            
            <span className="text-white text-lg absolute left-4 top-1/2 transform -translate-y-1/2 duration-300 ease-in-out group-hover:left-[90%]  ">
              →
            </span>

          </div>
          {/* Checkout Section */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Summary</p>
            <p>Do you have a promo code ?</p>

            <motion.div
              className="flex flex-col gap-4 bg-white p-4"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-4 items-center justify-center w-full">
                <h1>Promo code</h1>
                <form method="post">
                  <label htmlFor="promoCode"></label>
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    type="text"
                    id="promoCode"
                    name="promoCode"
                    placeholder="Enter promo code"
                    className="border p-2 rounded-lg w-96 hover:bg-gray-200 transition-all duration-200"
                  />
                </form>
              </div>
            </motion.div>

            <div className="flex items-center justify-between">
              <p>Estimated shipping & handling</p>
              <p>Free</p>
            </div>
            <p>Subtotal</p>
            <p>Estimated tax</p>
            <hr className="w-full" />
            <div className="flex items-center justify-between">
              <p>Total</p>
              <span>{total} DZD</span>
            </div>
            <hr className="w-full" />
            <p>Members get free shipping on orders 15000 DZD+</p>
            <div className="flex items-center gap-3">
              <a className="underline text-gray-500" href="/register">
                <p>Join us</p>
              </a>
              <p>or</p>
              <a className="underline text-gray-500" href="/login">
                {" "}
                <p>Sign-in</p>
              </a>
            </div>
            <button
              onClick={() => alert("Checkout process started")}
              className="rounded-full p-3 w-full bg-gray-200"
              disabled
            >
              Checkout
            </button>
          </div>
        </div>
        <div className="flex gap-4 flex-col m-3">
          <p className="text-2xl font-semibold">Favourites</p>
          <div className="flex flex-row gap-3">
            <p>want to see your favourites ? </p>
            <div className="flex items-center justify-center gap-3">
              <a href="/register" className="underline text-gray-500">
                {" "}
                <p>Sign-in</p>
              </a>
              <p>or</p>
              <a href="/login" className="text-gray-500 underline">
                {" "}
                <p>Join-us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
