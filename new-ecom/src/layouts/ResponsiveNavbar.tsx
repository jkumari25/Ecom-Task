import React, { useState } from 'react'
import { main_logo } from '../assets/navbar'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EastIcon from '@mui/icons-material/East';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse } from '@mui/material';
import { navArr } from '../utils/navbar';
import Link from 'next/link';
export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen]=useState<boolean>(false)
  return (
    <section className='lg:hidden block sticky top-0 z-50'>
    <section className='w-full bg-white flex items-center justify-between  py-4 main-container'>
    <Link href={"/"}>
      <picture className='w-3/4 flex items-center justify-start'>
            <img src={main_logo.src} alt="" className='w-auto h-8 ' />
      </picture>
      </Link>
      <div className='w-full flex items-center justify-between'>
      <Link href={"/contact-us"}>
      <button className='px-4 py-2 text-xs rounded-md bg-black uppercase hover:bg-white hover:text-black border border-black !transition-all !duration-700 !ease-in-out text-white group center'>
        <FiberManualRecordIcon className='block group-hover:hidden !text-white !text-sm !transition-all !duration-700 !ease-in-out'/> <EastIcon className='hidden group-hover:block '/>Contact Us</button>
        </Link>
      </div>
      <div className='w-1/4 flex items-center justify-end'>
        {!isOpen ? <>
      <MenuIcon onClick={()=>{setIsOpen(true)}}/>
        </>:<>
        <CloseIcon onClick={()=>{setIsOpen(false)}}/>
        </>}
      </div>
    </section>
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <section className='w-full z-[999] bg-white'>
      {navArr.map((item)=>(
        <Link href={`${item.path}`}  key={item.id}>
      <h2 className='w-full border-b border-b-black p-2 capitalize text-lg font-bold'>
        {item.title}
      </h2>
        </Link>
      ))}
      </section>
    </Collapse>
    </section>
  )
}
