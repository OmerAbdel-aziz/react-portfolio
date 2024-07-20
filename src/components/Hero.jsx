import React from 'react';
import profile from '../assets/profile.jpeg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.5, delay: delay } 
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-700 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1  
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 font-thin text-4xl lg:text-6xl tracking-tight lg:mt-16'
            >
              Omer Abdel-Aziz
            </motion.h1>
            <div className='flex gap-2 lg:justify-start justify-between '>
              <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'
              >
                Front-End Web Developer
              </motion.span>
              <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='text-2xl tracking-tight hidden lg:block'
              >
                |
              </motion.p>
              <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600 bg-clip-text text-2xl tracking-tight text-transparent'
              >
                Flutter Developer
              </motion.span>
            </div>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 py-6 max-w-xl font-light'
            >      
              Dynamic Developer with expertise in both Flutter and React, gained through side projects and freelance work.
              Skilled in creating user-friendly, cross-platform applications, Dart, UI/UX design, and integrating third-party APIs. Ready to bring my dual-framework experience to a collaborative, innovative team.
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 p-8'>
          <div className='flex justify-center'>
            <motion.img 
              initial={{x:100 , opacity:0}}
              animate={{x:0 , opacity:1}}
              transition={{duration:1 , delay:1.2}}
              src={profile} 
              alt="Omer Abdel-aziz"
              className='object-contain rounded-xl'
              width={400}
              height={400} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
