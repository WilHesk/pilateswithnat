import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive'/>
        {/*overlay*/}
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-dkblue/50 group'>
        <p className='text-peach hidden group-hover:block'><FaInstagram size={30} /></p>
        </div>
    </div>
  )
}

export default InstagramImg