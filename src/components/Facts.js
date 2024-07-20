import React from 'react'
import quality from "../assets/quality.svg"
import warrenty from "../assets/warrenty.svg"
import support from "../assets/support.svg"
import shipping from "../assets/freeShipping.svg"

const Facts = () => {
  return (
    <div className='w-[70%] bg-white mx-auto flex justify-between mt-10 select-none'>
        {/* High Quality */}
        <div className='flex items-center gap-3'>
            <div className='w-[40px] h-[40px]'>
                <img src={quality}/>
            </div>
            <div className='text-[#484848]'>
                <div className='text-lg font-medium'>High Quality</div>
                <div className=' text-base font-normal'>Crafted from top materials</div>
            </div>
        </div>

        {/* Warrenty */}
        <div className='flex items-center gap-3'>
            <div className='w-[40px] h-[40px]'>
                <img src={warrenty}/>
            </div>
            <div className='text-[#484848]'>
                <div className='text-lg font-medium'>Warrany Protection</div>
                <div className=' text-base font-normal'>Over 2 years</div>
            </div>
            
        </div>

        {/* Free Shipping */}
        <div className='flex items-center gap-3'>
            <div className='w-[40px] h-[40px]'>
                <img src={shipping}/>
            </div>
            <div className='text-[#484848]'>
                <div className='text-lg font-medium'>Free Shipping</div>
                <div className=' text-base font-normal'>Order over 150 $</div>
            </div>
        </div>

        {/* Support */}
        <div className='flex items-center gap-3'>
            <div className='w-[40px] h-[40px]'>
                <img src={support}/>
            </div>
            <div className='text-[#484848]'>
                <div className='text-lg font-medium'>24 / 7 Support</div>
                <div className=' text-base font-normal'>Dedicated support</div>
            </div>
        </div>
    </div>
  )
}

export default Facts