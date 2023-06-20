import { OurTeamArrType } from '@/src/types'
import React from 'react'
type prop={
    item:OurTeamArrType
  }
export default function OurteamCard({item}:prop) {
  return (
    <section className="w-full flex  flex-col items-center justify-center shadow-inner border px-8 py-12 hover:bg-[#071c1f] transition-all duration-300 ease-in-out group gap-4">
    <div className="w-40 h-40 rounded-full overflow:hidden gap-2">
      <img src={item.img.src} alt="" className="w-full h-full object-cover rounded-full" /> 
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
    <h1 className="text-2xl text-[#f8796c] group-hover:text-white">{item?.title }</h1>
    <span className='w-full flex items-center justify-center gap-2'>
     <h1 className='text-sm  group-hover:text-white'>{item?.subtitle}</h1>
    </span>
  </div>
</section>
  )
}
