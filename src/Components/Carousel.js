import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = (props) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://source.unsplash.com/a-group-of-people-holding-hands-eMB60hNHFL8",
    "https://source.unsplash.com/man-holding-card-with-seeking-human-kindness-text-8UG90AYPDW4",
    "https://source.unsplash.com/a-chair-sitting-on-a-sidewalk-next-to-a-bunch-of-tents-soP6_EmslXM",
    "https://source.unsplash.com/3-men-and-2-women-posing-for-photo-akRXLuroBCU",
    // "https://source.unsplash.com/cooked-meat-on-pan-POFG828-GQc",
    // Add more image URLs as needed
  ];

  return (
    <div className=" relative mt-[3.5rem] h-[90vh] sm:h-full ">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full md:h-[90vh] sm:h-full">
            <img
              src={image}
              alt={`slide-${index}`}
              className=" w-full object-center brightness-50"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between px-4 w-full h-[100vh]">
        <button
          className="text-white bg-none p-2 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-white bg-none p-2 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute top-1/4 left-[5rem]  font-bold space-y-5">
        <h1 className="text-8xl text-white">Sheltering lives,</h1>
        <h1 className="text-6xl text-white">Spreading hope</h1>
        <button className="bg-red-600 p-3 rounded-lg text-white">
          <a href="/donate">Donate &#9829;</a>
          
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Carousel;
