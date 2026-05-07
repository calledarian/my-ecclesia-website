'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  { img: '/CLASSES/class-01.png', title: 'Learn English through the Bible!' },
  { img: '/CLASSES/class-02.png', title: 'Group Bible Studies!' },
  { img: '/CLASSES/class-03.png', title: 'English with Foreigners for free!' },
];

export default function BannerSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-100"
      style={{ height: '600px' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="position-relative">
          {/* Plain img tag — correct tool for a CSS-driven hero background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt=""
            aria-hidden="true"
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          {/* Dark overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
          {/* Text */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div className="container text-white px-4 px-md-5">
              <h1 className="fw-bold display-4">{slide.title}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
