import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

export const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null; 

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded duration-200 w-[300px]">
        
        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold">Order Now</h1>
          <button
            onClick={() => setOrderPopup(false)}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
        </div>

        {/* form section */}
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:opacity-90"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};