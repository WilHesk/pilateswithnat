import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message, button, heading2, message2 }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[4rem] mr-[5%] ml-[5%]'>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <p className='py-5 text-xl '>{message}</p>
              <Link href='https://www.graystoneactionsports.co.uk/graystonenewsblog/coping-2023'>
              <a target="_blank">
              <button className='px-8 py-2 border bg-pink'>{button}</button>
              </a>
              </Link>
            </div>
            <div className='mt-[2rem]'>
              <h2 className='text-5xl font-normal '>{heading2}</h2>
              <p className='py-5 text-xl '>{message2}</p>
            </div>
 
        </div>
    </div>
  ); 
}

export default Hero