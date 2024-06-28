import React from 'react';
import About from './About';
import SkillCards from './SkillCards';

const Body = () => {
  return (
    <div>
    <div className='Body '>
      <section className="Hello">
        <div className='Container w-[60vw] h-[80vw] shadow-2xl md:h-[600px] mx-[20vw] my-[15vw] shadow-gray-700 md:my-[10vw] transform transition duration-300 ease-in-out hover:scale-105'>
          <div className='Intro py-[50px] md:py-[160px] flex flex-col items-center justify-center font-custom'>
            <h1 className='flex justify-center text-xl font-bold md:text-6xl font-custom m-5'>Hi! I am Swayam</h1>
            <div className='flex justify-center'>
              <p className='font-custom md:text-lg text-sm px-6 m-6 md:m-2 md:px-3'>
                I am an aspiring Software-Developer learning web-dev
              </p>
            </div>
            <div className='flex justify-center m-5'>
              <button className="font-bold font-custom border-black hover:text-white hover:bg-black px-4 py-2 border-[5px]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      
        </div>
        <div className='h-full bg-customGreen'>
      <div className='about'>
          <About />
        </div>
        <div className=''>
          <SkillCards />
        </div>
    </div>
    </div>
  );
}

export default Body;

