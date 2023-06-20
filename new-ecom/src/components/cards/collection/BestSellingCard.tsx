import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BestArrType } from '@/src/types';
type prop={
    item:BestArrType
  }
export default function BestSellingCard({item}:prop) {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center gap-2  '>
    <div className='w-full flex items-center justify-center gap-2 relative overflow-hidden'>
    <img src={item.img.src} alt="" className='w-60 h-52'/>
    <div className='w-full h-full absolute flex items-center justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300 gap-2 -my-20 cursor-pointer '>
     <span className='px-3 py-2 bg-white hover:bg-[#faa49b] text-[#faa49b] hover:text-white text-center'>
        <RemoveRedEyeIcon className='text-lg'/>
        </span>
        <span className='px-3 py-2 bg-white hover:bg-[#faa49b] text-[#faa49b] hover:text-white text-center'>
        <FavoriteBorderIcon  className='text-lg'/>
        </span>
        <span className='px-3 py-2 bg-white hover:bg-[#faa49b] text-[#faa49b] hover:text-white text-center'>
        <CompareArrowsIcon  className='text-lg'/>
        </span>
        <span className='px-3 py-2 bg-white hover:bg-[#faa49b] text-[#faa49b] hover:text-white text-center'>
        <ShoppingCartIcon  className='text-lg'/>
        </span>
    </div>
    </div>
     <h1 className='text-sm text-center hover:text-[#f8796c]'>{item.title}</h1>
     <p className='text-lg text-center'>{item.subtitle}</p> 
        
   </section>
  )
}
