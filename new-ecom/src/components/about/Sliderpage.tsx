import React from 'react'
import Slider from 'react-slick';
import Brandlogoslide from '../cards/Brandlogoslide';
import { BrandlogoArr } from '@/src/utils/about';

export default function Sliderpage() {
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
  return (
        

<section className='w-full main-container my-20 '>
<Slider {...settings}>
  {
     BrandlogoArr.map((item:any)=>(
      <div key={item.id}>
        <Brandlogoslide item={item}/>
      </div>
    ))
  }
</Slider>
</section>


  )
}
