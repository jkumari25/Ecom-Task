import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Contact/Breadcrumb'
import Herosection from '../components/Contact/Herosection'
import Contactfrom from '../components/Contact/Contactfrom'

export default function contact() {
  return (
    <MainLayout>
    <Breadcrumb/>
    <Herosection/>
    <Contactfrom/>
    </MainLayout> 
  )
}
