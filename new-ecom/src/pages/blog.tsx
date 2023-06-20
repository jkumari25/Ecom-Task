import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/blog/Breadcrumb'
import Herosection from '../components/blog/Herosection'
import Archive from '../components/blog/Archive'
import Newsletter from '../components/home/Newsletter'
// import Newblog from '../components/blog/Newblog'

export default function Blog() {
  return (
    <MainLayout>
    <Breadcrumb/>
    {/* <Herosection/> */}
    {/* <Newblog/> */}
    <Archive/>
    <Newsletter/>
   </MainLayout> 
  )
}
