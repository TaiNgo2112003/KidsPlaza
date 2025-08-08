"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./BannerIconsbar.module.css";

export default function IconSlide({ bannerIconss }: { bannerIconss: any[] }) {
  if (!bannerIconss || bannerIconss.length === 0) return null;

  return (
    <div className={styles.iconSliderWrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{ delay: 2000 }}
        loop
      >
        {bannerIconss.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <div className={styles.iconContainer}>
              <Image
                src={banner.image}
                alt={banner.alt}
                width={50}
                height={50}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
