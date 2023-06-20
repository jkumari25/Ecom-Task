import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Blogcard from '../cards/blogs/Blogcard';
import { blogArr } from '@/src/utils/blog';
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { heel1, heel2, heel3 } from '@/src/assets/blog';
export default function Archive() {
  return (
    <section className='w-full main-container flex items-center justify-center -my-10'>
    <div className='w-[30%]'>
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
     <div className='w-full flex flex-col items-start justify-start '>
      <span className='w-full  flex flex-col items-start justify-start gap-6 p-4 '>
      <h1 className='text-2xl capitalize font-bold'>Archive</h1>
                  <p className='text-xl text-black'>May 2022</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> Ten Unbelievable Facts About Handmade.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> 7 Things You Need To Know About Handmade Today.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'> <FiberManualRecordIcon/> 10 Reasons Why You Cannot Learn Handmade Well.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> Is Handmade Any Good? 10 Ways You Can Be Certain.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/>Learn From These Mistakes Before You Learn Handmade.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> Five Moments To Remember From Handmade.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> 10 Awesome Things You Can Learn From Handmade.</p>
                  <p className='text-sm tracking-wider text-[#071c1f] hover:text-[#f8796c]'><FiberManualRecordIcon/> This Story Behind Handmade Will Haunt You Forever!</p>
                  <p className='w-80 py-4 gap-10 border-t border-t-gray-300 center'></p>
                  </span>
                 <div className='w-full border p-4 '>
                 <h1 className='text-2xl capitalize font-bold py-2 px-4'>Tag</h1>
                 <span className='w-full grid grid-cols-2 uppercase gap-4  '>
                  <p className='text-sm bg-[#f2f6f7] hover:bg-[#f8796c] hover:text-white center p-4'>flower top</p>
                  <p className='text-sm bg-[#f2f6f7] center hover:bg-[#f8796c] p-4 hover:text-white'>handmade</p>
                  <p className='text-sm bg-[#f2f6f7] center hover:bg-[#f8796c] hover:text-white '>tissue box</p>
                  <p className='text-sm bg-[#f2f6f7] center hover:bg-[#f8796c] hover:text-white p-4'>basket</p>
                  </span>
                 </div>
               </div>
             
    </div>
    <div className='w-[70%] '>
    <div className='w-full grid grid-cols-1 grid-cols-2  gap-6 p-6 mt-28'>
                    {
                        blogArr.map((item)=>(
                            <div key={item.id}>
                                <Blogcard item={item}/>
                            </div>
                        ))
                    }
        </div>
        </div>
    

  </section>
  )
}
