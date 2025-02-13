"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import {user} from "@/lib/store/userSlice"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement,PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useDispatch, useSelector } from "react-redux";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale,PointElement, LinearScale);

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const dispatch=useDispatch()

  const user = useSelector ((state)=>(state.user.user))


  // Fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get("http://localhost:5000/users");
        const productsResponse = await axios.get("http://localhost:5000/products");
        const ordersResponse = await axios.get("http://localhost:5000/orders");

        setUsers(usersResponse.data);
        setProducts(productsResponse.data);
        setOrders(ordersResponse.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);

  // Chart Data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 6000, 9000, 11000, 15000, 16000, 20000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Orders',
        data: [100, 200, 300, 400, 500, 600, 700],
        borderColor: 'rgba(53, 162, 235, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <>
    {
      user.isAdmin?(

      <div className="flex gap-6">
        {/* Side Panel */}
        <div className="flex flex-col justify-center w-20 p-3 border shadow-lg">
          <div className="flex items-center flex-col p-3 m-3 gap-10">
            {/* Nike */}
            <div className="flex items-center flex-col hover:bg-orange-200 rounded-lg p-3">
              <img src="nike.png" alt="Nike" height={50} width={50} />
              <p className="font-semibold">Nike</p>
            </div>
            {/* Adidas */}
            <div className="flex items-center flex-col hover:bg-orange-200 rounded-lg p-3">
              <img src="adidas.png" alt="Adidas" height={50} width={50} />
              <p className="font-semibold">Adidas</p>
            </div>
            {/* New Balance */}
            <div className="flex items-center flex-col hover:bg-orange-200 rounded-lg p-3">
              <img
                src="https://w7.pngwing.com/pngs/340/831/png-transparent-new-balance-sneakers-shoe-adidas-logo-new-balance-text-converse-store.png"
                alt="New Balance"
                height={50}
                width={50}
              />
              <p className="font-semibold">New Balance</p>
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="flex gap-6 flex-col w-full">
          <div className="flex gap-10 w-full items-center justify-center p-4 ">
            <div className="rounded-lg gap-4 transition-all duration-200 bg-gray-200 px-6 flex items-center hover:bg-orange-200 py-2">
              <img src="bag.png" height={40} width={40} alt="Transactions" />
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">Transactions</p>
                <span>15.000 £</span>
              </div>
            </div>

            <div className="rounded-lg gap-4 transition-all duration-200 bg-gray-200 hover:bg-orange-200 flex items-center px-6 py-2">
              <img src="utilisateur.png" height={40} width={40} alt="Users" />
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">Users</p>
                <span>{users.length}</span>
              </div>
            </div>

            <div className="rounded-lg gap-4 transition-all duration-200 bg-gray-200 hover:bg-orange-200 flex items-center px-6 py-2">
              <img src="boite.png" height={40} width={40} alt="Products" />
              <div className="flex flex-col items-center gap-3">
                <p className="font-semibold">Products</p>
                <span>{products.length}</span>
              </div>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="border rounded p-3  flex flex-col">
            <p className="font-semibold text-lg m-3">Key Performance Indicators</p>
            <div className="flex gap-10 items-center justify-center w-full">
              <div className="rounded-lg px-4 py-2 bg-gray-200 hover:bg-orange-200 transition">
                <p className="text-gray-500 font-semibold">Revenue</p>
                <span>40,000.05 £</span>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-orange-200 transition">
                <p className="font-semibold">Net</p>
                <span>300,000 £</span>
              </div>
              <div className="bg-gray-200 rounded-lg px-4 py-2 hover:bg-orange-200 transition">
                <p className="font-semibold">Pending Orders</p>
                <span>300,000.98 £</span>
              </div>
              <div className="rounded-lg px-4 py-2 bg-gray-200 hover:bg-orange-200 transition">
                <p className="font-semibold">Due</p>
                <span>70,000.9 £</span>
              </div>
              <div className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-orange-200 transition">
                <p className="font-semibold">Overdue</p>
                <span>49,000.00 £</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-6 p-4 bg-white border rounded-lg shadow-lg">
            <h2 className="font-semibold text-lg mb-4">Sales Overview</h2>
            <Line data={chartData} />
          </div>
        </div>
      </div>
      ):(
        <p>Not found</p>
      )
    }
    </>
  );
}
