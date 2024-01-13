import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubPartAchievement = ({data, rev}) => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className={`relative w-full md:w-1/2 ${rev?'md:border-l-2 md:self-end md:items-end md:mr-[1.6px]':'md:border-r-2 md:items-start'} flex-col items-center flex border-white`} >
        <div className='xl:w-[60%] 2xl:w-[55%] sm:w-full md:w-[70%] w-full z-10' data-aos={rev?"fade-left":"fade-right"}>
            <img src={data.src} alt={data.title} className={` ${rev?'md:rotate-[15deg]':'md:rotate-[-15deg]'} rounded-[20px] shadow-xl`}/>
        </div>
        <div className={`${rev?'ml-2':'mr-2'} text-center xl:mt-8 text-white mt-3 md:mt-6`} data-aos={rev?"fade-left":"fade-right"}>
            <div className='font-semibold'>{data.title}</div>
            <div className='text-sm font-light mt-2'>{data.description}</div>
        </div>
        <hr className={`absolute w-1/2 h-1 bottom-[120px] ${rev?'left-0':'right-0'} hidden md:block z-1`} data-aos="fade-down"/>
        <div className={`absolute ${rev?'left-[-41px]':'right-[39px]'} hidden md:block bottom-[165px]`} data-aos="zoom-in">
            <div className='border border-[#0193DC] rounded-full p-10 absolute bottom-0 left-0 right-0 top-0 bg-transparent'></div>
            <div className='border border-[#0193DC] rounded-full p-6 absolute bottom-[-66px] right-[-65px] bg-transparent'></div>
            <div className='border border-white rounded-full p-1 absolute bottom-[-46px] right-[-45px] bg-white'></div>
        </div>
    </div>
  )
}

export default SubPartAchievement;