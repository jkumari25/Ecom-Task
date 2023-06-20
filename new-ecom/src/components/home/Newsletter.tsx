import { TextField } from '@mui/material'
import React from 'react'

export default function Newsletter() {
  return (
    <section className="w-full main-container  flex flex-col items-center justify-center my-24">
      <span className="w-full flex flex-col items-center justify-center gap-6 bg-[#f6f7f8] py-10">
            <h2 className="text-4xl font-bold capitalize">Newsletter</h2>
            <p className='text-lg text-gray-700'>Learn about our most recent news, updates, and deals by subscribing</p>
            <div className="w-1/2 center h-full">
              <div className="w-full flex">
                <TextField
                fullWidth
                placeholder="email@example.com"
                inputProps={{ style: {  color: '',border:'2px solid white',  borderRadius:".5rem"} }}
                />
                <button className="px-6 py-3 text-white bg-[#f8796c] font-bold text-lg w-fit capitalize">subscribe</button>
              </div>
            </div>
          </span>
      </section>
  )
}
