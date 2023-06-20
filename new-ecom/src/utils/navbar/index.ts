import { navArrType } from "@/src/types";

export const navArr:navArrType[]= [
    {
        id:0,
        title:"home",
        path:"/",
    },
    {
        id:1,
        title:"about us",
        path:"about-us",
        
    },

    {
        id:2,
        title:"shop",
        path:"shop",
        subMenu:[
            {
                id:21,
                subTitle:"New Arrivals",
                subPath:""
            },
            {
                id:22,
                subTitle:"Best Selling",
                subPath:""
            },
            {
                id:23,
                subTitle:"Special Offers",
                subPath:""
            },
        ]
    },
    {
        id:3,
        title:"Collections",
        path:"collection",
     
    },
    
    // {
    //     id:4,
    //     title:"Services",
    //     path:"service",
     
    // },
    

    {
        id:5,
        title:"Blog",
        path:"blog",
     
    },

    {
        id:6,
        title:"Contact Us",
        path:"contact",
     
    },
]