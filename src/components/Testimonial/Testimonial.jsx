import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Mariam Adel",
    text: "The quality of the dresses is amazing! I bought two for a wedding and got so many compliments. Definitely shopping again.",
    img: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 2,
    name: "Nour Hassan",
    text: "I love how easy it is to browse and order. The tops I received look exactly like the photos and fit perfectly.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Salma Youssef",
    text: "Fast delivery and beautiful packaging! The dress fabric feels so soft and elegant. Worth every pound.",
    img: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 4,
    name: "Dina Ibrahim",
    text: "Finally a clothing website that actually delivers what it promises. The sizes are accurate and the material is great.",
    img: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    id: 5,
    name: "Hager Mostafa",
    text: "I ordered a casual top and a party dress—both exceeded my expectations. Stylish, comfy, and affordable!",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: 6,
    name: "Layla Khaled",
    text: "Such a smooth shopping experience. I’m in love with my new summer dress, it looks even better in real life.",
    img: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 7,
    name: "Hana Farid",
    text: "Great variety and modern styles. The blouse I bought is now my favorite piece in my wardrobe!",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    id: 8,
    name: "Aya Mahmoud",
    text: "Affordable prices with premium quality. I was worried about ordering online, but everything was perfect.",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 9,
    name: "Rana Tarek",
    text: "I’ve already recommended this site to my friends. The dresses are trendy, elegant, and super comfortable.",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 10,
    name: "Sarah Ali",
    text: "I was amazed at how quickly my order arrived. The dress fits like it was tailored for me!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Real feedback from our happy customers.
          </p>
        </div>

        {/* Slider Section */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center text-center relative">
                <img
                  src={data.img}
                  className="rounded-full w-20 h-20 object-cover mb-4"
                  alt={data.name}
                />
                <p className="text-sm text-gray-500 mb-3">"{data.text}"</p>
                <h2 className="text-lg font-bold text-black/70">{data.name}</h2>
                <p className="text-black/20 text-7xl font-serif absolute top-2 right-4">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

