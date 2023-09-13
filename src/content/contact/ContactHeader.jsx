import React from 'react'


// assest
import Logo from '@/assets/Logo'

function ContactHeader() {
  return (
    <div className='bg-ContactBanner flex bg-cover justify-center items-center flex-col pt-5 pb-24'>
        <Logo />
        <h1 className='text-5xl font-semibold'>Contact</h1>
        <p className='text-base font-semibold'>Home <span className='font-bold mx-1.5'>{">"}</span><span className='font-normal'>Contact</span></p>
    </div>
  )
}

export default ContactHeader