import React from 'react'
import about from '../assets/about.jpg'
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className='border-b border-neutral-700 pb-4'>
        
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-600'> Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div className='w-full lg:w-1/2 lg:p-8'
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            >
                <div className='flex justify-center items-center'>
                    <img
                      
                     src={about} 
                    alt="about me"
                    className='object-contain rounded-xl'
                    width={400}
                    height={400}/>
                </div>

            </motion.div>
            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:1}}
             className='w-full lg:w-1/2 '>
              <div className='flex justify-center lg:justify-start'>
                <p className='my-2 py-6 max-w-xl font-light'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web and mobile applications. I have worked with a variety of technologies, including React, Next.js, Flutter and Django. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
              </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default About