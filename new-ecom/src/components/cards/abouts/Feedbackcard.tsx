import { FeedbackcardArrType } from '@/src/types';
import React from 'react';
type prop={
    item:FeedbackcardArrType   
}
function Feedbackcard({item}:prop) {
    return (
        <section  className='w-full flex flex-col items-center justify-center  gap-6 '>
        <div className="w-full flex  items-start justify-center  shadow-inner border ">
       <div className="w-48 h-52 p-8">
         <img src={item?.img.src} alt="img" className="w-full h-full object-cover" />
       </div>
    
     <div className="w-1/2 flex flex-col items-start justify-start py-10 gap-4">
       <h1 className="text-lg text-gray-600 "> {item.title} </h1>
       <p className="text-[#071c1f] text-xl font-semibold ">
       {item.subtitle}
       </p>
     </div>
   </div>
    
   </section>
    );
}

export default Feedbackcard;