import React from 'react'

export default function Shopcard({item}:any) {
  return (
    <div className="w-full flex flex-col items-start justify-start  gap-4 ">
            <h1 className="text-4xl  "> {item.subTitle} </h1>
            
            <p className="text-black text-lg ">{item.descriptionOne}</p>
            <img src={item.img.src} alt="" className='w-auto h-full'/>
            <p className="text-black text-lg ">{item.descriptionTwo} </p>
            
          </div>
          
  )
}
