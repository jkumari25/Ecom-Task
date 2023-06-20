import React from 'react'
import OurteamCard from '../cards/OurteamCard'
import { OurTeamArr } from '@/src/utils/about'

export default function OurTeam() {
  return (
    <section className='w-full my-20'>
         <div className='w-full flex flex-col items-center justify-center py-8 gap-2'>
        <h1 className='text-4xl text-center'>Team Member</h1>
        <p className='text-lg text-center'>Our creative team members</p> 
        </div>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
    
    {
                     OurTeamArr?.map((item:any)=>(
                          <div key={item.id}>
                              <OurteamCard item={item}/>
                          </div>
                      ))
                  }
   
  
    </div>
    </section>
  )
}
