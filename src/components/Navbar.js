import React from 'react'
import './Navbar.css'
import {motion} from 'framer-motion'

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

const Navbar = () => {

    const NavBarLinks = ['Home', 'Deals', 'New Arrivals', 'Packages', 'Sign in', 'Sign Up'];

  return (
    <motion.div initial='initial' animate='animate'>
        <motion.div variants={stagger} className='w-full h-[56px] flex justify-between mt-12'>

            {/* logo */}
            <motion.div variants={header} className='font-volkhov h-full text-5xl text-[#484848] font-normal text-center leading-tight select-none cursor-pointer'>
                FASCO
            </motion.div>

            {/* Navigation buttons */}
            <motion.div className='h-full flex items-center gap-10 leading-tight' variants={stagger}>

                {
                    NavBarLinks.map((page, index) => {
                        return <motion.div variants={header} className='relative w-auto cursor-pointer overflow-hidden navButtons' data-replace={page} key={index}>{page}</motion.div>
                    })
                }
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Navbar