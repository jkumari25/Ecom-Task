import { amazon, apple, bitcoin, dakna1, googlepay, paypal, shopify, visa } from '@/src/assets/shop'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Product() {
  return (
    <section className="w-full main-container grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <div className='w-full h-full py-4 '>
      <img src={dakna1.src} alt=""  className="w-full h-full object-cover"/>
    </div>
    <div className="w-full flex flex-col items-start justify-center gap-2  p-4">
        <p className=" text-yellow-500 text-lg font-bold"><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/> No reviews</p>
        <h1 className="text-3xl  text-[#071c1f]">G. a product</h1>
        <p className="text-4xl font-bold capitalize text-[#071c1f]">$33.00</p>
        <p className="text-lg tracking-wide text-[#071c1f] ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
        <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
         <div className='w-full flex flex-col items-start justify-start gap-4  p-2 '>
                  <p className='text-sm'><b>Vendor:</b><span> Vendor G</span></p>
                  <p className='text-sm '><b>Type:</b><span>  Type G</span></p>
                 </div>
                 <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
              <span className="w-full flex items-center justify-start gap-8">
            <span className='w-full gap-4'>
                <p className=" text-black text-sm buttonfx slideleft px-8 py-2 overflow-hidden  capitalize hover:text-[#f8796c] border-2 gap-6"> Buy from amazon</p>
                <span className='w-full flex capitalize gap-4  '>
                  <p className='text-sm hover:text-[#f8796c]'><FavoriteBorderIcon/> Remove From wishlist</p>
                  <p className='text-sm hover:text-[#f8796c]'><FavoriteBorderIcon/>  Go to wishlist</p>
                  <p className='text-sm hover:text-[#f8796c]'><CompareArrowsIcon/> Compare</p>
                  
                  </span>
                  <p className='text-sm hover:text-[#f8796c]'><MailOutlineIcon/> Ask about this product</p>
            </span>
            
        </span>
        <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
        <span className='w-full flex gap-4 text-[#071c1f]'>
        <p className='text-lg hover:text-[#f8796c]'> Share:</p>
        <p className='text-sm hover:text-[#f8796c]'><FacebookIcon/> Facebook</p>
        <p className='text-sm hover:text-[#f8796c]'><TwitterIcon/> Twitter</p>
        <p className='text-sm hover:text-[#f8796c]'><PinterestIcon/> Pinterest</p>      
        </span>
        <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
        <h1 className='text-xl capitalize font-bold'>Secure Payment Gateway</h1>
        <div className='w-full gap-4  '>
                 
                 <span className='w-full flex items-start justify-start gap-6  '>
                 <img src={shopify.src} alt="" className='w-auto h-full'/>
                 <img src={amazon.src} alt="" className='w-auto h-full'/>
                 <img src={apple.src} alt="" className='w-auto h-full'/>
                 <img src={bitcoin.src} alt="" className='w-auto h-full'/>
                 <img src={googlepay.src} alt="" className='w-auto h-full'/>
                 <img src={paypal.src} alt="" className='w-auto h-full'/>
                 <img src={visa.src} alt="" className='w-auto h-full'/>
                  </span>
                 </div>
    </div>


   
</section> 
  )
}
