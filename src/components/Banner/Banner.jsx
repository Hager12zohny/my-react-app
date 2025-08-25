import React from 'react'
import girlshopping from '../../assets/girlshopping.jpeg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";


export const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center" >
               {/* Image */}
               <div data-aos="zoom-in">
                <img src={girlshopping} alt="" 
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                />
               </div>
                {/* Text */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl font-bold">Bags Sale Up to 50% Off</h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5">Enjoy Our 50% off on all of our limited edition bags for the summer.Get yours now!</p>
                    <div className="flex flex-col gap-4">
                        <div  data-aos="fade-up" className=" flex items-center gap-4">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                          <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                          <p>Fast Delivery</p>

                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                          <MdOutlinePayment  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-500"/>
                          <p>Every Payment method</p>

                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                          <BiSolidOffer  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-200 dark:bg-pink-400"/>
                          <p>Get Offer</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
