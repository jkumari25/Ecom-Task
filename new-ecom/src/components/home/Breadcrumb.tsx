import { handMadeArr } from '@/src/utils/home';
import React from 'react';
import Slider from 'react-slick';
import Breadcrumbcard from '../cards/Breadcrumbcard';

function Breadcrumb() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
                
                        <div className='w-full h-full overflow-hidden'>
                            <Slider {...settings}>
                        {
                            handMadeArr.map((item)=>(
                                <div key={item.id}>
                                    <Breadcrumbcard item={item}/>
                                </div>
                            ))
                        }
                        </Slider>
            </div>




  );
}

export default Breadcrumb;

