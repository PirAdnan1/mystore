import React from 'react'

function Information() {
  return (
    <div className='bg-specialOne mt-24 flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 justify-center lg:gap-11 gap-3 py-24'>
        <div>
            <h1 className='text-3xl font-medium leading-normal'>Free Delivery</h1>
            <p className='max-w-[376px] leading-normal'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>

        <div>
            <h1 className='text-3xl font-medium leading-normal'>90 Days Return</h1>
            <p className='max-w-[376px] leading-normal'>If goods have problems, consectetur adipim scing elit.</p>
        </div>

        <div>
            <h1 className='text-3xl font-medium leading-normal'>Secure Payment</h1>
            <p className='max-w-[376px] leading-normal'>100% secure payment, consectetur adipim scing elit.</p>
        </div>
    </div>
  )
}

export default Information