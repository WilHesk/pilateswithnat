import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-dkgrey'>
      <div className='max-w-[600px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold py-4 text-white'>Contact Form</h1>
        <form>
          <div className='grid grid-cols-2 gap-2'>
            <input className='border border-peach shadow-lg p-3' type="text" placeholder='Name' />
            <input className='border border-peach shadow-lg p-3' type="text" placeholder='Email' />
          </div>
          <textarea className='my-4 border border-peach shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'/>
          <button className='px-8 py-2 rounded border bg-peach text-dkblue font-light hover:bg-cream'>Submit</button>
        </form>
      </div>
    </div>
  )
}

