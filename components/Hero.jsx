import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message, button, heading2, message2, para }) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/70 z-[2]' />
        <div className=' text-white z-[2] mt-[4rem] mr-[20%] ml-[30%]'>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <h2 className='pt-1 text-2xl font-thin '>{heading2}</h2>
              <p className='pt-5 text-med  font-thin'>{message}</p>
              <p className='text-med  font-thin'>{message2}</p>
              <p className='pt-1 pb-5 text-sm  font-thin'>{para}</p>
              <Link href='/contact'>
              <a>
              <button className='px-8 py-2 rounded border bg-peach text-dkblue font-light hover:bg-cream'>{button}</button>
              </a>
              </Link>
            </div>
 
        </div>
    </div>
  ); 
}

export default Hero