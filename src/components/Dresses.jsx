import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProductsData from "./Products/ProductsData";
import { Popup } from "../components/Popup/Popup"; 

export const Dresses = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dresses = ProductsData.filter(p => p.category === "Dresses");

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="sm:text-sm text-amber-400">Discover Dresses</p>
          <h1 className="text-3xl font-bold">Dresses</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dresses.map(product => (
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

                {/* ✅ Order Button */}
                <button
                  onClick={() => handleOrderClick(product)}
                  className="mt-3 bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-500"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        product={selectedProduct}
      />
    </div>
  );
};

export default Dresses;
