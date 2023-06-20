import { banner1, banner2 } from '@/src/assets/home/breadcrumb'
import React from 'react'

export default function Bannersection() {
  return (
    <section className='w-full'>
      <div className='w-full flex items-center justify-center gap-6' >
       <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-500'>
        <img src={banner2.src} alt="" className='w-auto h-full'/>
        </div>
        <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-500'>
        <img src={banner1.src} alt="" className='w-auto h-full'/>
        </div>
        </div>
    </section>
  )
}
