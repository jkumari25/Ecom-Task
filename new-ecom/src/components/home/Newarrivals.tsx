import React from 'react'
import Newarrivalscard from '../cards/Newarrivalscard'
import { arrivalsArr } from '@/src/utils/home'


export default function Newarrivals() {
  return (
    <section className='w-full'>
        <div className='w-full flex flex-col items-center justify-center my-20 gap-2'>
        <h1 className='text-4xl text-center'>New Arrivals</h1>
        <p className='text-lg text-center'>There are many variations of passages</p> 
        </div>
    <div className='w-full grid grid-cols-5 gap-6 p-4'>
    {
      
      arrivalsArr.map((item:any)=>(
       <div key={item.id}>
           <Newarrivalscard item={item} />

       </div>
    
    ))}
</div>
<div className='w-full flex items-center justify-center py-6'>
<p className=" text-white text-lg buttonfx slideleft px-8 py-2 overflow-hidden  font-bold capitalize hover:text-[#f8796c] border-2">View All</p>
</div>
</section>
  )
}
