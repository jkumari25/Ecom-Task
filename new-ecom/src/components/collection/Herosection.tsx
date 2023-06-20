import { BestArr } from '@/src/utils/collection'
import React from 'react'

import BestSellingCard from '../cards/collection/BestSellingCard'

export default function Herosection() {
  return (
    <section className='w-full main-container flex items-center justify-center gap-6'>
    <div className='w-[30%] col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
     <span className='w-full flex flex-col items-start justify-start gap-1 '>
      <p className='text-[#071c1f] text-2xl font-bold'>Availability</p>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">In stock </label>
        <p className='ml-auto text-gray-600'>(13)</p>
    </span>
    <span className=' w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Out of stock </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    </span>
    <div className='w-full flex flex-col items-start justify-start  py-2  gap-1'>
      <p className='text-[#071c1f] text-2xl font-bold'>Brand</p>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor A </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor D  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor E </label>
        <p className='ml-auto text-gray-600'>(5)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor G  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor I </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor J  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor K </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor L </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    </div>
    <div className='w-full flex flex-col items-start justify-start  py-2  gap-1'>
      <p className='text-[#071c1f] text-2xl font-bold'>Product Type</p>
    <span className='w-full flex   gap-2 '>
        <input type="checkbox" id="" />
        <label htmlFor="">Type A</label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex  gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Vendor D  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex  gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type E</label>
        <p className='ml-auto text-gray-600'>(5)</p>
    </span>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type G   </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex  gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type I </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type J  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex  gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type K </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Type L </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    </div>
    <div className='w-full flex flex-col items-start justify-start  py-2  gap-1'>
      <p className='text-[#071c1f] text-2xl font-bold'>Color</p>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">black  </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">blue </label>
        <p className='ml-auto text-gray-600'>(3)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Cream </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">gold   </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">gray  </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">magenta </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">maroon </label>
        <p className='ml-auto text-gray-600'>(2)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">Orange  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    </div>
    <div className='w-full flex flex-col items-start justify-start  py-2  gap-1'>
      <p className='text-[#071c1f] text-2xl font-bold'>Size</p>
    <span className='w-full flex gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">s </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">m  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">l </label>
        <p className='ml-auto text-gray-600'>(5)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">xl </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    <span className='w-full flex   gap-2'>
        <input type="checkbox" id="" />
        <label htmlFor="">xxl  </label>
        <p className='ml-auto text-gray-600'>(1)</p>
    </span>
    </div>
    </div>



    <div className='w-[70%] '>
        <div className='w-full grid grid-cols-3 gap-6'>
         <select className='w-44 text-sm text-[#071c1f] px-4 py-3 border-gray-300 shadow-sm rounded  border'>
            <option value="">Featured</option>
            <option value="">Best Selling</option>
            <option value="">Alphabetically, A-Z</option>
            <option value="">Alphabetically, Z-A</option>
            <option value="">Price, low to high</option>
            <option value="">Price, high to low</option>
            <option value="">Date, new to old</option>
            <option value="">Date, old to new</option>
         </select>
         <span className=''>
         <p className='text-xl text-[#071c1f]'>Showing 1 - 12 of 14 result</p>
         </span>
         <div className=' flex items-center justify-center text-white  border'>

         </div>
        </div>
    <div className='w-full grid  grid-cols-3  gap-6  py-6 '>
                    {
                        BestArr.map((item)=>(
                            <div key={item.id}>
                                <BestSellingCard item={item}/>
                            </div>
                        ))
                    }
        </div>
        </div>
    

  </section>
  )
}
