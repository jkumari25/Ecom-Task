import { fqaArrType } from '@/src/types'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { dividerClasses } from '@mui/material';
const Fqacard = ({title,children, id, Index, setIndex }:any) =>{
  const handleSetIndex =(id:any) => Index !== id && setIndex(id);
  
  return (
    <>
    <div onClick={() => handleSetIndex(id)} className='flex group cursor-pointer w-full items-center justify-between rounded-xl bg-' >
      <div className='flex cursor-pointer'>
       <div className='text-[#f8796c] font-semibold'>
           {title}
       </div>
      </div>
      <div className='flex items-center justify-center'>
         {
          Index !== id ?(<AddIcon className='w-8 h-8 text-[#f8796c]'/>):(<RemoveIcon className='w-8 h-8 text-[#f8796c]'/>)
         }
      </div>
    </div>
    {Index === id && (
      <div className='rounded-md border-2'>
        {children}
      </div>
    )}
    </>
  );
}

export default Fqacard;