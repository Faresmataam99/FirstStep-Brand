"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation"; 
import { addToCart } from "@/lib/store/cartSlice";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [query,setQuery]=useState("")


  const isConnected = useSelector((state) => state.user.isConnected);
  const router = useRouter(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if(query){
          const response = await axios.get(`http://localhost:5000/products?title=${query}`);
          setProducts(response.data);
        }else{
          const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
        }
        
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  // const handleViewDetails = (productId) => {
  //   router.push(`/shopping/${productId}`);
  // };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <Link href={`/shopping/${product.id}`} key={product.id}> 
            <div className="border hover:-translate-y-3 transition-all duration-200 ">
              <img
                src={product.image}
                className="w-full"
              />
              <div className="flex flex-col gap-3 p-3">
                <div className="flex justify-between ">
                  <p className="font-semibold text-lg">{product.title}</p>
                  <span className="font-semibold text-green-400">
                    {product.stock}
                  </span>
                </div>
                <span className="font-light text-lg">
                  {product.price} <span>DZD</span>
                </span>
                <button onClick={()=>dispatch(addToCart)} className=" w-fit  px-3 py-1.5 rounded-full bg-black text-white font-semibold hover:bg-gray-600 transition-all duration-200">
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Shopping;