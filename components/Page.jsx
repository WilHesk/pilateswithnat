import React from 'react';
import Link from 'next/link';

const Page = ({heading, heading2, message2, para }) => {
  return (
    <div className='flex items-center justify-center h-screen mt-0 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/40 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[4rem] mr-[20%] ml-[30%]'>
            <div>
              <h2 className='text-5xl font-normal main-title'>{heading}</h2>
              <h2 className='pt-1 text-2xl font-thin text-peach'>{heading2}</h2>
              <p className='py-2 text-xl font-light'>{message2}</p>
              <p className='text-med  font-thin'>{para}</p>
              
              
            </div>
      
        </div>
    </div>
  ); 
}

export default Page