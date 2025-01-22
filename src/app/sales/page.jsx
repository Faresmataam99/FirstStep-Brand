"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id)); 
      })
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-orange-400 shadow-xl">
        <form
          action=""
          method="post"
          className="flex items-center justify-center gap-10 flex-col "
        >
          <label htmlFor="products">Search Product:</label>
          <input
            className="rounded-full px-10 py-1.5 hover:bg-gray-300 transition-all duration-200"
            type="text"
            placeholder="Search Product..."
            id="products"
            name="products"
            onChange={(e) =>setProducts(e.target.value)} 
          />
          <h1>Select Size</h1>
          <select name="size" id="size">
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
          </select>
          <button
            type="button"
            className="bg-black text-white px-3 py-1.5 hover:bg-gray-700 transition-all duration-200 rounded-full"
          >
            Find product
          </button>
        </form>
        <div className="grid gap-4 mt-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p>Stock: {product.stock}</p>
              <div className="flex gap-2 mt-4">
                <Link href={`/edit/${product.id}`} className="text-blue-900">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
