import React from 'react'
import Education from './Education';

const AboutSections = () => {
  return (
    <div>
    <div className='about md:flex flex flex-col'>
        <div className=' m-[10px] md:m-[100px] flex flex-col md:flex-row shadow-gray-400 shadow-lg'>
          <div className="my-[95px] ml-5 md:ml-[60px] md:w-[700px] w-[200px]">
            <h1 className=' text-xl md:text-3xl font-custom font-bold'>About Me</h1>
          </div>
          <div className='md:p-[80px] p-[10px] mt-[-65px] md:pt-[120px]'>
            <p className='font-custom md:text-lg '>
              Hey there! I'm a Computer Engineering undergrad at Fr. Conceicao Rodrigues College Of Engineering, Mumbai.
              Passionate about problem-solving and full-stack web development, I've crafted several dynamic projects to showcase my skills.
              Let's connect and explore the world of technology together!
            </p>
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col'>
        
      <div className=' md:w-[50vw] w-[3/12]'>
        <h1 className ="md:text-4xl font-custom font-bold md:my-[35px] md:ml-[95px] ml-[15px] text-xl my-[20px]">What do I want ? </h1>
        <div className='ml-[15px] md:ml-[95px]'>
          <p className='font-custom '>
          I am passionate about technology and eager to explore the realms of web development and machine learning.
           Constantly driven by a thirst for knowledge, I am always keen to learn new things and expand my skill set.
            I am seeking an organization that supports students and fosters growth, providing opportunities to dive into innovative projects.
             My enthusiasm for problem-solving and creating impactful solutions fuels my desire to contribute meaningfully. 
             With a strong foundation in technology, I am excited to 
          collaborate, learn, and thrive in a dynamic and supportive environment that encourages continuous learning and development.
          </p>
        </div>

      </div>
      <div className='w-[9/12]'>
        <Education/>
      </div>
      </div>
      </div>
    
    
  );
}

export default AboutSections