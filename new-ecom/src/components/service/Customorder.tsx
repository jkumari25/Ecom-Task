import React from 'react'

export default function Customorder() {
  return (
    <section className="w-full main-container  flex flex-col items-center justify-center my-20">
    <span className="w-full flex flex-col items-center justify-center gap-4 bg-[#f6f7f8] py-10">
          <h2 className="text-lg font-bold text-[#f8796c] capitalize">Custom Order</h2>
          <p className='text-5xl text-[#071c1f] font-bold'>+0123-456789</p>  
          <span className="w-full flex items-center justify-center gap-2 " >
          <p className=" text-[#071c1f] text-lg  hover:bg-[#f8796c] px-8 py-4 overflow-hidden  font-bold capitalize hover:text-white border-2">Make a Call</p>
          <p className=" text-[#071c1f] text-lg  hover:bg-[#f8796c] px-8 py-4 overflow-hidden  font-bold capitalize hover:text-white border-2">Send Message</p>
          </span>
        </span>
        
    </section>

  )
}
