"use client"; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {validateOrder} from "@/lib/store/ordersSlice"
import api from "../../lib/api";

export default  () => {


    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone]= useState('');
    const [name, setName] = useState('');


const router = useRouter();
    const products = useSelector((state) => state.cart.products);
    const isValid = useSelector((state)=> state.orders.isValid)

    const submit = async (e) => {
        const router= useRouter()
        const dispatch = useDispatch()
        e.preventDefault();
        try {
            await api.post("/orders", {
                email,
                adress,
                phone,
                name,
                products,
            });
            router.push('/cart'); 
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-orange-300">
            <form 
                onSubmit={submit} 
                className="flex items-center justify-center flex-col gap-5 bg-white hover:shadow-lg rounded-lg p-4 hover:shadow-white"
            >
                <input 
                    type="email"  
                    placeholder="Enter your email"
                    className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                
{/* phone panel */}
<div class="bg-white p-4 rounded-lg max-w-[350px]">
            <label class="text-gray-600 text-sm">
                Phone number
            </label>
            <div class="relative mt-2 max-w-xs text-gray-500">
                <div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select class="text-sm outline-none rounded-lg h-full">
                        <option>US</option>
                        <option>DZD</option>
                        <option>MR</option>
                    </select>
                </div>
                <input type="number" placeholder="+1 (555) 000-000" class="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"/>
            </div>
        </div>
{/* phone panel */}
                <input 
                    type="text"   
                    placeholder="Enter your name"
                    className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200" 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text"  
                    placeholder="Enter your address"
                    className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200" 
                    onChange={(e) => setAdress(e.target.value)} 
                />
                <button onClick={()=>dispatch(validateOrder(orders))}
                    type="submit" 
                    className="rounded-full bg-black text-white px-4 py-2"
                >
                    Confirm
                </button>
            </form>
        </div>

    );
};

