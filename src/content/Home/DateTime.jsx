import React from 'react'

// assets
import Time from '@/assets/Time'
import Date from '@/assets/Date'

function DateTime() {
  return (
    <div className='flex text-base space-x-3 items-center'>
        <Time />
        <span>5 min</span>
        <Date />
        <span>12 Oct 2023</span>
    </div>
  )
}

export default DateTime