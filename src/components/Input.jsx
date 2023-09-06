import React from 'react'

function Input({label, placeholder, type}) {
  return (
    <div className='flex flex-col'>
        <label className='font-semibold'>{label}</label>
        <input type={type} placeholder={placeholder} className='mt-5 py-6 px-7 outline-none focus:outline-none border border-black rounded-lg max-w-[528px] w-full' />
    </div>
  )
}

export default Input