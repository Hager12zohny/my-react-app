import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "New Arrivals",
    link: "/new",
  },
  {
    id: 2,
    name: "Dresses",
    link: "/dresses",
  },
  {
    id: 3,
    name: "Tops & Tees",
    link: "/tops",
  },
  {
    id: 4,
    name: "Sale",
    link: "/sale",
  }
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
          {/* Upper navbar */}
            <div className=" bg-pink-300 py-2">
              <div className="container flex justify-between items-center">
                <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                  <img src={logo} alt="logo"
                  className="w-10" />
                  Cara's
                </a>
                </div>
              
             {/* Search bar and order button */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 pr-10 focus:outline-none focus:border-1 focus:border-primary bg-white"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 text-xl" />
            </div>

            {/* Order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-pink-500 to-amber-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <FaCartShopping className="text-xl text-white drop-shadow-sm" />
              <span className="group-hover:opacity-100 opacity-0 transition-all duration-200 w-0 group-hover:w-auto">
                Order
              </span>
            </button>
             {/* Dark mode */}
             <div>
              <DarkMode/>
             </div>
          </div>
        </div>
      </div>

      {/* Lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items center gap-4">
          {
            Menu.map((data)=>(
              <li key={data.id}> <a href={data.link} className="inline-block px-4 hover:text-amber-400 duration-200">{data.name}</a></li>

            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;