import React from 'react'
import peakyBlinders from "../assets/PeakyBlinders.png"
import points from "../assets/points.svg"
import "./Product.css"

const Product = () => {
  return (
    <div className='w-[100%] h-[400px] flex overflow-hidden'>
      {/* left */}
      <div className='w-1/2 relative bg-[#F8F8F8] pl-10'>
          <img src={peakyBlinders} className='w-[480px] absolute -top-2'/>
          <img src={points} className='w-[390px] absolute left-7 top-8'/>
      </div>


      {/* Right */}
      <div className='w-1/2 h-[400px] py-10 bg-[#DADADA] background-div flex flex-col justify-between'>
        <div className='text-[#767676]'>
          Women Collection
        </div>
        <div className='font-volkhov text-4xl text-[#484848] font-normal'>
          Peaky Blinders
        </div>
        <div className=' text-sm underline'>
          DESCRIPTION
        </div>
        <div className='text-sm text-[#767676]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque <br/> duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Scelerisque duis.
        </div>
        <div className='text-sm text-[#767676]'>
          Size : <span className='bg-black text-white px-4 py-1 rounded-xl'>M</span>
        </div>
        <div className=' text-2xl font-medium'>
          $100.<span className='text-xl'>00</span>
        </div>
        {/* Buy Now Button */}
        <div>
          <button className='text-center bg-black text-white text-xs px-10 py-2 rounded-xl'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Product