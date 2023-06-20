import { shoppingArr } from '@/src/utils/shopping'
import React from 'react';
import { useRouter } from 'next/router';
import Description from '../components/shopping/Description';
import Feedback from '../components/shopping/Feedback';
import ShippingPolicy from '../components/shopping/ShippingPolicy';
import SizeChart from '../components/shopping/SizeChart';
import MainLayout from '../layouts/MainLayout';

export default function AllReview() {
    const router = useRouter();

  return (
    <div>
        <div className='w-full h-full flex items-center justify-between'>
        {
          shoppingArr.map((item)=>(
            <span className='h-full center gap-4 py-4 group !transition-all !ease-in-out !duration-700 relative' key={item?.id} onClick={()=>router.push(`${item.path}`)}>
            <p className='text-lg capitalize cursor-pointer'>{item.title}</p> 
            </span>
          ))
        }
      
      </div>
      {/* <Description />
      <Feedback />
      <ShippingPolicy />
      <SizeChart /> */}
    </div>
  )
}
