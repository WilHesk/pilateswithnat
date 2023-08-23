import React from 'react';
import Link from 'next/link';

const Testi = ({heading1, heading2, message1, message2, message3 }) => {
  return (
    <div className='flex items-center justify-center h-screen mt-0 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/40 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[4rem] mr-[20%] ml-[30%]'>
            <div>
              <h2 className='text-5xl main-title'>{heading1}</h2>
              <h2 className='pt-1 pb-3 text-2xl font-thin text-peach'>{heading2}</h2>
              <p className='py-3 font-light'>{message1}</p>
              <p className='py-3 font-light'>{message2}</p>
              <p className='py-3 font-light'>{message3}</p>
              
              
              
            </div>
      
        </div>
    </div>
  ); 
}

export default Testi