import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/service/Breadcrumb'
import Herosection from '../components/service/Herosection'
import Customorder from '../components/service/Customorder'

export default function Service() {
  return (
    <MainLayout>
   <Breadcrumb/>
   <Herosection/>
   <Customorder/>
   </MainLayout> 
  )
}
