import React from 'react'

// assest
import Logo from '@/assets/Logo'

function CartHeader() {
  return (
    <div className='bg-CartBanner bg-cover flex flex-col justify-center items-center py-16'>
        <Logo />
        <h1><span className='font-semibold'>Home</span><span className='font-bold mx-2'>{">"}</span>Cart</h1>
    </div>
  )
}

export default CartHeader