"use client";

import AppRouteRouteModule from "next/dist/server/route-modules/app-route/module";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { context } from "react"; // Adjust the path to where your context is defined.

const Shopping = () => {
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://localhost:5000/products", {
          image,
          stock,
          title,
          price,
          realaeseDate,
        });
      } catch (e) {
        res.status(422).json((alert = "no items found"));
      }
    };
  });

  const products = [
    {
      title: "Alpha Fly Next",
      image: "https://www.rundome.gr/2977648/nike-air-zoom-alphafly-next-3.jpg",
      price: "199.99",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://image.goxip.com/2u6oibm-hmyNdSAwVDWxt9vTOpg=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Zoom-Pegasus-37-White-Multi-Color-Product.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/05/20161616/Best-Nike-Running-Shoes-Nike-Vomero-17-Product-Photo-copy-1.jpg",
      price: "150.00",
      stock: "Available",
    },
    {
      title: "Zoom Pegasus",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d09109-ca02-4bc9-97b3-3d4c99c3a0c2/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png",
      price: "150.00",
      stock: "Available",
    },
  ];
const handleViewDetails = (productId)=>{
router.push(`/shopping/${productId}`)
}
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
       <Link href="/article/id" ><div
            key={index}
            className="border p-4 hover:-translate-y-3 transition-all duration-200"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-72"
            />
            <div className="flex flex-col ">
              <div className="flex justify-between">
              <p className="font-semibold">{product.title}</p>
              <span className="font-semibold text-green-400">
                {product.stock}
              </span>
              </div>
              <span className="font-light">{product.price} <span>£</span> </span>
              <button className="mt-2 w-fit justify-end px-3 py-1.5 rounded-full bg-black text-white font-semibold hover:bg-gray-600 transition-all duration-200">
                Add to cart
              </button>
            </div>
          </div></Link>
        ))}
      </div>
    </>
  );
};
export default Shopping;
