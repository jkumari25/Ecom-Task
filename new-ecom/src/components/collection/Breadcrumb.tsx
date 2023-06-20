import { design1} from '@/src/assets/collection';
import React from 'react';

function Breadcrumb() {
    return (
        <section className="w-full main-container flex  items-center justify-between gap-6 my-20 ">
    <div className="w-full flex flex-col items-start justify-center gap-6">
        <p className="text-5xl font-bold">Accessories</p>
        <h1 className="font-bold capitalize">Home |<span className='text-[#f8796c]'> Accessories</span></h1>
        <p className="lg:text-lg ">Eum asperiores galisum et deleniti animi aut tenetur laborum non cumque dignissimos ut reiciendis galisum sed internos Quis quo magnam voluptates. Est doloremque sint a molestiae incidunt sed aperiam tenetur quo quisquam incidunt ut totam dolore. Quo nostrum omnis aut iusto nisi et sint nobis quo molestiae maiores est eius fuga et molestiae expedita. Ex impedit placeat qui iste totam sed iste iure.</p>
         <span className="w-full flex items-center justify-start gap-8">
                <p className=" text-black text-lg buttonfx slideleft px-8 py-2 overflow-hidden  font-bold capitalize hover:text-[#f8796c] border-2">Shop Now</p>
        </span>
    </div>
    <div className='w-[60vh] h-96'>
      <img src={design1.src} alt=""  className="w-full h-full "/>
    </div>
</section> 
    );
}

export default Breadcrumb;