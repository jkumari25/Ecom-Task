import { shopArr } from '@/src/utils/shop'
import React, { useState } from 'react'
import Shopcard from '../cards/shop/Shopcard'

export default function Herosection() {
    const [isActiveIndex, setIsActiveIndex]=useState<number>(0)
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-start justify-start gap-10 my-20">

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6  ">
          {
            shopArr.map((val:any,index:number)=>(

            <span className={`${isActiveIndex == index && ""}  `} key={val.id}
            onClick={()=>{
              setIsActiveIndex(index)
            }}
            > 
              <button className="  text-lg">{val.title}</button>
            </span>
            ))
          }

          </div>
          <div className='w-full'>
            {
              <Shopcard item={shopArr[isActiveIndex].list}/>
            }
          </div>

        
      </section>
  )
}
