import { breadcrumb1 } from '@/src/assets/about';
import React from 'react';

function Breadcrumb() {
    return (
        <section className='w-full h-[20vh] bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${breadcrumb1.src})`}}>
            <div className='w-full flex flex-col items-start justify-start gap-4 px-10 py-10'>
                <h1 className='text-4xl font-bold font-sans'>About</h1>
                <p className='text-xl'>Home | <span className='text-[#f8796c]'> About</span></p>
            </div>
           
        </section>
    );
}

export default Breadcrumb;


 