import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/collection/Breadcrumb'
import Featuredsection from '../components/collection/Featuredsection'
import Herosection from '../components/collection/Herosection'

export default function Collection() {
  return (
    <MainLayout>
   <Breadcrumb/>
   <Herosection/>
   <Featuredsection/>
   </MainLayout> 
  )
}
