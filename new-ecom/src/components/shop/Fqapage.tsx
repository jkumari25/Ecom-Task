import { fqaArrType } from "@/src/types";
import { fqaArr } from "@/src/utils/shop";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Collapse } from "@mui/material";
import { Fragment, useState } from "react";


export default function Fqapage() {
  const [isOpen, setIsOpen] = useState<any>(null);
  const [isArrow, setIsArrow] = useState<any>(false);
  const handleClick = (i: any) => {
    if (isOpen === i) {
      setIsOpen(false);
     
      return;
    }
    setIsOpen(i);
    
  };
  return (
    <>
      <section className="flex flex-col items-start justify-center gap-10 py-12 main-container">
        <h1 className="w-full text-4xl font-bold text-center uppercase">
        FAQs
        </h1>

        <div className="w-full flex flex-col items-start justify-center gap-4 shadow-[0px_2px_5px_rgb(0,0,0)] p-4 rounded">
          {/* {data.map((val: any, index: number) => ( */}
          <Fragment>
            {fqaArr?.map((innerVal, innerIndex: number) => (
              <span
                className="flex flex-col items-center justify-between w-full gap-4 p-2 border border-gray-600 rounded"
                key={innerVal.id}
                onClick={() =>{
                  setIsArrow(!isArrow)
                   handleClick(innerIndex)
                  }}
              >
                <span className="flex items-center justify-between w-full p-2">
                  <h1 className="text-base font-bold  capitalize">
                    {innerVal.title}
                  </h1>
                  <span>
                    {isArrow ?
                  <ArrowDropUpIcon/> :
                  <ArrowDropDownIcon className="" />
                    }
                  </span>
                  
                </span>
                <Collapse
                  in={isOpen === innerIndex}
                  timeout="auto"
                  unmountOnExit
                >
                  <p className="text-sm font-semibold text-gray-400 text-start">
                    {innerVal.content}
                  </p>
                </Collapse>
              </span>
            ))}
          </Fragment>
          {/* ))} */}
        </div>
      </section>
    </>
  );
}