import React from 'react';
import About from './About';
import SkillCards from './SkillCards';
import Socials from './socials';
import Contact from './Contact';

const Body = () => {
  const handleDownloadCV = () => {
    // Replace with your Firebase CV URL
    const cvUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-swayam-e7287.appspot.com/o/Cv%2FBlack%20And%20White%20Corporate%20Resume%20.pdf?alt=media&token=ec6f6b1c-7c2f-4667-9c9e-13c5421b4fb8';
    
    // Triggering download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className='Body'>
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
                <button className="font-bold font-custom border-black hover:text-white hover:bg-black px-4 py-2 border-[5px]" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </div>
              <div className='flex justify-center m-5'>
                <Socials />
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
        <div>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Body;


