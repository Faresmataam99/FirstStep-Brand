"use client"; 
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import api from "../../lib/api";

export default  () => {


    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone]= useState('');
    const [name, setName] = useState('');


const router = useRouter();
    const products = useSelector(state => state.cart.products);

    const submit = async (e) => {
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
                <input 
                    type="text" 
                    placeholder="Enter your phone number"
                    className="w-96 rounded-full text-lg p-3 hover:bg-gray-200 border transition-all duration-200" 
                    onChange={(e) => setPhone(e.target.value)} 
                />

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
                <button
                    type="submit" 
                    className="rounded-full bg-black text-white px-4 py-2"
                >
                    Confirm
                </button>
            </form>
        </div>

    );
};

