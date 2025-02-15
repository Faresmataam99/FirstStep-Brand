"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/cartSlice";

export default () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const params = useParams();
  const [quantity,setQuantity]=useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${params.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [params.id]);

  const onMouseImages = (image) => {
    setSelectedImage(image);
  };

  // Set the selected size when a user clicks on a size option
  const handleSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };
  const handleQuantitySelection = (selectedQuantity) => {
    // Ensure the quantity is a positive integer
    if (selectedQuantity <= 0 || isNaN(selectedQuantity)) {
      setQuantity(1); // Default to 1 if invalid input
    } else {
      setQuantity(Number(selectedQuantity)); // Ensure it's a number
    }
  };
  

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size before adding to the cart.");
      return;
    }
    dispatch(addToCart({ product, selectedSize: size, selectedQuantity: quantity }));
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-center p-20">
        <div className="grid grid-cols-2 gap-2 flex-grow">
          <div className="col-span-9 h-full">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        {/* Second Panel (Product Details and Add to Cart Section) */}
        <div className="flex flex-col sticky top-0 right-0 m-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <h1 className="text-lg font-light">{product.category}</h1>
            <span className="text-xl font-light">{product.price} DZD</span>
          </div>

          {/* Select Size and Size Guide */}
          <div className="flex items-center flex-col gap-3 m-auto">
            <div className="flex justify-between w-full gap-4">
              <h1 className="hover:underline font-semibold">Select size</h1>
              <p className="hover:underline font-semibold">Size guide</p>
            </div>
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-4">
                {product.sizes?.map((sizeOption, index) => (
                  <li
                    key={index}
                    onClick={() => handleSizeSelection(sizeOption)} // Set the selected size
                    className="border cursor-pointer rounded-lg p-3 hover:bg-gray-200 duration-200 transition-all"
                  >
                    {sizeOption}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center  justify-center">
<input type="number" value={quantity} className="bg-gray-200 p-4 rounded-full flex items-center justify-center w-20 text-lg" onChange={(e)=>handleQuantitySelection(e.target.value)}  /> 
              </div>
          </div>

          {/* Add to Cart and Favourites */}
          <div className="flex items-center justify-center flex-col mt-5">
            <div className="flex items-center justify-center gap-2 flex-col">
            <button
  onClick={handleAddToCart}
  className="rounded-full px-7 py-4 bg-black text-white w-full hover:bg-gray-200 transition-all duration-200"
  disabled={!size || !quantity || quantity <= 0}
>
  Add to bag
</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
