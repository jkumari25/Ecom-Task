import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/about/Breadcrumb'
import Herosection from '../components/about/Herosection'
import Videosection from '../components/about/Videosection'
import OurTeam from '../components/about/OurTeam'
import Freeshipping from '../components/home/Freeshipping'
import Sliderpage from '../components/about/Sliderpage'
import ClientFeedback from '../components/about/ClientFeedback'
import BestJourney from '../components/about/BestJourney'

export default function AboutUs() {
  return (
   
    <MainLayout>
    <Breadcrumb/>
    <Herosection/>
    <BestJourney/>
    <Videosection/>
    <OurTeam/>
    <Sliderpage/>   
    <ClientFeedback/>  
    <Freeshipping/>
   </MainLayout> 
    
  )
}
