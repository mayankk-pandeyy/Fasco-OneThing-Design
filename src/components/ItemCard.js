import React from 'react'
import { IoMdStar } from "react-icons/io";
import {motion} from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item1 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



const ItemCard = (props) => {
    const item = props.item;

    const stars = [];
    const starsCount = item.stars;

    for(let i=0; i<starsCount; i++){
        stars.push("*");
    }

    return (
        <motion.div variants={container} initial="hidden" animate="visible"
        className='w-[90%] flex flex-col gap-2 items-center mx-auto'>
            <motion.div variants={item1} className='w-full mx-auto'>
                <motion.img variants={item1} src={item.img} className=' rounded-xl'/>
            </motion.div>

            <motion.div variants={item1} className='w-full text-lg font-normal flex justify-between'>
                <div>
                    {item.name}
                </div>

                <div className='flex text-[#FCA120]'>
                    {
                        stars.map((star, index) => {
                            return <IoMdStar key={index}/>
                        })
                    }
                </div>
            </motion.div>

            <motion.div variants={item1} className='w-full text-[#8A8A8A] text-sm -mt-3'>
                {item.brand}
            </motion.div>

            <div className='w-full text-[#484848] text-sm mt-2'>
                {
                    `(${item.reviews}) Customer Reviews`
                }
            </div>

            <div className='w-full flex items-center justify-between mt-2'>
                <div className=' text-xl font-medium'>
                    {item.cost}
                </div>
                <div className='text-[#FF4646] text-sm'>
                    {item.status}
                </div>
            </div>
        </motion.div>
    )
}

export default ItemCard