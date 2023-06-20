import { handMadeArrType } from '@/src/types'
import React from 'react'
type prop={
    item:handMadeArrType
  }
export default function Breadcrumbcard({item}:prop) {
  return (
    <section className="w-full main-container grid grid-cols-1 lg:grid-cols-2 ">
    <div className="w-full flex flex-col items-start justify-center gap-4">
        <p className=" text-[#f8796c] text-lg font-bold">{item.title}</p>
        <h1 className="text-5xl font-bold capitalize">{item.subtitle}</h1>
        <p className="lg:text-lg ">{item.content}</p>
         <span className="w-full flex items-center justify-start gap-8">
            <span>
                <p className=" text-black text-lg buttonfx slideleft px-8 py-2 overflow-hidden  font-bold capitalize hover:text-[#f8796c] border-2">Shop Now</p>
            </span>
        </span>
    </div>
    <div className='w-full h-full py-4 mt-8'>
      <img src={item.img.src} alt="" key={item.id} className="w-full h-full object-cover"/>
    </div>
</section> 
  )
}
