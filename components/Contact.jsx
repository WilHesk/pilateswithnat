import React from 'react'

export const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Contact Form</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border border-peach shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border border-peach shadow-lg p-3' type="text" placeholder='Email' />
            </div>
            <textarea className='my-4 border border-peach shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'/>
            <button className='bg-peach py-2 px-4 rounded text-white'>Submit</button>
        </form>
    </div>
  )
}
