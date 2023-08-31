import React from 'react'
import Image from 'next/image'

function ShopProducts({productImage, productDetails, productPrice, ...rest}) {
  return (
    <div>
        <Image  src={productImage} alt='products' width={214} />
        <p className='max-w-[160px] mt-2'>{productDetails}</p>
        <p className='font-bold'>{productPrice}</p>
    </div>
  )
}

export default ShopProducts