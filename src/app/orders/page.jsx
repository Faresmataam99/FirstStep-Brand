"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setProducts } from "@/lib/store/cartSlice";
import api from "../../lib/api";
import Link from "next/link";

export default () => {
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState(""); // Fixed variable name
  const [lastname, setLastname] = useState(""); // Fixed variable name
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const router = useRouter();
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      dispatch(setProducts(JSON.parse(storedProducts)));
    }
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the product payload structure according to the expected API format
      const productData = products.map((product) => ({
        product: product.product.id,  // Assuming the product object needs only the product ID
        stock: product.product.stock,  // Assuming stock is a property in the product object
      }));

      // Sending the order data to the API
      await api.post("/orders", {
        email,
        adress,
        phone,
        lastname,
        firstname,
        products: productData,
      });

      setIsModalOpen(true); // Show modal after submitting
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-full p-10 bg-orange-300">
        <form
          onSubmit={submit}
          className="flex items-center justify-center flex-col gap-5 bg-white hover:shadow-lg rounded-lg p-4 hover:shadow-white"
        >
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="bg-white p-4 rounded-lg max-w-[350px]">
            <label className="text-gray-600 text-sm">Phone number</label>
            <div className="relative mt-2 max-w-xs text-gray-500">
              <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                <select className="text-sm outline-none rounded-lg h-full">
                  <option>US</option>
                  <option>DZD</option>
                  <option>MR</option>
                </select>
              </div>
              <input
                value={phone}
                type="number"
                placeholder="+1 (555) 000-000"
                className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <input
            value={firstname}
            type="text"
            placeholder="Enter your first name"
            className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            value={lastname}
            type="text"
            placeholder="Enter your last name"
            className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200"
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            value={adress}
            type="text"
            placeholder="Enter your address"
            className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200"
            onChange={(e) => setAdress(e.target.value)}
          />

          <div className="flex items-center justify-center gap-4 p-5 max-w-screen-lg">
            <ul className="flex items-center gap-3">
              {products.map((product, index) => (
                <Link href={`/shopping/${product.product.id}`} key={product.product.id}>
                  <li className="flex items-center gap-4 border">
                    <img src={product.product.image} className="w-[100px] object-cover rounded-lg" />
                    <div className="flex flex-col gap-2 p-4">
                      <h2 className="text-xl font-semibold">{product.product.title}</h2>
                      <h3 className="text-lg font-light">{product.product.price} DZD</h3>
                      <h3 className="font-semibold">Size: {product.selectedSize}</h3>
                      <h3 className="font-semibold">Quantity: {product.selectedQuantity}</h3>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <button type="submit" className="rounded-full bg-black text-white px-4 py-2">
            Confirm Order
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="flex items-center justify-center gap-4">
              <img src="carte-de-credit.png" alt="" height={30} width={30} />
              <span>Total Price</span>
            </div>
            <div>
              <input
                type="password"
                placeholder="*********"
                className="rounded-full p-2 w-72 bg-gray-200"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="mt-4 font-semibold text-green-300">Order confirmed</p>
              <p className="font-semibold">Quick and trusted Delivery</p>
              <img src="dhl.png" alt="" height={50} width={50} className="my-4" />
             <Link href={"/"}> <button className="rounded-full bg-black text-white px-6 py-2">Confirm Payment</button></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
