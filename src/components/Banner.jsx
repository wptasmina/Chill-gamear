import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img from "../assets/img.jpg";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img-2.jpg";
;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full px-2 bg-gray-800">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          <div className="relative">
            <div
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Our Highest Rated Games
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                Discover the top-rated games of 2024, packed with action,
                adventure, and fun!
              </p>
              <button
                onClick={() => scrollToSection("highest-section")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Our Trending Games!
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 w-full md:w-11/12 text-center">
                Discover what’s trending now! Explore the latest favorites, top
                picks, and must-haves that everyone’s loving this season. Don’t
                miss out—dive in today!
              </p>
              <button
                onClick={() => scrollToSection("trending")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Feature Developers
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                Discover the creators behind gaming's greatest hits, shaping
                innovation and unforgettable experiences
              </p>
              <button
                onClick={() => scrollToSection("feature-developer")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
