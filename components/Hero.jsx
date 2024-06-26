import React from 'react';
import Link from 'next/link';

const Hero = ({ heading, message, button, heading2, message2, message3 }) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/70 z-[2]' />
      <div className=' text-white z-[2] mt-[4rem] mx-[8%] sm:mr-[15%] sm:ml-[25%]'>
        <div>
          <h1 className='main-title text-6xl'>{heading}</h1>
          <h2 className='pt-1 text-2xl font-thin text-peach '>{heading2}</h2>
          <p className='pt-5 text-med  font-thin'>{message}</p>
          <p className='pt-5 text-med  font-thin'>{message2}</p>
          <p className='pt-5 text-med  font-thin mb-8'>{message3}</p>
          <Link href='/contact'>
            <button className='px-8 py-2 rounded border bg-peach text-dkblue font-light hover:bg-cream'>{button}</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero