// "use client";

// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch} from "react-redux";


// export default function WomenPage() {
//   const [women, setWomen] = useState([]);
//   const [input, setInput] = useState("");
//   const [query,setQuery]=useState('')

//   const searchTerm = 



//  useEffect(() => {
//   try{
//     if(query){
//       const fetchProducts = async()=>{
//         axios.get(`http://localhost:5000/products?=category${query}`)
//         .then((response) => setWomen(response.data.json));
//       }
//     }
//     }catch(e){
//       console.error(e)
//     }
// })



//   return (
//     <div className="flex items-center flex-col">
//       {/* Header Section */}

//       {/* Navigation Section */}
//       <div className="flex justify-between items-center p-10 w-full max-w-screen-lg">
//         <div>
//           <p className="text-2xl font-semibold">Women</p>
//         </div>
//         <div>
//           <ul className=" flex flex-row gap-6 font-semibold text-lg">
//             <li className="hover:underline">
//               <Link href="/new">Shoes</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="/cloths">Clothing</Link>
//             </li>
//             <Link href={"/accesories"}><li className="hover:underline">
// Accessories
//             </li></Link>
          
//           </ul>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex items-center justify-center flex-col">
//         <img
//           src="https://madeforthew.com/wp-content/uploads/2022/03/3840x2160_ATT_LAYOUT_GROUP_PORTRAIT_LOGO_FINAL-1024x576.png"
//           alt="Banner"
//           className="w-screen"
//         />
//         <div className="p-20">
//           <p className="text-5xl font-bold tracking-wide text-center">
//             Engineered to provide Quality gears and clothes
//             <br />
//             <span className="text-orange-500">for women</span>
//           </p>
//         </div>
//         {/* Explore Sports Section */}
//         <div className="flex justify-start w-full p-8">
//           <h1 className="text-2xl">Explore Sport</h1>
//         </div>
//         <div className="grid grid-cols-2 w-full items-center justify-center">
//           {/* First Grid Item */}
//           <div className="relative bg-cover bg-center h-80  ">
//               <img src="https://hips.hearstapps.com/hmg-prod/images/run-nike-womens-running-shoes-651da447b2045.jpg" alt="" className="h-full w-full object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white">
//               <p className="font-semibold text-lg">For a Shiny run</p>
//               <p className="text-lg font-bold">Nike Vomero Roam</p>
//               <button className="bg-white rounded-full text-black  font-semibold hover:bg-gray-400 transition-all duraiton-200 px-3 py-1.5">
//                 Shop
//               </button>
//             </div>
//           </div>
//           {/* Second Grid Item */}
//           <div className="h-80 relative bg-cover bg-center ">
// <img src="homepage.jpg" alt="" className="absolute bg-cover h-full w-full" />
//             <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white">
//               <p className="font-bold text-xl">Nike pegasus </p>
//               <p className="text-lg font-semibold">Run in the dark</p>
//               <button className="bg-white rounded-full  text-black hover:bg-gray-400 font-semibold transition-all duration-200 px-3 py-1.5 ">
//                 shop
//               </button>
//             </div>
//           </div>
//           {/* Third Grid Item */}
//          <Link href={`/shopping?search=${searchTerm}`}> <div className="h-80 relative bg-cover bg-center">
//               <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/adf3f11e-95e4-4c55-818c-e349d5dbc4b6/women-s-shoes-clothing-accessories.png" alt="" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white">
//               <p className="text-lg font-semibold">Stylish Comfort</p>
//               <p className="text-lg font-bold">Nike zoom 3 next</p>
//               <button className="bg-white text-black rounded-full  hover:bg-gray-300 font-semibold transition-all duration-200 px-3 py-1.5">
//                 Shop
//               </button>
//             </div>
//           </div></Link>
//           {/* Fourth Grid Item */}
//       <div className="h-80 relative bg-cover bg-center">
//             <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/bb362451-47b0-4432-821f-005cccc841dd/W+NIKE+V2K+RUN.png" alt="" className="bg-cover w-full h-full object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-4 text-white">
//               <p className="text-lg font-semibold">All Condition Gear</p>
//               <p className="text-lg font-bold"> ACG Run and Train </p>
//               <button className="bg-white rounded-full text-black font-semibold px-4 py-1.5 hover:bg-gray-300 transition-all duration-200">
//                 Shop
//               </button>
//             </div>
//           </div>
//         </div>

         
        

//         {/* end of the grid section */}

//         <section className="flex items-center justify-center p-4 gap-10 mt-20 mb-5">
//           <Link href={`/shopping?search=${searchTerm} `}>
//             <div className="font-semibold hover:-translate-y-4 transition-all duration-200 flex justify-start flex-col ">
//               <img
//                 src="./jump.jpg"
//                 alt=""
//                 className="object-cover"
//                 height={600}
//                 width={600}
//               />
//               <p className="text-xl ">Clothing</p>
//             </div>
//           </Link>

//           <Link href={`/shopping?search=${searchTerm}`}>
//             <div className="flex justify-start hover:-translate-y-4 transition-all duration-200 flex-col font-semibold ">
//               <img
//                 src="./modelK.jpg"
//                 alt=""
//                 height={500}
//                 width={500}
//                 className="object-cover"
//               />
//               <p className="text-xl">Shoes</p>
//             </div>
//           </Link>

//           <Link href={`/shopping?search=${searchTerm}`}>
//             <div className="flex font-semibold justify-start flex-col hover:-translate-y-4 transition-all duration-200">
//               <img src="./run.jpg" alt="" height={500} width={500} />
//               <p className="text-xl">Running gear</p>
//             </div>
//           </Link>
//           <Link href={`/shopping?search=${searchTerm}`}>
//             <div className="flex  justify-start font-semibold transition-all duration-200 hover:-translate-y-4 flex-col">
//               <img
//                 src="./lightsaround.jpg"
//                 alt=""
//                 height={500}
//                 width={500}
//                 className="object-cover"
//               />
//               <p className="text-xl">Accessories</p>
//             </div>
//           </Link>
          
//         </section>
//       </div>
//     </div>
//   );
// }
