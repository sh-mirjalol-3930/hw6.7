import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1} 
      loop={true} 
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full max-w-[1200px] h-[400px] rounded-[50px] overflow-hidden"
    >
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d34icrl2llnd6jumo5k0/main_page_banner.jpg"
          alt="banner1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d30hguviub35i07kcmf0/main_page_banner.jpg"
          alt="banner2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d33pucj4eu2up0auf680/main_page_banner.jpg"
          alt="banner3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d3551rviub30vbru76e0/main_page_banner.jpg"
          alt="banner4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d2tdb9niub35i07jlgng/main_page_banner.jpg"
          alt="banner5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://images.uzum.uz/d34eiv7iub35i07ldi40/main_page_banner.jpg"
          alt="banner6"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
