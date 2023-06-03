import React from 'react';
import Link from 'next/link';

const Page = ({heading, message, button, heading2, message2, para }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[4rem] mr-[20%] ml-[30%]'>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <h2 className='text-5xl font-light '>{heading2}</h2>
              <p className='py-5 text-xl font-light'>{message}</p>
              <p className='pt-1 pb-5 text-sm  font-extralight'>{para}</p>
              
            </div>
      
        </div>
    </div>
  ); 
}

export default Page