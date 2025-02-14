"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Shopping from "@/components/Shopping";

export default function FilterMenu() {
  const [showFilter, setShowfilter] = useState(true);
  const [filter, setFilter] = useState("Hide filter");
  const [activeItem, setActiveItem] = useState(null); // Track the active item

  const toggleFilter = () => {
    setShowfilter((prev) => !prev);
    setFilter(showFilter ? "Show filter" : "Hide filter");
  };

  const toggleItem = (index) => {
    // Toggle the active item or reset it
    setActiveItem(activeItem === index ? null : index);
  };

  const items = [
    { label: "Gender", options: ["Male", "Female"] },
    { label: "Kids", options: ["Boys", "Girls"] },
    {
      label: "Kids age",
      options: [
        "Babies & toddlers (0-3 yrs)",
        "Little kids (3-7 yrs)",
        "Big Kids (7-15 yrs)",
      ],
    },
    { label: "Sale offers", options: ["Sales"] },
    {
      label: "Color",
      options: [
        { color: "bg-red-500" },
        { color: "bg-blue-600" },
        { color: "bg-green-500" },
        { color: "bg-yellow-400" },
        { color: "bg-black" },
        { color: "bg-gray-500" },
        { color: "bg-pink-600" },
        { color: "bg-purple-600" },
        { color: "bg-white border border-gray-300" }, // White with border
      ],
    },
    {
      label: "Shop by price",
      options: ["£0-25", "£25-50", "£50-100", "Over £150"],
    },
    { label: "Brands", options: ["Nike", "Converse", "Jordan"] },
    {
      label: "Sports & activities",
      options: ["Swimming", "Football", "Basketball", "Running"],
    },
    { label: "Best for", options: ["Wet weather", "Cold weather"] },
  ];

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4 bg-white p-4">
          <div>
            <h1 className="text-xl font-semibold">New releases</h1>
            <p className="text-sm font-semibold">Pick up today</p>
          </div>
          <div className="flex items-center gap-4">
            <h1
              onClick={toggleFilter}
              className="cursor-pointer rounded-lg hover:bg-gray-200 transition-colors px-3 py-1.5 duration-200"
            >
              {filter}
            </h1>
            <select className="hover:bg-gray-200 rounded-lg px-3 py-1.5  transition-colors duration-200">
              <option>Sort by</option>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: High-low</option>
              <option>Price: Low-high</option>
            </select>
          </div>
        </div>

        {/* Filter Section and Content */}
        <div className="flex  gap-2">
          {showFilter && (
            <motion.div
              className="flex flex-col gap-4 bg-white p-4 border sticky h-fit max-w-screen-lg top-4"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <div
                      className="flex gap-3 items-center cursor-pointer max-w-sm"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="text-lg font-semibold">{item.label}</span>
                      <span>{activeItem === index ? "▲" : "▼"}</span>
                    </div>
                    {/* Show options if the item is active */}
                    {activeItem === index && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {item.label === "Color" ? (
                          <div className="flex gap-2 flex-wrap">
                            {item.options.map((option, i) => (
                              <div
                                key={i}
                                className={`w-6 h-6 rounded-full ${option.color}`}
                              ></div>
                            ))}
                          </div>
                        ) : (
                          item.options.map((option, i) => (
                            <li
                              key={i}
                              className="text-sm hover:bg-gray-200 p-1 rounded"
                            >
                              {option}
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          {/* Shopping Section */}
          <div className="md:col-span-3">
            <Shopping />
          </div>
        </div>
      </div>
    </>
  );
}
