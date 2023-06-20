import { amazon, apple, bitcoin, dakna1, dakna2, dakna3, dakna4, dakna5, googlepay, paypal, shopify, visa } from '@/src/assets/shop'
import React,{useState} from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const imgArr=[
  {
    id:1,
    img:dakna1
  },
  {
    id:2,
    img:dakna2
  },
  {
    id:3,
    img:dakna3
  },
  {
    id:4,
    img:dakna4
  },
]
export default function Gproduct() {
  const [isImg, setIsImg]= useState<number>(0)
  return (
    <section className='w-full main-container grid grid-cols-2 my-20 gap-6 !transition-all !duration-700 !ease-in-out'>
      <div className='w-full gap-6'>
      <img src={imgArr[isImg].img.src} alt="" className='w-full !transition-all !duration-700 !ease-in-out'/>

      <div className='grid grid-cols-4 gap-4 mt-4'>
      {
        imgArr.map((item, index)=>(

          <img src={item.img.src} alt="" className='w-full cursor-pointer border border-[#f8796c] !transition-all !duration-700 !ease-in-out' key={item.id}
          onClick={()=>{setIsImg(index)}}
          />
        ))
      }

      </div>
      </div>

      <div className='w-full'>
      <div className='w-full flex flex-col items-start justify-start  mb-4 gap-4'>
        <div className='flex gap-1 text-sm text-yellow-400' >
        <StarBorderIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <span className='text text-yellow-400'>No reviews</span>
        </div>
        <h1 className="text-3xl  text-[#071c1f]">G. a product</h1>
        <p className="text-4xl  capitalize text-[#071c1f]">$33.00</p>
        <p className="text-lg tracking-wide text-[#071c1f] ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
      </div>
      <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
        <div className='w-full flex flex-col items-start justify-start gap-1'>
            <span className='flex gap-6'>
            <p className='text-[#071c1f] font-bold space-x-2'>Vendor:</p>
            <span className='text-sm text-[#f8796c]'> Vendor G</span>
            </span>
            <span className='flex gap-11'>
            <p className='text-[#071c1f] font-bold space-x-2'>Type:</p>
            <span className='text-sm text-[#f8796c]' >Type G</span>
            </span>
            <p className='w-full py-4 gap-2 border-t border-t-gray-300 center'></p>
        </div>
        <span className="w-full flex items-center justify-start gap-8">
            <span className='w-full gap-4 mb-2'>
                <p className=" text-black text-sm buttonfx slideleft px-8 py-2 overflow-hidden  capitalize hover:text-[#f8796c] border-2 gap-6 "> Buy from amazon</p>
                <span className='w-full flex capitalize gap-4 py-2 '>
                  <p className='text-sm text-[#f8796c]'><FavoriteBorderIcon/> Remove From wishlist</p>
                  <p className='text-sm text-[#f8796c]'><FavoriteBorderIcon/>  Go to wishlist</p>
                  <p className='text-sm text-[#f8796c]'><CompareArrowsIcon/> Compare</p>
                  
                  </span>
                  <p className='text-sm text-[#f8796c]'><MailOutlineIcon/> Ask about this product</p>
            </span>
            
        </span>
        <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
        <span className='w-full flex gap-6 text-[#071c1f] mb-2 '>
        <p className='text-lg text-[#f8796c]'> Share:</p>
        <p className='text-sm text-[#f8796c]'><FacebookIcon/> Facebook</p>
        <p className='text-sm text-[#f8796c]'><TwitterIcon/> Twitter</p>
        <p className='text-sm text-[#f8796c]'><PinterestIcon/> Pinterest</p>      
        </span>
        <p className='w-full py-2 gap-2 border-t border-t-gray-300 center'></p>
        <h1 className='text-xl capitalize font-bold space-y-4'>Secure Payment Gateway</h1>
        <div className='w-full gap-6 mt-2 '>
                 
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
