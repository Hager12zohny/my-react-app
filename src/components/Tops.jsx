import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProductsData from "./Products/ProductsData";
import { Popup } from "../components/Popup/Popup";

export const Tops = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const tops = ProductsData.filter((p) => p.category === "Tops & Tees");

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="sm:text-sm text-amber-400">Discover Tops</p>
          <h1 className="text-3xl font-bold">Tops</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tops.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
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
                <p className="text-gray-500 duration-300 line-clamp-2 text-sm">
                  {product.description}
                </p>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderClick(product)}
                  className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-amber-500 transition"
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

export default Tops;


