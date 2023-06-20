import React from 'react';
import Freecards from '../cards/Freecards';
import { FreecardArrOne } from '@/src/utils/home';

function Freeshipping() {
    return (
        <div className='w-full flex items-center justify-center h-40  my-20 overflow-hidden'>
        <div className='w-[90%] h-full main-container flex flex-col lg:flex-row items-center justify-between gap-8 border-2'>
                    {
                        FreecardArrOne.map((item)=>(
                            <div key={item.id}>
                                <Freecards item={item}/>
                            </div>
                        ))
                    }
        </div>
    </div>
     
    );
}

export default Freeshipping;