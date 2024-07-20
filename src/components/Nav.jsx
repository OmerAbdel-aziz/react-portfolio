import React from 'react';
import { FaLinkedin, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiVercel } from 'react-icons/si';

const Nav = () => {
  return (
    <nav className='mb-20 flex justify-between items-center py-6 px-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-white font-sans text-2xl font-semibold'>Omer <span> .</span></h1>
      </div>
      <div className='flex space-x-4 items-center justify-center text-2xl'>
        <a href='https://www.linkedin.com/in/omer-abdel-aziz-314297166/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-white' />
        </a>
        <a href='https://github.com/OmerAbdel-aziz' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='text-white' />
        </a>
        <a href='https://vercel.com/omerabdel-azizs-projects' target='_blank' rel='noopener noreferrer'>
          <SiVercel className='text-white' />
        </a>
        <a href='https://www.facebook.com/your-facebook-id' target='_blank' rel='noopener noreferrer'>
          <FaFacebookSquare className='text-white' />
        </a>
        <a href='https://twitter.com/your-twitter-id' target='_blank' rel='noopener noreferrer'>
          <FaSquareXTwitter className='text-white' />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
