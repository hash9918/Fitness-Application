import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, EffectCreative } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";

// SwiperClass.use([EffectCreative,Autoplay]);

function HeroContainer() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero2 />
        </SwiperSlide>
        <SwiperSlide>
          <Hero3 />
        </SwiperSlide>
        <SwiperSlide>
          <Hero4 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroContainer;
