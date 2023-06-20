
import { email, location, phone } from "@/src/assets/contact";
import { contactArrType } from "@/src/types";

export const contactArr:contactArrType[] =[
    {
        id:1,
        img:email,
        title:"Email Address",
        content:"example@gmail.com",
        content1:"example1@gmail.com",
    },  
   

    {
        id:2,
        img:phone,
        title:"Phone Number",
        content:"+0123-456789",
        content1:"+9879-654321",
    },
   
    {
        id:3,
        img:location,
        title:"Office Address",
        content:"3B, Address text here,",
        content1:"City, Country",
       
    },
   
    
]