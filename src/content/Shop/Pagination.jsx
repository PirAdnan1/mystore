import React from 'react'

function Pagination({value}) {
  return (
    <div>
        <div>
            <span className='bg-[#FBEBB5] cursor-pointer rounded-lg py-4 px-7'>{value}</span>
        </div>
    </div>
  )
}

export default Pagination