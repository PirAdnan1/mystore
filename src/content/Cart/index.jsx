import React from 'react'

// components
import Layout from '@/layout/Layout'
import CartHeader from './CartHeader'
import ProductDetails from './ProductDetails'
import Columns from '../contact/Columns'

function CartData() {
  return (
    <div>
        <Layout>
            <CartHeader />
            <ProductDetails />
            <Columns />
        </Layout>
    </div>
  )
}

export default CartData