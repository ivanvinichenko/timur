import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import s from './CustomeSwiper.module.scss'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CustomSwiper({images}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={s.swiper}
      >
        {images.map((imgSrc, index)=>(
          <SwiperSlide><img className={s.swiper__img} src={imgSrc} alt={`slide-${index}`}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}