import React from 'react'
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

const Subscribe = () => {
  return (
    <div className='w-[80%] h-[500px] mx-auto flex items-center mt-32'>
        {/* Left */}
        <div>
            <img src={boy} className='scale-75'/>
        </div>


        {/* Middle */}
        <div className='w-[600px] flex flex-col gap-8 items-center'>
            <div className='flex flex-col items-center gap-3 shadow-2xl py-4 px-8 rounded-xl'>
                <div className='font-volkhov text-3xl font-normal text-[#484848]'>Subscribe To Our Newsletter</div>
                <div className='text-xs font-normal text-[#8A8A8A] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br/> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </div>
                <div className='w-full justify-start text-[#8A8A8A] mt-6 text-base font-normal'>michael@ymail.com</div>
            </div>

            <div>
                <button className='text-center bg-black text-white text-xs px-6 py-3 rounded-xl'>Subscribe Now</button>
            </div>
        </div>


        {/* Right */}
        <div>
            <img src={girl} className='scale-75'/>
        </div>
    </div>
  )
}

export default Subscribe