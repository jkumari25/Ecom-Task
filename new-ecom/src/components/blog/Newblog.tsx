import React from 'react';
import Blogcard from '../cards/blogs/Blogcard';
import { blogArr } from '@/src/utils/blog';

function Newblog() {
    return (
        <section className=''>
        <div className='w-full grid grid-cols-3'>
                    {
                        blogArr.map((item)=>(
                            <div key={item.id}>
                                <Blogcard item={item}/>
                            </div>
                        ))
                    }
        </div>
        </section>
    );
}

export default Newblog;