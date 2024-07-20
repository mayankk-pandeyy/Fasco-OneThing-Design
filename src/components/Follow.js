import React from 'react'

import follow1 from "../assets/follow1.png"
import follow2 from "../assets/follow2.png"
import follow3 from "../assets/follow3.png"
import follow4 from "../assets/follow4.png"
import follow5 from "../assets/follow5.png"
import follow6 from "../assets/follow6.png"
import follow7 from "../assets/follow7.png"

const Follow = () => {
  return (
    <div className='w-full flex flex-col mt-28 gap-5'>
        {/* top */}
        <div className='w-full flex flex-col items-center gap-3'>
            <div className='font-volkhov text-4xl font-normal text-[#484848]'>
                Follow Us On Instagram
            </div>
            <div className='text-xs font-normal text-[#8A8A8A] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br/> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
            </div>
        </div>


        {/* Bottom */}
        <div className='flex items-center w-[100vw] overflow-hidden h-[280px] mt-16'>
        <div className='h-[250px] w-[17%] overflow-hidden flex items-center'>
                <img src={follow1} className='w-full h-[220px] object-fill'/>
            </div>

            <div className='h-[280px] w-[13.2%] overflow-hidden flex items-center'>
                <img src={follow2} className='w-full h-[280px] object-fill'/>
            </div>

            <div className='h-[250px] w-[13.2%] overflow-hidden flex items-center'>
                <img src={follow3} className='w-full h-[220px] object-fill'/>
            </div>

            <div className='h-[280px] w-[13.2%] overflow-hidden flex items-center'>
                <img src={follow4} className='w-full h-[280px] object-fill'/>
            </div>

            <div className='h-[250px] w-[13.2%] overflow-hidden flex items-center'>
                <img src={follow5} className='w-full h-[220px] object-fill'/>
            </div>

            <div className='h-[280px] w-[13.2%] overflow-hidden flex items-center'>
                <img src={follow6} className='w-full h-[280px] object-fill'/>
            </div>
            <div className='h-[250px] w-[17%] overflow-hidden flex items-center'>
                <img src={follow7} className='w-full h-[220px] object-fill'/>
            </div>
        </div>
    </div>
  )
}

export default Follow