import { about1 } from '@/src/assets/about'
import React from 'react'

export default function Herosection() {
  return (
    <section className="w-full  flex flex-col items-center justify-start my-20">      
    <div className='w-full h-full main-container flex flex-col lg:flex-row items-center justify-start gap-6'>
        <div className='w-full flex flex-col items-start justify-start gap-4 '>
        <p className="text-2xl">Provide the best</p>
        <h1 className="text-4xl tracking-wider capitalize ">Handmade Products.</h1>
         <p className="text-lg  text-gray-900">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of {`"de Finibus Bonorum et Malorum"`} (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
        <p className=" text-gray-600 text-lg">This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, {`"Lorem ipsum dolor sit amet.."`}, comes from a line in section 1.10.32.</p>
           
        </div>
        <div className='w-full  flex flex-col items-center justify-center gap-2' >
            <div className='p-6 w-full h-full '>
                <img src={about1.src} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
   
</section>
  )
}
