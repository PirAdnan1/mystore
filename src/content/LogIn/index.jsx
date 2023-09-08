import React from 'react'

// layout
import Layout from '@/layout/Layout'

// components
import AccountHeader from './AccountHeader'
import Form from './Form'

function LoginData() {
  return (
    <Layout>
        <AccountHeader />
        <Form />
    </Layout>
  )
}

export default LoginData