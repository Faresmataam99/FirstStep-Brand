"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [issue,setIssue]=useState('')
    const [phone,setPhone]=useState('')
    const sendHelp = async (e) => {
        e.preventDefault()
      try {
        const response = await axios
          .post("http://localhost:5000/assistance",{
            name,
            issue,
            email,
            phone,
          })
          .then((response) => setIssue(response.data));
      } catch (e) {
        console.error({ message: "error sending" });
        alert("error sending information, try again later ");
      }
    };



  return (
    <>
      <div className="flex flex-col gap-3 max-w-screen-xl">
        <div className="flex items-cetner border rounded-lg px-3">
          <img src="message.png" alt="" height={35} width={35} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <form className="flex flex-col gap-4 items-center">
                <p>Name</p>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="rounded-full border hover:bg-gray-200 hover:shadow-lg transition-all duration-200 p-2 text-lg" />
              <p>Email</p>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}   className="rounded-full border hover:bg-gray-200 hover:shadow-lg transition-all duration-200 p-2 text-lg" />
              <p>Phone Number</p>
              {/* phone panel */}
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
              {/* phone panel */}
              <div>
            <input type="text" onChange={(e)=>setIssue(e.target.value)} value={issue} className="rounded-lg bg-gray-200 hover:shadow-lg transition-all duration-200 h-64 w-80 p-2 text-md justify-start flex" placeholder="write down your issue" />
              </div>
              <button onClick={sendHelp} className="rounded-full bg-black text-white px-4 py-2 font-semibold hover:bg-gray-600 transition-all duration-200">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
