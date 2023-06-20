import { VideoBanner } from '@/src/assets/about'
import Dialog from '@mui/material/Dialog';import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Backdrop from '@mui/material/Backdrop';
export default function Videosection() {
  const [open, setOpen] =useState(false)
  const handleClose = () => setOpen(false);
  return (
    <section className='main-container w-full'>

        <section className='w-full  h-[60vh] bg-center bg-no-repeat bg-cover ' style={{backgroundImage:`url(${VideoBanner.src})`}} >
            <div className='w-full flex items-center justify-center py-56 '>
            <span className=" py-5 px-5 border-4 border-text[#e4ecf2] hover:border-[#f8796c]  text-[#f8796c]">
                <PlayArrowIcon className='bg-white border  w-14 h-14' onClick={()=>{setOpen(true)}}/>
            </span>
            </div>
            <Dialog
      
        maxWidth={'md'}
        
        open={open}
        onClose={handleClose}
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I3C0LYeIxIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Dialog>


        </section>
    </section>

  )
}
