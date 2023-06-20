import React from 'react'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { heel1, heel2, heel3, heelButtom1, heelButtom2 } from '@/src/assets/blog';

export default function Herosection() {
  return (
    <section className='w-full main-container flex items-center justify-center my-20'>
      <div className='w-full grid grid-cols-3 gap-6'>
       <div className='w-full flex flex-col items-start justify-start gap-4'>
        <h1 className='text-xl capitalize font-semibold'>search</h1>
        <div className="w-full flex">
                <TextField
                placeholder="Search our store"
                inputProps={{ style: {  color: '',border:'2px solid white',  borderRadius:".5rem"} }}
                />
                <button className="px-5 py-2 text-white bg-[#f8796c] hover:bg-[#071c1f]"><SearchIcon/></button>
              </div>
                    <p className='w-72 py-4 gap-10 border-t border-t-gray-300 center'></p>
                    <p className='text-2xl text-black'>Recent Post</p>
                    <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4">
                    
                    <img src={heel1.src} alt="" className='w-auto h-full'/>
                    
                    <div className="w-full flex flex-col items-start justify-start">
                    <h1 className='text-lg hover:text-[#f8796c]'>Ten Unbelievable Facts..</h1>
                    <p className='text-sm text-[#f8796c]'><CalendarMonthIcon/> May 09, 2022</p>  
                    </div>
               </div>
               <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4">
                    
                    <img src={heel2.src} alt="" className='w-auto h-full'/>
                    
                    <div className="w-full flex flex-col items-start justify-start">
                    <h1 className='text-lg hover:text-[#f8796c]'> 7 Things You Need To..</h1>
                    <p className='text-sm text-[#f8796c]'><CalendarMonthIcon/> May 09, 2022</p>  
                    </div>
               </div>
               <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4">
                    
                    <img src={heel3.src} alt="" className='w-auto h-full'/> 
                    <div className="w-full flex flex-col items-start justify-start">
                    <h1 className='text-lg hover:text-[#f8796c]'> 10 Reasons Why You..</h1>
                    <p className='text-sm text-[#f8796c]'><CalendarMonthIcon/> May 09, 2022</p>  
                    </div>
               </div>
               
       </div>
       <div className="w-full flex  flex-col items-center justify-center gap-4 p-4 border">
                    <div className='w-full'>
                    <img src={heelButtom1.src} alt="" className='w-auto h-full'/>
                    </div> 
                    <div className="w-full flex flex-col items-center justify-center  gap-4 ">
                     <span className='w-full grid grid-cols-2'>
                    <p className='text-sm hover:text-[#f8796c] gap-2'> <PersonOutlineIcon className='text-[#f8796c]'/> by: Marino Themes</p> 
                    <p className='text-sm hover:text-[#f8796c] center gap-2'> <ChatBubbleRoundedIcon className='text-[#f8796c]'/> 3 comments</p> 
                    </span>
                    <h1 className='text-xl  hover:text-[#f8796c]'>Ten Unbelievable Facts About Handmade.</h1>  
                    </div>
                    <p className='w-full border-t border-t-gray-300 center '></p>
                    <span className='w-full grid grid-cols-2 py-2 px-4 gap-10 '>
                    <p className='text-sm text-[#f8796c]  gap-2'><CalendarMonthIcon/> May 09, 2022</p>
                    <p className='text-lg text-[#f8796c]  '>Read More</p> 
                    </span>
               </div>


               <div className="w-full flex  flex-col items-center justify-center p-4 gap-4 border">
                    <img src={heelButtom2.src} alt="" className='w-auto h-full'/> 
                    <div className="w-full flex flex-col items-center justify-center gap-4 ">
                     <span className='w-full grid grid-cols-2'>
                    <p className='text-sm hover:text-[#f8796c]  gap-2'> <PersonOutlineIcon className='text-[#f8796c]'/> by: Marino Themes</p> 
                    <p className='text-sm hover:text-[#f8796c] center gap-2'> <ChatBubbleRoundedIcon className='text-[#f8796c]'/> 3 comments</p> 
                    </span>
                    <h1 className='text-xl  hover:text-[#f8796c]'>7 Things You Need To Know About Handmade Today.</h1>  
                    </div>
                    <p className='w-full border-t border-t-gray-300 center '></p>
                    <span className='w-full grid grid-cols-2 py-2 px-4 gap-10 '>
                    <p className='text-sm text-[#f8796c]  gap-2'><CalendarMonthIcon/> May 09, 2022</p>
                    <p className='text-lg text-[#f8796c] '>Read More</p> 
                    </span>
               </div>
      </div>
    </section>
  )
}
