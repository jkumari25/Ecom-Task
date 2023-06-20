import React, { useState } from 'react'
import {main_logo} from "../assets/navbar"
import { navArr } from '../utils/navbar'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EastIcon from '@mui/icons-material/East';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar() {
  const [isSubMenu, setIsSubMenu] =useState<boolean>(true)
  const router = useRouter()
  return (
    <section className='w-full  !transition-all !ease-in-out !duration-700 hidden lg:block overflow-hidden' >
    <section className='w-full main-container flex items-center justify-between h-20 !transition-all !ease-in-out !duration-700'>
      <picture className='w-2/5 items-center justify-start h-16'>
        <Link href={"/"}>
        <img src={main_logo.src} alt="" className='w-auto h-full'/>
        </Link>
      </picture>
      <div className='w-full h-full flex items-center justify-between'>
        {
          navArr.map((item)=>(
            <span className='h-full center gap-4 py-4 group !transition-all !ease-in-out !duration-700 relative' key={item?.id} onClick={()=>router.push(`${item.path}`)}>
            <p className='text-lg capitalize cursor-pointer'>{item.title}</p> 
            </span>
          ))
        }
      
      </div>
    </section>
    </section>
  )
}