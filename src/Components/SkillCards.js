import React from 'react';
import { CPP, HTML, JS, ReactPic, Tailwind } from '../utils/constants';
import { Css } from '../utils/constants';

const SkillCards = () => {
  return (
    <div className='bg-customGreen h-full'>
    <div className='Skillcards flex flex-wrap md:my-[100px] md:mx-[100px] my-[20px] mx-[10px]   ]'>
      <div className='skillCard  md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={HTML} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
        
      </div>
      <div className='skillCard md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={Css} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
        
      </div>
      <div className='skillCard md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={JS} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
      </div>
      <div className='skillCard md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={Tailwind} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
      </div>
      <div className='skillCard md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={ReactPic} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
      </div>
      <div className='skillCard md:mx-[65px] mx-[2px] w-[45vw] h-[30vw]  my-[9px] md:w-[20vw] md:h-[25vw]'>
      <div className='md:w-[18vw] md:h-[23vw] h-full w-full overflow-hidden md:mx-[13px] transform transition duration-300 ease-in-out hover:scale-105'>
        <img src={CPP} className = 'object-contain h-full w-full rounded-lg' alt ='HTML'/>
      </div>
      
    </div>
    </div>
    </div>
  );
}

export default SkillCards;