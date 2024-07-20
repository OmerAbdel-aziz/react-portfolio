import React from 'react';
import { motion } from "framer-motion";

const EXPERIENCES = [
    {
      year: "2023 - Present",
      role: "Front-End Developer",
      company: "Freelancer",
      description: `developing  web applications using JavaScript, React.js. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
      year: "May 2023 - Present",
      role: "Flutter Developer",
      company: "Freelancer",
      description: `Designed and developed user interfaces for Mobile & Desktop applications using Flutter. Implemented responsive designs and optimized frontend performance.`,
      technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    
  ];

const Experience = () => {
  return (
    <div className='border-b border-neutral-700'>
      <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>
        Experience
        </motion.h1>
      <div className='experience-list'>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='w-full lg:w-1/4'>
                <p className='text-sm text-neutral-400'>{exp.year}</p>
            </motion.div>
           <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
           className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-6 font-semibold'>
                {exp.role} - <span className='text-purple-100 text-sm'>{exp.company}</span>
            </h6>
            <p className=' mb-4 text-neutral-400'>{exp.description}</p>
           </motion.div>

          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Experience;
