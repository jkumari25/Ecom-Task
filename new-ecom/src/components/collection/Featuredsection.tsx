 import { featuredArr } from '@/src/utils/collection'
// import React, { useState } from 'react'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// export default function Featuredsection() {
//   const [activeIndex, setActiveIndex] =useState<any>(0)
//   console.log(activeIndex)
// function increase(){
// if(activeIndex >= featuredArr.length - 1){
//   setActiveIndex(0);
// }else{
// setActiveIndex(activeIndex + 1)
// }
// }

// function decrease(){
//   if(activeIndex <= 0){
//     setActiveIndex(featuredArr.length-1)
//   }else{
//   setActiveIndex(activeIndex - 1)
//   }
// }

//   return (
//     <section className='w-full my-20'>
//     <div className='w-full flex flex-col items-center justify-center py-8 gap-2'>
//    <h1 className='text-4xl text-center text-[#071c1f] font-bold'>Featured Collection</h1>
//    <p className='text-lg text-center text-[#071c1f]'>There are many variations of passages</p> 
//    </div>
// <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 relative'>
//    <span className='absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-300 rounded-full'>
//    <ArrowBackIosIcon onClick={decrease}/>
//    </span>
//    <span className='absolute right-6 top-1/2 -translate-y-1/2 p-3  rounded-full bg-gray-300'>
//    <ArrowForwardIosIcon onClick={increase}/>
//    </span>
// {
//                 featuredArr.map((item)=>(
//                   <section className="w-full flex  flex-col items-center justify-center gap-4" key={item.id}>
//                   <div className="w-full grid   overflow-hidden gap-2">
//                     <img src={item.img.src} alt="" className="w-full h-full " /> 
//                   </div>
//                   <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
//                   <h1 className="text-2xl text-[#f8796c] group-hover:text-white">{item?.title }</h1>
//                   <span className='w-full flex items-center justify-center gap-2'>
//                    <h1 className='text-sm  group-hover:text-white'>{item?.content}</h1>
//                   </span>
//                 </div>
//               </section>
//                  ))
//              }


// </div>
// </section>
//   )
// }

import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function FeaturedSection() {


  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(3);

  const increase = () => {
    if (endIdx === featuredArr.length - 1) {
      // Reached the last item, reset the indices
      setStartIdx(0);
      setEndIdx(3);
    } 
    else {
      setStartIdx(startIdx + 1);
      setEndIdx(endIdx + 1);
    }
  };

  const decrease = () => {
    if (startIdx === 0) {
      // Reached the first item, go to the last item
      setStartIdx(featuredArr.length - 1 - 3);
      setEndIdx(featuredArr.length - 1);
    } 
    else {
      setStartIdx(startIdx - 1);
      setEndIdx(endIdx - 1);
    }
  };

  return (
    <section className="w-full my-20">
      <div className="w-full flex flex-col items-center justify-center py-8 gap-2">
        <h1 className="text-4xl text-center text-[#071c1f] font-bold">Featured Collection</h1>
        <p className="text-lg text-center text-[#071c1f]">There are many variations of passages</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 relative">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-300 rounded-full">
          <ArrowBackIosIcon onClick={decrease} />
        </span>
        <span className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-300">
          <ArrowForwardIosIcon onClick={increase} />
        </span>
        {featuredArr.slice(startIdx, endIdx + 1).map((item) => (
          <section className="w-full flex flex-col items-center justify-center gap-4" key={item.id}>
            <div className="w-full grid overflow-hidden gap-2">
              <img src={item.img.src} alt="" className="w-full h-full" />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <h1 className="text-2xl text-[#f8796c] group-hover:text-white">{item?.title}</h1>
              <span className="w-full flex items-center justify-center gap-2">
                <h1 className="text-sm group-hover:text-white">{item?.content}</h1>
              </span>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

