import React, { useState } from 'react'
import "./Hero.css"
import boy1 from "../assets/boy1.svg"
import girls2 from "../assets/girls2.png"
import girls1 from "../assets/girls1.jpeg"
import boy2 from "../assets/boy2.png"
import ConfettiExplosion from 'react-confetti-explosion'
import {animate, motion} from 'framer-motion'

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
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
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
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

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
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


const Hero = () => {

  return (
    <motion.div>
        <motion.div className='mt-10 w-full h-[600px] flex gap-5' initial={{opacity:50,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
            {/* Left */}
            <motion.div variants={firstName} initial='initial' animate='animate' className='w-1/3 h-full bg-[#E0E0E0] rounded-lg relative'>
                <motion.img src={boy1} height='570px' width='392px' className='absolute -bottom-4 scale-90' variants={header} transition={{duration:.5, delay:0.8}}/>
            </motion.div>

            {/* Middle */}
            <div className='w-1/3 h-full flex flex-col'>
                <div className='h-[150px] overflow-hidden bg-[#E0E0E0] rounded-xl'>
                    <img src={girls2} />
                </div>

                {/* Text */}
                <motion.div variants={firstName} initial='initial' animate='animate' className='w-full h-[383px] flex flex-col items-center overflow-hidden text-[#484848]'>
                    <motion.div className='flex text-[70px] font-medium'>
                        <motion.span variants={letter} >U</motion.span>
                        <motion.span variants={letter} >L</motion.span>
                        <motion.span variants={letter} >T</motion.span>
                        <motion.span variants={letter} >I</motion.span>
                        <motion.span variants={letter} >M</motion.span>
                        <motion.span variants={letter} >A</motion.span>
                        <motion.span variants={letter} >T</motion.span>
                        <motion.span variants={letter} >E</motion.span>
                    </motion.div>
                    {/* <div >ULTIMATE</div> */}

                    <motion.div className='font-bold text-[130px] -mt-12 text-transparent sale select-none cursor-pointer relative'>
                        <motion.div variants={lastName} initial='initial' animate='animate' className='flex'>
                            <motion.div variants={letter} className='salefloatup'>S</motion.div>
                            <motion.div variants={letter} className='salefloat'>A</motion.div>
                            <motion.div variants={letter} className='salefloatup'>L</motion.div>
                            <motion.div variants={letter} className='salefloat'>E</motion.div>
                        </motion.div>
                    </motion.div>

                    <div className='font-normal -mt-8 text-[#484848]'>NEW COLLECTION</div>
                        
                    <motion.button variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='text-center bg-black text-white mt-5 text-xs px-6 py-3 rounded-xl'>SHOP NOW</motion.button>

                </motion.div>

                {/* Girls */}
                <div className=' w-full h-[150px] overflow-hidden relative rounded-xl'>
                    <img src={girls1} className='absolute -top-16 scale-150'/>
                </div>
            </div>

            {/* Right */}

            <motion.div variants={firstName} initial='initial' animate='animate' className='w-1/3 h-full bg-[#E0E0E0] rounded-lg relative overflow-hidden'>
                <motion.img src={boy2} className='absolute -bottom-4 scale-125' variants={header} transition={{duration:.5, delay:0.8}}/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Hero