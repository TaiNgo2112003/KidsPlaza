"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./BannerSliderSidebar.module.css";

export default function BannerSlider({ banners }: { banners: any[] }) {
  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        centeredSlides

        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {banners.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.image}
              alt={banner.alt}
              width={350}
              height={200}
            />
          </SwiperSlide>                                                          
        ))}
      </Swiper>
    </div>
  );
}
