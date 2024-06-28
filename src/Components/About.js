import React from 'react';
import SkillCards from './SkillCards';
import AboutSections from './About-section';

const About = () => {
  return (
    <div className='bg-customGreen w-screen h-full md:h-screen'>
     <AboutSections/>
     <SkillCards/>
    </div>
  );
}

export default About;

