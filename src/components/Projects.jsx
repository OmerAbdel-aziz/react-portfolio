import React from 'react'
import gpt from '../assets/gpt.png';
import hoobank from '../assets/hoobank.png'
import nike from '../assets/nike.png';
import { motion } from "framer-motion";

const PROJECTS = [
    {
      title: "Open AI landing Page",
      image: gpt,
      description:
        "Fully Responsive landing Page Built with React and styled with pure CSS",
      technologies: ["HTML", "CSS", "React"],
    },
    {
      title: "Modern Bank landing Page",
      image: hoobank,
      description:
        "Fully Responsive Landing page styled with TailwindCSS.",
      technologies: ["HTML", "CSS", "React" ,"Tailwind"],
    },
    {
      title: "Nike landing Page",
      image: nike,
      description:
        "Fully Responsive Landing page styled with TailwindCSS.",
      technologies: ["HTML", "CSS", "React", "Tailwind"],
    } 
  ];

  

const Projects = () => {
  return (
    <div className='border-b border-neutral-700'>
    <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>
        Projects
        </motion.h1>
    <div>
        {PROJECTS.map((PROJECT ,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                  <a href="https://vercel.com/omerabdel-azizs-projects">
                  <img src={PROJECT.image}
                 alt={PROJECT.title} 
                 className='object-contain mb-6'
                 width={150}
                 height={150}/>
                  </a>
               
                </motion.div>
                <motion.div 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:100}}
                 transition={{duration:1}}
                className='w-full lg:w-3/4 max-w-xl'>
                    <h6 className='font-semibold mb-2'> {PROJECT.title} </h6>
                    <p className='mb-4 text-neutral-400 '>{PROJECT.description}</p>
                    {PROJECT.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-400'>{tech}</span>
                    ))}
                </motion.div>
                
            </div>
        ))}
    </div>
    </div>
  )
}

export default Projects