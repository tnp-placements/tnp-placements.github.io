import React from 'react';
import Navbar from './Navbar';
import './header.css';
// import { Link } from 'react-router-dom';

const Header=() => {

  return (
    <header className={`headerBg h-[100svh] w-[100svw]`} id='home'>
      <Navbar />
      <div className='text-white w-full h-[85%] flex flex-col justify-center xl:pl-32 lg:pl-28 md:pl-20 sm:pl-14 pl-8 gap-3'>
        <div className='font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl w-full leading-[1.15]'><h1>Training And Placements</h1></div>
        <div className='lg:text-2xl md:text-xl sm:text-xl text-lg text-[#CECDCD] mb-2 sm:mb-4'><h2>Netaji Subhas University<br /> Of Technology</h2></div>
        <div className='flex flex-col sm:flex-row gap-4 max-w-fit'>
          <a
            href="mailto:tnpcell@nsitonline.in"
            className="px-10 py-2 duration-300 transition-all bg-[#0193DC] rounded-md font-semibold"
          >
            Contact us (Students)
          </a>
          <a
            href="mailto:placements@nsitonline.in"
            className="px-10 py-2 duration-300 transition-all bg-[#0193DC] rounded-md font-semibold"
          >
            Contact us (Recruiters)
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
