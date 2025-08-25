import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { NewArrivals } from './components/Products/NewArrivals'
import AOS from "aos"
import "aos/dist/aos.css"
import { Dresses } from './components/Dresses'
import { Tops } from './components/Tops'
import { Banner } from './components/Banner/Banner'
import { Subscribe } from './components/Subscribe/Subscribe'
import { Testimonial } from './components/Testimonial/Testimonial'
import { Footer } from './components/Footer/Footer'
import { Popup } from './components/Popup/Popup'
import { BrowserRouter } from "react-router-dom";
export const App = () => {
  const [orderPopup, setOrderPopup] = React.useState (false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing: 'ease-in-sine',
      delay:100,
    })
    AOS.refresh();
  },[]);
  return (
    <BrowserRouter basename="/my-react-app">
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <NewArrivals handleOrderPopup={handleOrderPopup}/>
      <Dresses handleOrderPopup={handleOrderPopup}/>
      <Tops handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
    </BrowserRouter>
  )
}


export default App
