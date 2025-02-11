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
      alert("Wrong credentials");
    }
  };



  return (
    <>
      <div className="flex items-center justify-center bg-[url(/blured.jpg)] p-10 bg-cover w-screen h-screen">
        <div className="flex items-center justify-center gap-6 border rounded-lg bg-black p-4">
          <form className="flex flex-col gap-6" onSubmit={submit}>
            <h1 className="text-white">Email address</h1>
            <input
              type="email"
              id="email"
              value={email}
              className="w-96 p-2 text-lg hover:bg-gray-200 transition-all duration-200"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2 className="text-white">Password</h2>
            <input
              type="password"
              id="password"
              value={password}
              className="w-96 p-2 text-lg hover:bg-gray-200 transition-all duration-200"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="group w-full group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-orange-500 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-orange-400 relative bg-neutral-800 h-16  border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-white before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-orange-500 after:right-8 after:top-3 after:rounded-full after:blur-lg items-center justify-center"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}



