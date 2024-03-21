import React, { useState } from "react";
import Logo from "../../images/NSUTlogo.png";
// import { Link } from "react-router-dom";
import './header.css';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar({
  onHome,
  onCulture,
  onAcademics,
  onRecruiters,
}) {
  const [activeSection, setActiveSection] = useState("home");
  const [openLogin, setOpenLogin] = useState(false);
  const [openLink, setOpenLink] = useState(false);

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  const handleClick = () => {
    setOpenLogin(!openLogin);
  }

  return (
    <div className="bg-transparent w-full">
      <nav className="flex justify-between lg:justify-around lg:px-0 px-4 sm:px-10 items-center text-white py-8 ">
        <div>
          <img src={Logo} alt="NSUT" className="w-[50px]" />
        </div>
        <div className="gap-6 text-sm lg:text-base hidden md:flex">
          <a href="#home" className={`${activeSection === 'home' ? 'active' : ''} link after:left-[5px]`} onClick={() => handleLinkClick('home')}>Home</a>
          <a href="#culture" className={`${activeSection === 'culture' ? 'active' : ''} link after:left-[6px]`} onClick={() => handleLinkClick('culture')}>Culture</a>
          <a href="#academics" className={`${activeSection === 'academics' ? 'active' : ''} link after:left-[9px]`} onClick={() => handleLinkClick('academics')}>Academics</a>
          <a href="#recruiters" className={`${activeSection === 'recruiters' ? 'active' : ''} link after:left-[11px]`} onClick={() => handleLinkClick('recruiters')}>For Recruiters</a>
          <div className={`${openLink && 'active'} relative flex gap-1 items-center duration-300 link after:left-[1px] cursor-pointer`} onClick={()=>setOpenLink(!openLink)}>
            Downloads
            <IoIosArrowDown className={`${openLink && 'rotate-180'} transition-all duration-150`} />
            {/* <div className={`absolute ${openLink ? 'scale-1' : 'scale-0'} flex flex-col justify-center items-center border border-[#0193DC] top-[120%] right-0 left-0 md:left-[-8%] rounded-md w-full md:min-w-[180px] transition-all duration-200`}>
              <Link to="https://student.tnpnsut.in" className="p-2 duration-300 w-full text-sm lg:text-base transition-all hover:bg-[#0193DC] font-medium lg:font-semibold border-b border-[#0193DC]" >
                Student Login
              </Link>
              <Link to="https://admin.tnpnsut.in" className="p-2 duration-300 w-full text-sm lg:text-base transition-all hover:bg-[#0193DC] font-medium lg:font-semibold whitespace-nowrap" >
                Coordinator Login
              </Link>
            </div> */}
          </div>
        </div>
        <div>
          <div className="relative px-10 flex items-center gap-4 py-2 duration-200 text-sm lg:text-base border border-[#0193DC] rounded-md font-medium lg:font-semibold cursor-pointer" onClick={handleClick}>
            Login
            <IoIosArrowDown className={`${openLogin && 'rotate-180'} transition-all duration-150`} />
            <div className={`absolute ${openLogin ? 'scale-1' : 'scale-0'} flex flex-col justify-center items-center border border-[#0193DC] top-[120%] right-0 left-0 md:left-[-8%] rounded-md w-full md:min-w-[180px] transition-all duration-200`}>
              <Link to="https://student.tnpnsut.in" className="p-2 duration-200 w-full text-sm lg:text-base transition-all hover:bg-[#0193DC] font-medium lg:font-semibold border-b border-[#0193DC]" >
                Student Login
              </Link>
              <Link to="https://admin.tnpnsut.in" className="p-2 duration-200 w-full text-sm lg:text-base transition-all hover:bg-[#0193DC] font-medium lg:font-semibold whitespace-nowrap" >
                Coordinator Login
              </Link>
            </div>
          </div>
        </div>


        {/* <div className="md:hidden block">
          <img src={Logo} alt="NSUT" className="w-[50px]" />
        </div> */}
      </nav>
    </div>
  );
}
