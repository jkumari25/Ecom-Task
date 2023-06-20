import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { main_logo } from '../assets/navbar';

export default function Footer() {
 
  return (
    <section className="w-full bg-[#ece5dd]  overflow-hidden hidden lg:block ">
      
      <section className="w-full main-container py-8 mt-12  flex flex-col items-center justify-center gap-6">
      <span className="w-full flex flex-col items-center justify-center gap-4 ">
        <img src={main_logo.src} alt="" className='w-auto h-full'/>
            <h2 className="text-lg capitalize"><span className="font-bold ">Address:</span> 3B, Sectior 1, Address, City, Country.</h2>
            <p><span className="font-bold ">Phone:</span> +0123-456789</p>
            <p><span className="font-bold ">Email:</span> example@example.com</p>
            <span className="flex items-center justify-start gap-2">
              <FacebookIcon />
              <YouTubeIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </span>
            <span className="w-full">
            <p className="text-lg text-white  font-bold "></p>
            </span>
          </span>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3  py-4 gap-10 border-t border-t-white">
          <span className="w-full">
            <p className="text-lg capitalize">
            Copyright ©<span className="font-bold ">New99 </span> All Right Reserved.
            </p>
          </span>
          <span className="w-full flex item-center justify-between gap-6">
            {/* <p className="text-lg  capitalize">Terms of Conditions</p>
            <p className="text-lg  capitalize">Privacy Policy</p> */}
            {/* <p  className="text-lg font-bold capitalize">Terms of Service</p> */}
          </span>
        </div>
      </section>
    </section>
  );
}
