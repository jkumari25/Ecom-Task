import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {  heelButtom1 } from '@/src/assets/blog';
import { blogArrType } from '@/src/types';
type prop={
  item:blogArrType
}
export default function Blogcard({item}:prop) {
  return (
    <section className='w-full flex flex-col items-center justify-center  gap-6 p-4 border'>
                    <div className='w-full transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-500'>
                    <img src={item.img.src} alt="" className='w-auto h-full'/>
                    </div> 
                    <div className="w-full flex flex-col items-center justify-center  gap-4 ">
                     <span className='w-full grid grid-cols-2'>
                    <p className='text-sm hover:text-[#f8796c] gap-2'> <PersonOutlineIcon className='text-[#f8796c]'/> {item.title}</p> 
                    <p className='text-sm hover:text-[#f8796c] center gap-2'> <ChatBubbleRoundedIcon className='text-[#f8796c]'/>{item.comment}</p> 
                    </span>
                    <h1 className='text-lg  hover:text-[#f8796c]'>{item.subtitle}</h1>  
                    </div>
                    <p className='w-full border-t border-t-gray-300 center '></p>
                    <span className='w-full grid grid-cols-2 py-2 px-4 gap-10 '>
                    <p className='text-sm text-[#f8796c]  gap-2'><CalendarMonthIcon/> {item.date}</p>
                    <p className='text-lg text-[#f8796c] '>Read More</p> 
                    </span>
               

      
    </section>
  )
}
