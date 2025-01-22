"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = async (e) => {
    e.preventdefault();
    try {
      const response = await axios.post("https:localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data);
      router.push("/");
    } catch (error) {
      console.log(e);
      alert("wrong credentials");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-[url(/blured.jpg)] p-10 bg-cover w-screen h-screen">
        <div className="flex items-center justify-center gap-6 ">
          <form action="" method="post" className="flex flex-col  gap-6">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="name"
              className="w-96 p-2 text-lg hover:bg-gray-200 transition-all duration-200"
              onChange={(e)=>setemail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="w-96 p-2 text-lg hover:bg-gray-200 transition-all duration-200"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <button className="px-3 py-1.5 bg-black hover:bg-gray-700 transition-all duration-200 text-white font-semibold">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
};
