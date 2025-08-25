import React from "react";
import { FaStar } from "react-icons/fa";
import ProductsData from "./ProductsData";

export const NewArrivals = () => {
  const newArrivals = ProductsData.filter(p => p.category === "New Arrivals");

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="sm:text-sm text-amber-400">New Arrivals for you</p>
          <h1 className="text-3xl font-bold">New Arrivals</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newArrivals.map(product => (
            <div
              key={product.id}
              className="group bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:bg-black hover:text-white transition duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
                <p className="text-gray-500 group-hover:text-white duration-300 line-clamp-2 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
         {/* view all button */}
         <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-pink-600 text-white py-1 px-5  rounded-md">View All</button>
         </div>
      </div>
    </div>
  );
};

export default NewArrivals;

