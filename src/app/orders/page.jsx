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
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
     <div className="modal w-fit h-fit bg-white shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-[26px] max-w-[450px] p-5">
         <form className="form flex flex-col gap-5">
             <div className="payment--options w-full grid grid-cols-3 gap-5 p-2.5">
                 <button className="h-[55px] bg-gray-200 rounded-[11px] flex items-center justify-center border-0 outline-none">
                     <img src="apple.png" alt="Apple" height={20} width={20} />
                 </button>
                 <button className="h-[55px] bg-gray-200 rounded-[11px] flex items-center justify-center border-0 outline-none">
                     <img src="google.png" alt="Google" height={20} width={20}/>
                 </button>
                 <button className="h-[55px] bg-gray-200 rounded-[11px] flex items-center justify-center border-0 outline-none">
<img src="visa.png" alt="" height={20} width={20} />
                 </button>
             </div>
             <div className="separator w-full grid grid-cols-[1fr_2fr_1fr] gap-2.5 text-gray-500">
                 <p className="break-keep block text-center font-semibold text-[11px] m-auto">OR</p>
                 <span className="line inline-block w-full h-[1px] bg-gray-300 m-auto"></span>
             </div>
             <div className="credit-card-info--form flex flex-col gap-4">
                 <div className="input_container w-full flex flex-col gap-[5px]">
                     <label className="input_label text-[10px] text-gray-500 font-semibold">Card Number</label>
                     <input type="text" class="input_field w-auto h-[40px] px-4 rounded-[9px] outline-none bg-gray-200 border border-transparent transition-all focus:border-transparent focus:shadow-[0px_0px_0px_2px_#242424] focus:bg-transparent" />
                 </div>
                 <div className="split grid grid-cols-[4fr_2fr] gap-4">
                     <input type="text" class="w-full" placeholder="MM/YY" />
                     <input type="text" class="w-full" placeholder="CVC" />
                 </div>
             </div>
            <Link href={"/"}> <button className="rounded-lg w-full bg-black text-white px-4 py-2 hover:bg-gray-500 transition-all duration-200">
                 Purchase
             </button></Link>
         </form>
     </div>
 </div> 
      )}
    </>
  );
};
