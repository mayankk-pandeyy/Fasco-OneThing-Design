import React from 'react'
import TestimonialSwiper from './Testimonials'

const Reviews = () => {
  return (
    <div className='w-full flex flex-col gap-16 items-center mt-40 py-20'>
        {/* Top */}
        <div className='flex flex-col gap-4 text-center'>
            <div className='font-volkhov text-4xl font-normal text-[#484848]'>
                This Is What Our Customers Say
            </div>
            <div className='text-xs font-normal text-[#8A8A8A] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            </div>
        </div>

        {/* Bottom */}
        <div>
            <TestimonialSwiper/>
        </div>
    </div>
  )
}

export default Reviews