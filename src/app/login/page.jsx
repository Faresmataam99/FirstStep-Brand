"use client";
import { loginAction } from "@/lib/store/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isConnected = useSelector((state) => state.user.isConnected);

  const dispatch = useDispatch();
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
        localStorage.setItem("token", response.data.token);
dispatch(loginAction(response.data.user))
        router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[url(/blured.jpg)] p-10 bg-cover w-screen h-screen">
        <div className="flex items-center justify-center gap-6 bg-white rounded-lg p-4">
          <form className="flex flex-col gap-6" onSubmit={submit}>
            <div className="flex flex-col gap-2">
            <h1 className="text-lg ">Email address</h1>
            <input
              type="email"
              id="email"
              value={email}
              className="w-96 bg-gray-300 p-2 text-lg rounded-full "
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            
            <div className="flex gap-2 flex-col">
            <h2 className="text-lg">Password</h2>
            <input
              type="password"
              id="password"
              value={password}
              className="w-96 p-2 text-lg bg-gray-300 rounded-full "
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center m-4 px-8 py-3 font-lg border-black border-2 w-fit rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Log in
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}



