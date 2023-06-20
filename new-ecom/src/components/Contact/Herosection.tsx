import React from 'react'
import ContactCard from '../cards/contact/ContactCard'
import { contactArr } from '@/src/utils/contact'

export default function Herosection() {
  return (
    <div className='w-full main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
    
    {
                    contactArr?.map((item:any)=>(
                          <div key={item.id}>
                              <ContactCard item={item}/>
                          </div>
                      ))
                  }
   
  
    </div>
    
  )
}
