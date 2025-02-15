"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateOrder } from "@/lib/store/ordersSlice";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OrdersPage() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user.user);
  const [validatedOrders, setValidatedOrders] = useState({}); // Track validated orders

  const isValid = useSelector((state) => state.orders.isValid);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        setOrders(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchOrders();
  }, []);

  const validate = (orderId) => {
    localStorage.setItem(`order_${orderId}`, true);
    setValidatedOrders((prev) => ({
      ...prev,
      [orderId]: true, // Mark order as validated
    }));
    dispatch(validateOrder(orderId));
  };

  const generateChartData = () => {
    const orderCounts = {};

    // Group orders by date
    orders.forEach((order) => {
      const date = new Date(order.date).toLocaleDateString();
      orderCounts[date] = (orderCounts[date] || 0) + 1;
    });

    const labels = Object.keys(orderCounts);
    const data = Object.values(orderCounts);

    return {
      labels: labels,
      datasets: [
        {
          label: "Number of Orders",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <>
      {user.isAdmin ? (
        <div className="flex items-center p-4 border flex-col rounded-lg">
          <div className="flex items-center">
            <ul className="flex items-center flex-col gap-3 ">
              {orders.map((order, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between p-10 w-screen">
                    <div className="flex flex-col ">
                      <h1 className="font-semibold">{order.email}</h1>
                      <h2 className="font-semibold">{order.adress}</h2>
                      <h3 className="font-semibold">{order.phone}</h3>
                    </div>

                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => validate(order.id)}
                        className={`px-4 py-1.5 rounded-lg transition-all duration-200 ${
                          validatedOrders[order.id]
                            ? "bg-white text-green-600 border border-green-600"
                            : "bg-green-500 text-white hover:bg-green-800"
                        }`}
                      >
                        {validatedOrders[order.id] ? "Validated" : "Validate"}
                      </button>
                    </div>
                  </div>
                  <hr className="w-full" />
                </li>
              ))}
            </ul>
          </div>

          <div style={{ width: "80%", height: "400px", marginTop: "20px" }}>
            <Bar data={generateChartData()} />
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen justify-center items-center">
          <p className="">Data not found</p>
        </div>
      )}
    </>
  );
}
