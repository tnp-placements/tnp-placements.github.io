import React from 'react';
import Heading from '../Heading';
import Statue from '../../images/statue.png';
import StatueDesign from '../../images/statueDesign.png';
import { about } from '../../styles/constant';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='w-full py-14 2xl:py-20 bg-[#F9FBFD]' id='culture'>
        <Heading text="Who are we?"/>
        <div className='flex flex-col 2xl:flex-row xl:gap-5 xl:w-full xl:justify-between xl:items-center xl:px-10 2xl:px-10 gap-4 sm:gap-8  bg-[#F9FBFD] items-center'>
          <div className='px-6 xl:px-0 xl:pl-12 pb-6 relative z-10 flex justify-center w-fit xl:h-full xl:content-stretch'>
            <img src={Statue} alt="statue" className='max-w-[420px] min-w-[250px] xl:h-full w-full xl:w-fit'/>
            <img src={StatueDesign} alt="ellipse" className='absolute left-2 sm:left-0 xl:left-5 xl:bottom-[-2px] bottom-2 sm:bottom-0 z-[-1]' />
          </div>
          <div className='flex flex-col gap-12 xl:gap-8 bg-[#F9FBFD] xl:w-full'>
            <div className='text-[#0C101A] px-5 sm:px-10 xl:px-0'>{about.aboutText}</div>
           <div className='text-[#0C101A] px-5 sm:px-10 xl:px-0'>{about.aboutText1}</div>
            <div className='flex flex-col md:flex-row xl:justify-evenly items-center gap-4 md:gap-8 xl:gap-4 xl:flex-nowrap xl:px-0 md:justify-center md:px-6 md:flex-wrap'>
              {about.cardDetails.map((card)=>(
                <AboutCard about={card} key={card.title}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;
