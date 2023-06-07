import React from 'react'
import IGImg1 from '../public/ig-img-1.jpeg';
import IGImg2 from '../public/ig-img-2.jpeg';
import IGImg3 from '../public/ig-img-3.jpeg';
import IGImg4 from '../public/ig-img-4.jpeg';
import IGImg5 from '../public/ig-img-5.jpeg';
import IGImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from '../components/InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on instagram</p>
        <p className='pb-4'>@pilateswithnat</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IGImg1}/>  
            <InstagramImg socialImg={IGImg2}/>  
            <InstagramImg socialImg={IGImg3}/>  
            <InstagramImg socialImg={IGImg4}/>  
            <InstagramImg socialImg={IGImg5}/>  
            <InstagramImg socialImg={IGImg6}/>  
        </div>
    </div>
  )
}

export default Instagram