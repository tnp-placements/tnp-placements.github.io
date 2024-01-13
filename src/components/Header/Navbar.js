import React, { useState } from "react";
import Logo from "../../images/NSUTlogo.png";
import { Link } from "react-router-dom";
import './header.css';

export default function Navbar({
  onHome,
  onCulture,
  onAcademics,
  onRecruiters,
}) {
  const [activeSection, setActiveSection] = useState("home");

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-transparent w-full">
      <nav className="flex justify-between lg:justify-around lg:px-0 px-4 sm:px-10 items-center text-white py-8 ">
        <div>
          <img src={Logo} alt="NSUT" className="w-[50px]" />
        </div>
        <div className="gap-6 text-sm lg:text-base hidden md:flex">
          <a href="#home" className={`${activeSection === 'home'? 'active':''} link after:left-[5px]`} onClick={()=> handleLinkClick('home')}>Home</a>
          <a href="#culture" className={`${activeSection === 'culture'? 'active':''} link after:left-[6px]`} onClick={()=> handleLinkClick('culture')}>Culture</a>
          <a href="#academics" className={`${activeSection === 'academics'? 'active':''} link after:left-[9px]`} onClick={()=> handleLinkClick('academics')}>Academics</a>
          <a href="#recruiters" className={`${activeSection === 'recruiters'? 'active':''} link after:left-[11px]`} onClick={()=> handleLinkClick('recruiters')}>For Recruiters</a>
          <a href="https://admin.tnpnsut.in">For Coordinators</a>
        </div>
        <div>
          <Link
            to="https://student.tnpnsut.in"
            className="px-10 py-2 duration-300 text-sm lg:text-base transition-all border border-[#0193DC] hover:bg-[#0193DC] rounded-md font-medium lg:font-semibold"
          >
            Student Section
          </Link>
        </div>

        
        {/* <div className="md:hidden block">
          <img src={Logo} alt="NSUT" className="w-[50px]" />
        </div> */}
      </nav>
    </div>
  );
}
