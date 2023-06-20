import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/shop/Breadcrumb'
import Herosection from '../components/shop/Herosection'
import Product from '../components/shop/Product'
import Freeshipping from '../components/home/Freeshipping'
import Recent from '../components/shop/Recent'
import Related from '../components/shop/Related'
import Gproduct from '../components/shop/Gproduct'
import Fqapage from '../components/shop/Fqapage'
import Description from '../components/shopping/Description'
import AllReview from './AllReview'


export default function Shop() {
  return (
    <MainLayout>
    <Breadcrumb/>
    <Gproduct/> 
    {/* <Product/> */}
    <Freeshipping/>
    {/* <Herosection/> */}
    <AllReview />
    {/* <Description/> */}
    <Related/>
    <Recent/>
  <Fqapage/>
   </MainLayout> 
  )
}
