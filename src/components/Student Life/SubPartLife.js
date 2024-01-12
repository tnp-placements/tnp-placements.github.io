import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubPartLife = ({data, rev}) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={`flex ${rev?'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center flex-col w-full`} data-aos={rev?"fade-left":"fade-right"}>
        <div className='lg:w-1/2'>
            <img src={data.src} alt={data.alt} className='w-full'/>
        </div>
        <div className='flex flex-col items-center justify-center px-5 py-6 lg:py-0 sm:py-4 gap-4 lg:px-20 lg:w-1/2'>
            <div className='text-[#133180] font-medium text-xl self-start'>{data.title}</div>
            <div className={`text-center lg:text-left text-[#484848] lg:text-base`}>{data.description}</div>    
        </div>
    </div>
  )
}

export default SubPartLife;