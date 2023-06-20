import { SliderArr } from '@/src/utils/home';
import React from 'react';
import Slider from 'react-slick';
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
function Sliderpage() {
    return (
        <section className='w-full h-40  overflow-hidden'>
         <Slider {...settings}>
        {
           SliderArr.map((item) =>(
      <div className='w-full h-full !flex items-center justify-center gap-4 mt-14' key={item.id}>
        <p className=' text-2xl  capitalize hover:text-[#f8796c]'>{item.text}</p>
      </div>
      )) 
    }
    </Slider>
    </section>
    );
}

export default Sliderpage;