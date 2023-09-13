import React from 'react'

// Layout
import Layout from '@/layout/Layout'

// components
import ContactHeader from './ContactHeader'
import Constant from './Constant'
import ContactInfo from './ContactInfo'
import Columns from './Columns'

function ContactData() {
  return (
    <Layout>
        <ContactHeader />
        <Constant />
       <ContactInfo />
       <Columns />
    </Layout>
  )
}

export default ContactData