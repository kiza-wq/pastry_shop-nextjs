"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        const bestsellers = menuItems.slice(-4);
        setBestSellers(bestsellers);
      });
    });
  }, []);
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => (
            <SwiperSlide id={item._id} className="swiper-slide">
              <img
                className="rounded-full drop-shadow-xl hover:shadow-lg shadow-primary"
                src={item.image}
                alt={item.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
