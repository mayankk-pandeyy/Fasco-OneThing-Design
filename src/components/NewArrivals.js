import React, { useState } from 'react'
import {data} from '../components/data.js'
import ItemCard from './ItemCard.js';
import {motion} from 'framer-motion';

let easeing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};
  
  const btnGroup={
    initial:{
      y:-60,
      opacity:0,
      transition:{duration:0.6, ease:easeing}
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easeing
      }
    }
  };


const NewArrivals = () => {

    const [activeButton, setActiveButton] = useState("Women\'s Fasion")

    const arrivals = ['Men\'s Fasion', 'Women\'s Fasion', 'Women Accessories', 'Men Accessories', 'Discount Deals'];

    function setArrival(arrival){
        // console.log(activeButton);
        setActiveButton(arrival);
        console.log(activeButton);

    }

  return (
    <motion.div className='w-full mt-10 flex flex-col gap-6 items-center'>
        <div className='text-center font-volkhov text-4xl font-normal'>
            New Arrivals
        </div>


        <div className=' text-sm text-[#8A8A8A]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br/> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </div>

        {/* Buttons */}

        <motion.div className='flex gap-2 mt-2'>
            {
                arrivals.map((arrival, index)=> {
                    return <motion.div key={index} variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='text-center w-[160px] py-2 bg-[#FAFAFA] text-[#8A8A8A] text-sm rounded-md cursor-pointer' style={{backgroundColor : arrival === activeButton ? ('#000000') : (''), color : arrival === activeButton ? ('#ffffff') : ('') }} onClick={()=> setArrival(arrival)}>{arrival}</motion.div>
                })
            }
        </motion.div>

        {/* Cards */}
        <motion.div className='w-full flex flex-wrap justify-between' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            {
                data.map((item, index)=> {
                    return <motion.div className='w-[31%] py-6 rounded-lg shadow-2xl mt-10' key={index} variants={item}> <ItemCard key={index} item={item}/> </motion.div>
                    
                })
            }
        </motion.div>

        {/* Button */}
        <motion.div>
            <motion.button variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='text-center bg-black text-white text-xs px-8 py-2 rounded-xl mt-5'>View More</motion.button>
        </motion.div>
    </motion.div>
  )
}

export default NewArrivals