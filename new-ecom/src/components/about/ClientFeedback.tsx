import React from 'react'
import Feedbackcard from '../cards/abouts/Feedbackcard'
import { FeedbackcardArr } from '@/src/utils/about'

export default function ClientFeedback() {
  return (
    <section className="w-full main-container my-20">
     <div className='w-full flex flex-col items-center justify-center  gap-2 py-8'>
        <h1 className='text-4xl text-black font-bold text-center'>Client Feedback</h1>
        <p className='text-lg text-center'>The valuable opinion of our clients.</p> 
        </div>
   
    <div className='w-full grid  grid-cols-2 gap-6 p-6'>
 {
   
   FeedbackcardArr.map((item:any)=>(
    <div key={item.id}>
        <Feedbackcard item={item} />

    </div>
 
 ))}
</div>


  </section>

  )
}
