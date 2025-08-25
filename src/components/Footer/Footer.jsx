import React from 'react'
import Banner from '../../assets/footerpattern.jpeg'
import footerlogo from '../../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const FooterLinks=[
{
title: "Home",
link: "/#",
},
{
title: "About",
link: "/#about",
},
{
title: "Contact",
link: "/#contact",
},
{
title: "Blog", link: "/#blog",
},]
export const Footer = () => {
  return (
    <div  style={BannerImg} className="text-white ">
        <div className="container">
            <div
            data-aos="zoom-in"
            
            className="grid md:grid-cols-3 pb-44 pt-5">
              {/* company details */}
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flext items-center gap-3">
                    <img src={footerlogo}  
                    className="max-w-[50px]"alt="" />
                    Cara's</h1>
                <p className="text-sm text-gray-200">
          Designed with love for women who shine. Cara’s – Your fashion, your statement.  
                </p>
              </div>
              {/* Footer links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                        <ul className="flex flex-col gap-3">{
                            FooterLinks.map((link)=>(
                            <li className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200" key={link.title}> <span>{link.title}</span></li>
                            ))
                        }
                        </ul>

                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                        <ul className="flex flex-col gap-3">{
                            FooterLinks.map((link)=>(
                            <li className="cursor-pointer hover:text-amber-500 hover:translate-x-1 duration-300 text-gray-200" key={link.title}> <span>{link.title}</span></li>
                            ))
                        }
                        </ul>

                    </div>
                </div>
                {/* Social links */}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#"><FaInstagram  className="text-3xl"/></a>
                         <a href="#"><FaFacebook  className="text-3xl"/></a>
                          <a href="#"><FaLinkedin className="text-3xl"/></a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Maadi, Cairo, Egypt</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt/>
                            <p>+02 1026794510</p>
                        </div>

                    </div>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

