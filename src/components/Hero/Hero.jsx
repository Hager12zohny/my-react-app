import React, { useState, useEffect } from 'react';

import Image1 from '../../assets/hero/dresses.jpeg';
import Image2 from '../../assets/hero/bags.jpeg';
import Image3 from '../../assets/hero/shopping.jpg';
import GirlImage from '../../assets/hero/girl.jpg';

const ImageList = [
  {
    id: 4,
    img: GirlImage,
    title: "Summer Collection",
    description: "Discover our new arrivals with exclusive 30% off for first purchases.",
  },
  {
    id: 1,
    img: Image1,
    title: "New Season Dresses - 40% Off",
    description: "Discover our latest collection of summer dresses with special introductory prices. Perfect for any occasion from brunch to beach parties.",
  },
  {
    id: 2,
    img: Image2,
    title: "Limited Edition Handbags",
    description: "Elevate your style with our exclusive handbag collection. Only available while stocks last.",
  },
  {
    id: 3,
    img: Image3,
    title: "Weekend Sale - Up to 60% Off",
    description: "Don't miss our weekend flash sale on selected tops, jeans, and accessories. Sale ends Sunday midnight.",
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % ImageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? ImageList.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % ImageList.length);
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200">
      {/* Background shape */}
      <div className="h-[700px] w-[700px] bg-pink-300/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Slide Content */}
      <div className="container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center py-12">
          {/* Text */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            <h1 
            data-aos="zoom-out"
             data-aos-duration="500"
            data-aos-once="true"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              {ImageList[current].title}
            </h1>
            <p 
            data-aos="fade-up"
             data-aos-duration="500"
             data-aos-delay="100"
            className="text-lg mb-6">
              {ImageList[current].description}
            </p>
            <button 
            data-aos="fade-up"
             data-aos-duration="500"
             data-aos-delay="300"
            
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 sm:order-2">
           <div 
           data-aos="zoom-in"
           data-aos-once="true"

           className="h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] bg-pink-200 rounded-full overflow-hidden flex items-center justify-center">
             <img
              src={ImageList[current].img}
              alt={ImageList[current].title}
              className="w-full h-full object-cover"
              />
  </div>
</div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {ImageList.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-pink-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
