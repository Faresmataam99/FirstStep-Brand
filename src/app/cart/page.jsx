"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, validateOrder } from "@/lib/store/ordersSlice";
import { removeFromCart, setProducts, emptyCart } from "@/lib/store/cartSlice";
import axios from "axios";

export default () => {
  const [promo, setPromo] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const isConnected = useSelector((state) => state.user.isConnected);
  const user = useSelector((state) => state.user?.user);
  const isValid = useSelector((state) => state.orders.isValid);

  useEffect(() => {
    const products = localStorage.getItem('products');
    if (products) {
      dispatch(setProducts(JSON.parse(products)));
    }
  }, [dispatch]);

  const promoCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users");
      console.log("Promo code applied successfully:", response.data);
    } catch (error) {
      alert("Not the selected product, check again");
      console.error(error);
    }
  };

  const totalPrice = products.reduce((total, product) => {
    // Ensure selectedQuantity exists before multiplying
    const quantity = product.selectedQuantity || 0; // fallback to 0 if not present
    return total + (product.product.price * quantity);
  }, 0);



  return (
    <>
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between p-2 w-full">
          {/* Bag Panel */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Bag</p>
            {products.length === 0 ? (
              <Link href="/new">
                <button className="bg-black relative rounded-lg text-white px-4 py-1.5 hover:bg-orange-600 transition-all duration-200">
                  No items in the bag yet
                </button>
              </Link>
            ) : (
              <div className="flex items-center justify-center gap-4 p-5 max-w-screen-lg">
                <ul className="flex items-center gap-3">
                  {products.map((product, index) => (
                    <Link href={`/shopping/${product.product.id}`} key={product.product.id}>
                      <li className="flex items-center gap-4 border">
                        <img src={product.product.image} className="w-[100px] object-cover rounded-lg" />
                        <div className="flex flex-col gap-2 p-4">
                          <h2 className="text-xl font-semibold">{product.product.title}</h2>
                          <h3 className="text-lg font-light">{product.product.price} DZD</h3>
                          <h3 className="font-semibold">Size: {product.selectedSize}</h3> {/* Display the selected size */}
                          <h3 className="font-semibold">quantity: {product.selectedQuantity}</h3> {/* Display the selected size */}
                          <button
                            onClick={() => dispatch(removeFromCart(index))}
                            className="rounded-lg w-fit px-4 py-1.5 bg-red-500 text-white hover:bg-red-400">
                            Remove item
                          </button>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => dispatch(emptyCart())}
                className="bg-black h-fit rounded-lg font-light text-white px-4 py-1.5 hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
                Empty cart
              </button>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Summary</p>
            <p>Do you have a promo code?</p>
            <motion.div
              className="flex flex-col gap-4 bg-white p-4"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-4 items-center justify-center w-full">
                <h1>Promo code</h1>
                <form method="post" onSubmit={promoCode}>
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

            {/* Shipping & Handling, Total Price, and Tax */}
            <div className="flex items-center justify-between">
              <p>Estimated shipping & handling</p>
              <p>Free</p>
            </div>
            <hr className="w-full" />
            <div className="flex items-center justify-between">
              <p className="font-semibold"> {totalPrice} </p>
              <span>DZD</span>
            </div>
            <hr className="w-full" />
            <div className="justify-between w-full flex items-center">
              <p>Estimated tax</p>
            </div>
            <hr className="w-full" />
            <p>Members get free shipping on orders 15000 DZD+</p>
            <hr className="w-full" />

            {isConnected ? (
              <div></div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href={"login"}><p className="text-gray-400 hover:underline">Join us</p></Link>
                <p>or</p>
                <Link href={"register"}><p className="text-gray-400 hover:underline">Sign-in</p></Link>
              </div>
            )}

            <Link href={"/orders"}>
              <button
                onClick={() => dispatch(createOrder())}
                className="rounded-full p-3 w-full bg-gray-200"
                disabled={products.length === 0}
              >
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isConnected ? (
        <div className="flex rounded-lg p-3 w-64 items-center gap-6 justify-center border shadow-lg">
          <div className="rounded-full p-1.5">
            <img src="utilisateur.png" alt="User Avatar" height={20} width={20} />
          </div>
          <div>
            <p className="text-green-400 font-semibold">{user.firstname}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 flex-col m-3">
          <p className="text-2xl font-semibold">Favourites</p>
          <div className="flex flex-row gap-3">
            <p>Want to see your favourites?</p>
            <div className="flex items-center justify-center gap-3">
              <a href="/register" className="underline text-gray-500">Sign-in</a>
              <p>or</p>
              <a href="/login" className="text-gray-500 underline">Join-us</a>
            </div>
          </div>
        </div>
      )}

      {isValid && isConnected ? (
        <div className="flex items-center flex-col gap-3">
          <p>Order validated</p>
          <p>Delivering Soon</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
