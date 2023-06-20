import { serviceArrType } from '@/src/types'
import React from 'react'
type prop={
    item:serviceArrType
  }
export default function ServiceCard({item}:prop) {
  return (
    <section className="w-full  flex  flex-col items-start justify-start group shadow-inner border hover: py-8 px-6  gap-4">
    <div className="w-32 h-20  overflow:hidden gap-4">
      <img src={item.img.src} alt="" className="w-full h-full object-contain" /> 
    </div>
    <div className="w-full h-full flex flex-col items-start justify-start  gap-4">
    <h1 className="text-2xl text-[#071c1f] hover:text-[#f8796c] capitalize">{item?.title }</h1>
    <span className='w-full flex flex-col items-start justify-start gap-6'>
     <h1 className='text-sm  text-[#071c1f] tracking-wider'>{item?.content}</h1>
    </span>
    <div className='w-full h-full'>
        <span className='w-0 group-hover:w-[80%] transition-all duration-[2s] ease-in-out bg-red-600 h-10'>
            <p className='text-sm text-[#8cb2b2] hover:text-[#f8796c] capitalize'>Learn More</p>
        </span>
    </div>
  </div>
</section>
  )
}
