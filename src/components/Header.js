import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import verses from "./verse"; 
import "../CSS/header.css"; 

const BannerSwiper = () => {
  const slides = [
    { img: "/CLASSES/class-01.png", title: "Learn English through the Bible!" },
    { img: "/CLASSES/class-02.png", title: "Group Bible Studies!" }, //public/CLASSES/class-01.png
    { img: "/CLASSES/class-03.png", title: "English with Foreginers for free!" },
  ];

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  };

  const [verse, setVerse] = useState(getRandomVerse());

  useEffect(() => {
    const interval = setInterval(() => {
      setVerse(getRandomVerse());
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="bannerSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="position-relative overflow-hidden" style={{ minHeight: "600px" }}>
            <img
              src={slide.img}
              alt={slide.title}
              className="w-100 h-100 position-absolute top-0 start-0"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container text-white px-4 px-md-5 py-5">
                <h1 className="fw-bold mb-4">{slide.title}</h1>
                <p className="lead">{verse}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSwiper;
