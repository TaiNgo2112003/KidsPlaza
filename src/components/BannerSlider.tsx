"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./BannerSlider.module.css";

export default function BannerSlider({ banners }: { banners: any[] }) {
  return (
    <div className={style.wrapper}>
      <div className={style.sliderContainer}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={1}
          centeredSlides
          slidesPerGroup={1}
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
        >
          {banners.map((banner: any) => (
            <SwiperSlide key={banner.id}>
              <Image
                src={banner.image}
                alt={banner.alt}
                width={360}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
