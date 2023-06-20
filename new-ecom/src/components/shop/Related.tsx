import React from 'react'
import Relatedcard from '../cards/shop/Relatedcard'
import { relatedArr } from '@/src/utils/shop'

export default function Related() {
  return (
    <section className='w-full my-20'>
         <div className='w-full flex flex-col items-center justify-center py-8 gap-2'>
        <h1 className='text-4xl text-center text-[#071c1f] font-bold'>Related Products</h1>
        <p className='text-lg text-center text-[#071c1f]'>You may also like</p> 
        </div>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
    
    {
                     relatedArr.map((item:any)=>(
                          <div key={item.id}>
                              <Relatedcard item={item}/>
                          </div>
                      ))
                  }
   
  
    </div>
    </section>
  )
}
