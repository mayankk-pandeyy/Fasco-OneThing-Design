import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Testimonials.css';
import { EffectCards } from 'swiper/modules';
import customer1 from "../assets/customer1.png"
import customer2 from "../assets/customer2.png"
import customer3 from "../assets/customer3.png"
import { IoMdStar } from "react-icons/io";


const testimonials = [
    {
      id: 1,
      name: "James K.",
      role: "Traveler",
      image: customer1,
      text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 5,
    },
    {
      id: 2,
      name: "Suzan B.",
      role: "UI Designer",
      image: customer2,
      text: "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
      rating: 5,
    },
    {
        id: 3,
        name: "Megen W.",
        role: "UI Designer",
        image: customer3,
        text: "“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”",
        rating: 5,
      },
  ];

function Testimonials() {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            testimonials.map((testimonial) => {
                return <SwiperSlide className='shadow-2xl rounded-xl font-poppins' key={testimonial.id}>
                    <div className='w-full flex gap-10 px-10'>
                        {/* Left */}
                        <div className='w-[40%] relative'>
                            <img src={testimonial.image} className='w-full'/>
                            <div className='w-[230px] h-[230px] bg-[#D9D9D9] absolute top-4 -left-4 -z-20'></div>
                        </div>
                        {/* Right */}
                        <div className='w-[60%] flex flex-col gap-4'>
                            <div className=' font-normal text-sm text-[#484848]'>
                                {`"${testimonial.text}"`}
                            </div>
                            <div className='flex text-[#FCA120]'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>

                            <div className='w-[180px] h-[1px] bg-black'></div>

                            <div className=' font-volkhov text-2xl font-normal'>
                                {testimonial.name}
                            </div>

                            <div className=' text-sm text-[#484848] font-normal'>
                                {testimonial.role}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>
    </div>
  );
}


export default  Testimonials;