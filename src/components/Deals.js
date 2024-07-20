import React from 'react'
import Button from './Button'
import { useTimer } from 'react-timer-hook';
import DealsSwiper from './DealsSwiper';

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days
    } = useTimer({ expiryTimestamp});
  
  
    return (
      <div>
        <div className='flex gap-5'>
          <div className='flex flex-col items-center'><span className='w-[50px] h-[50px] flex items-center justify-center text-2xl font-medium text-[#484848] rounded-lg shadow-md'>{days}</span> <span className='font-normal mt-2'>Days</span></div>
          <div className='flex flex-col items-center'><span className='w-[50px] h-[50px] flex items-center justify-center text-2xl font-medium text-[#484848] rounded-lg shadow-md'>{hours}</span> <span className='font-normal mt-2'>Hr</span></div>
          <div className='flex flex-col items-center'><span className='w-[50px] h-[50px] flex items-center justify-center text-2xl font-medium text-[#484848] rounded-lg shadow-md'>{minutes}</span> <span className='font-normal mt-2'>Mins</span></div>
          <div className='flex flex-col items-center'><span className='w-[50px] h-[50px] flex items-center justify-center text-2xl font-medium text-[#484848] rounded-lg shadow-md'>{seconds}</span> <span className='font-normal mt-2'>Sec</span></div>
        </div>
      </div>
    );
  }
  


const Deals = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60000); // 10 minutes timer

  return (
    <div className='w-full mt-20 flex'>
        {/* Left */}
        <div className='w-[40%] overflow-hidden'>
            <div className='font-volkhov font-normal text-4xl text-[#484848]'>
                Deals Of The Month
            </div>

            <div className='text-[#8A8A8A] text-xs mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Scelerisque duis ultrices sollicitudin aliquam sem. <br/> Scelerisque duis ultrices sollicitudin 
            </div>

            <div className='mt-7'>
              <button className='text-center bg-black text-white text-xs px-8 py-3 rounded-xl'>Buy Now</button>
            </div>

            <div className='text-[#484848] text-lg font-medium mt-6'>
                Hurry, Before It's Too Late!
            </div>

            {/* Timer */}
            <div className='mt-4'>
                <MyTimer expiryTimestamp={time}/>
            </div>
        </div>

        {/* Right */}
        <div className='w-[60%]'>
            <DealsSwiper/>
        </div>
    </div>
  )
}

export default Deals