import { recentArrType } from '@/src/types'
import React from 'react'
type prop={
    item:recentArrType
  }
export default function RecentCard({item}:prop) {
  return (
    <section className="w-full flex  flex-col items-center justify-center gap-4">
    <div className="w-full h-full  overflow:hidden gap-4">
      <img src={item.img.src} alt="" className="w-full h-full object-cover " /> 
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
    <h1 className="text-lg hover:text-[#f8796c] group-hover:text-[#071c1f]">{item?.title }</h1>
    <span className='w-full flex items-center justify-center gap-2'>
     <h1 className='text-sm  group-hover:text-white'>{item?.subtitle}</h1>
    </span>
  </div>
</section>
  )
}
