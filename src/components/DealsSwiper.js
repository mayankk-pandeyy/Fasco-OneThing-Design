import React, {useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './DealsSwiper.css'
import 'swiper/css/effect-coverflow';
import {Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import deal1 from "../assets/Deal1.jpeg"
import deal2 from "../assets/Deal2.jpeg"
import deal3 from "../assets/Deal3.jpeg"

export default function DealsSwiper() {

  return (
    <div className='relative'>
      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        
        pagination={{
            clickable: true,
        }}
        coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl'>
            <img src={deal1} className=''/>
            <div className='w-[150px] h-[100px] bg-white absolute bottom-6 left-2 font-poppins '>
                <div className='w-full flex items-center justify-between text-xs text-[#484848] px-4 mt-5'>
                    <div>01</div>
                    <div className='w-[20px] h-[1px] bg-[#484848]'></div>
                    <div>Spring Sale</div>
                </div>
                <div className='w-full text-start px-4 mt-3 text-xl text-[#484848] font-normal'>
                    30% OFF
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl'>
            <img src={deal2}/>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl'>
            <img src={deal3}/>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl'>
            <img src={deal1}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
