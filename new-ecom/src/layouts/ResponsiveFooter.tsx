import React from 'react';
import { footerImg } from '../assets/navbar';
import { TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link'
function ResponsiveFooter() {
    return (
        <section className='w-full bg-bgTheme flex flex-col items-center justify-between lg:hidden !overflow-hidden !rounded-t-[2rem] gap-6'>
            <div className="w-full h-96 !overflow-hidden !rounded-t-[2rem] relative">
                <img src={footerImg.src} alt="w-full !h-full object-Center" />
                <div className='absolute top-0 bottom-0 right-0 left-0 main-container flex flex-col items-start justify-center py-12 gap-4'>
                <h2 className="text-white text-2xl font-semibold "> Connecting the Next Generation of Fans through Digital Sports Content</h2>
            
                <p className="text-lg font-bold text-white">SUBSCRIBE TO KSM</p>
                <TextField
                fullWidth
                placeholder="Email"
                inputProps={{ style: {  color: 'white',border:'1px solid white',  borderRadius:".5rem"} }}
                />
                <button className="px-6 py-3 rounded-lg text-white bg-textTheme uppercase font-bold text-xl w-fit">submit</button>
                </div>
            </div>
            <div className='w-full main-container grid grid-cols-2 gap-6'>
                <span className="w-full flex flex-col items-start justify-start ">
                <h2 className="text-2xl text-white font-bold capitalize">USEFUL LINKS</h2>
                <Link href={"/"}>
            <p className="text-xl font-medium capitalize text-white">Home</p>
            </Link>
            <Link href={"/about-us"}>
            <p className="text-xl font-medium capitalize text-white ">About Us</p>
            </Link>
            <Link href={"/our-work"} >
            <p className="text-xl font-medium capitalize text-white">Our Work</p>
            </Link>
            <Link href={"/services"}>
            <p className="text-xl font-medium capitalize text-white ">Services</p>
            </Link>
            <Link href={"/contact-us"} >
            <p className="text-xl font-medium capitalize text-white " >Contact Us</p>
            </Link>
                </span>
                <span className="w-full flex flex-col items-start justify-start">
                <h2 className="text-2xl text-white font-bold capitalize">OFFICES</h2>
                    <p className="text-lg text-white font-medium capitalize">Miami</p>
                    <p className="text-lg text-white font-medium capitalize">Toronto</p>
                    <p className="text-lg text-white font-medium capitalize">San Jose</p>
                    <p className="text-lg text-white font-medium capitalize">Mumbai</p>
                </span>
                <span className="w-full flex flex-col items-start justify-start gap-2 ">
                <h2 className="text-2xl text-white font-bold capitalize">Follow Us</h2>
                    <span className="flex items-center justify-start gap-2">
                    <FacebookIcon className='text-white'/>
                    <YouTubeIcon className='text-white'/>
                    <InstagramIcon className='text-white'/>
                    <TwitterIcon className='text-white' />
                    <LinkedInIcon className='text-white'/>
                     </span>
                     <span className='w-full'>
                      <p className="text-lg text-white  font-bold ">hello@kidsportsmedia.com</p>
                      </span>
                </span>
            </div>
            <div className='w-full flex items-center justify-between p-2 '>
            <p className="text-xs text-white  font-bold capitalize">
              kid sports media 2023©
            </p>
            <p className="text-xs text-white font-bold capitalize">Terms of Conditions</p>
            <p className="text-xs text-white font-bold capitalize">Privacy Policy</p>
          
            </div>
        </section>
    );
}

export default ResponsiveFooter;