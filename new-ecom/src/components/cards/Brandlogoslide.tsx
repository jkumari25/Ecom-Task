import React from 'react'

export default function Brandlogoslide({item}:any) {
  return (
    <div className='w-full main-container my-24 transition ease-in-out delay-350  hover:-translate-y-1 hover:scale-105  duration-300'>
    <div className='w-full h-28' >
                     <img src={item.img.src} alt="" className='w-full h-full m-auto object-contain' />
                 </div>
 </div>
  )
}
