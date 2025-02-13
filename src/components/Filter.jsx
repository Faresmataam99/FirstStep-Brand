"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [showFilter, setShowFilter] = useState(true);
  const [filter, setFilter] = useState("Hide filter");
  const [activeItem, setActiveItem] = useState(null);

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {};
        if (searchQuery) {
          params.title = searchQuery;
        }
        if (selectedCategory !== "all") {
          params.category = selectedCategory;
        }
        if (sortOption !== "default") {
          const [sortBy, sortDirection] = sortOption.split("-");
          params.sortby = sortBy;
          params.sortDirection = sortDirection === "asc" ? 1 : -1;
        }

        const response = await axios.get("http://localhost:5000/products", { params });
        setProducts(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, [searchQuery, selectedCategory, sortOption]);

  // Toggle visibility of the filter
  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
    setFilter(showFilter ? "Show filter" : "Hide filter");
  };

  // Handle toggling the active filter section
  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  // Filter items with various categories
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
        <div className="flex flex-col gap-4 bg-white px-10 py-4 border sticky h-fit top-4 ">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div
                  className="flex gap-3 justify-between cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold">{item.label}</span>
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
                            onClick={() => setSearchQuery(option.color)} // Optional: Set searchQuery to color selected
                          ></div>
                        ))}
                      </div>
                    ) : (
                      item.options.map((option, i) => (
                        <li
                          key={i}
                          className="text-sm hover:bg-gray-200 p-1 rounded cursor-pointer"
                          onClick={() => {
                            // Update category or other filters based on the selection
                            if (item.label === "Gender") {
                              setSelectedCategory(option);
                            }
                            if (item.label === "Brands") {
                              setSearchQuery(option); // Example: search by brand
                            }
                          }}
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
