import React from 'react'


// components
import ShopContents from '@/content/Shop'

function Shop({ products }) {


  return (
    <div>
      <ShopContents products={products} />
    </div>
  )
}


export async function getServerSideProps({ params }) {

  // const { id } = params;

  const response = await fetch(`https://fakestoreapi.com/products`);

  const products = await response.json();

  return {
    props: {
      products,
    },
  };


}

export default Shop

