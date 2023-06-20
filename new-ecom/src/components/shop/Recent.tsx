import React from 'react';
import RecentCard from '../cards/shop/RecentCard';
import { recentArr } from '@/src/utils/shop';

function Recent() {
    return (
        <section className='w-full my-20'>
         <div className='w-full flex flex-col items-center justify-center py-8 gap-2'>
        <h1 className='text-4xl text-center text-[#071c1f] font-bold'>Recent View</h1>
        <p className='text-lg text-center text-[#071c1f]'>Recently viewed products</p> 
        </div>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
    
    {
                     recentArr.map((item:any)=>(
                          <div key={item.id}>
                              <RecentCard item={item}/>
                          </div>
                      ))
                  }
   
  
    </div>
    </section>
    );
}

export default Recent;