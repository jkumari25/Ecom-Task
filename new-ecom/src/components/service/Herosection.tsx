import React from 'react'
import ServiceCard from '../cards/service/ServiceCard'
import { serviceArr } from '@/src/utils/sevice'

export default function Herosection() {
  return (
    <section className='w-full my-20'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
    
    {
                    serviceArr?.map((item:any)=>(
                          <div key={item.id}>
                              <ServiceCard item={item}/>
                          </div>
                      ))
                  }
   
  
    </div>
    </section>
  )
}
