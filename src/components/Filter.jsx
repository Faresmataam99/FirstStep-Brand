"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const Filter = () => {
  const [showFilter, setShowfilter] = useState(true);
  const [filter, setFilter] = useState("Hide filter");
  const [activeItem, setActiveItem] = useState(null);

  const toggleFilter = () => {
    setShowfilter((prev) => !prev);
    setFilter(showFilter ? "Show filter" : "Hide filter");
  };

  const toggleItem = (index) => {
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
        { color: "bg-white border border-gray-300" },
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
      {/* Filter Section */}
      {showFilter && (
        <div className="flex flex-col gap-4 bg-white px-10 py-4 border  sticky h-fit top-4 ">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div
                  className="flex gap-3 justify-between cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <span className= "font-semibold">{item.label}</span>
                  <span>{activeItem === index ? "▲" : "▼"}</span>
                </div>
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
        </div>
      )}
    </>
  );
};

export default Filter;
