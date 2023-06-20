import { FreecardArrTypes } from '@/src/types';
import React from 'react';
type prop={
  item:FreecardArrTypes
}
function Freecards({item}:prop) {
  return (
    <section  className='w-full flex flex-col items-center justify-center  gap-6 '>
    <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-6  ">

   <div className="w-full lg:w-16 h-auto">
   <img src={item.img.src} alt="" className='w-auto h-full'/>
   </div>

 <div className="w-full flex flex-col items-start justify-start">
 <h1 className='text-lg font-bold '>{item.title}</h1>
 <p className='text-sm  capitalize'>{item.subTitle}</p>  
 </div>
</div>

</section>
  );
}

export default Freecards;