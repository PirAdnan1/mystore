import React from 'react'

// assest
import Logo from '@/assets/Logo'

function AccountHeader() {
  return (
    <div className='bg-AccountBanner bg-cover flex flex-col items-center justify-center pt-6 pb-24'>
        <Logo />
        <h1 className='text-xl font-semibold'>My Acccount</h1>
        <p className='font-semibold mt-5'>Home {">"} <span className='font-normal'>My Account</span></p>
    </div>
  )
}

export default AccountHeader