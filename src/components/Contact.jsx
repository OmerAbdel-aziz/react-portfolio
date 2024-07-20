import React from 'react'
import { motion } from "framer-motion";





const CONTACT = {
    address: "Giza, Cairo, Egypt ",
    phoneNo: "+249 11 499 9208 ",
    email: "omercode3@gmail.com",
  };   


const Contact = () => {
  return (
    <div className='border-b border-neutral-700 pb-20'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>
        Get in Touch
        </motion.h1>
     <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:100}}
      transition={{duration:1}}
     className='tracking-tighter text-center'>
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
     </motion.div>
    </div>
  )
}

export default Contact