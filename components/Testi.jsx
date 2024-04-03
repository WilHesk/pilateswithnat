import React from 'react';
import Link from 'next/link';

const Testi = ({ heading1, heading2, message1, message2, message3, message4, message5, message6 }) => {
  return (
    <div className='flex items-center justify-center min-h-screen mt-0 bg-fixed bg-dkgrey'>
      <div className='pt-[30%] p-5 text-white z-[2] sm:pt-14'>
        <div>
          <h2 className='text-5xl main-title'>{heading1}</h2>
          <h2 className='pt-1 pb-3 text-2xl font-thin text-peach'>{heading2}</h2>
          <p className='py-3 font-light'>{message1}</p>
          <p className='py-3 font-light'>{message2}</p>
          <p className='py-3 font-light'>{message3}</p>
          <p className='py-3 font-light'>{message4}</p>
          <p className='py-3 font-light'>{message5}</p>
          <p className='py-3 font-light'>{message6}</p>
        </div>
      </div>
    </div>
  );
}

export default Testi