import {  contactArrType } from '@/src/types'
import React from 'react'
type prop={
    item:contactArrType 
  } 
export default function ContactCard({item}:prop) {
  return (
    <section className="w-full flex  flex-col items-center justify-center shadow-inner border p-4">
    <div className="w-24 h-40  overflow:hidden gap-2">
      <img src={item.img.src} alt="" className="w-full h-full object-contain " /> 
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
    <h1 className="text-xl text-[#071c1f] capitalize ">{item?.title }</h1>
    <span className='w-full flex flex-col items-center justify-center gap-2'>
     <p className='text-sm'>{item?.content}</p>
     <p className='text-sm'>{item?.content1}</p>
    </span>
  </div>
 
</section>
  )
}
