import React, { useState } from "react";
import Logo from "../../images/NSUTlogo.png";
import './header.css';
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { cn } from "../lib/utils";

const LoginPopover=() => {
  const [isLoginDropDownOpen, setIsLoginDropDownOpen]=useState(false);

  return (
    <Popover open={isLoginDropDownOpen} onOpenChange={(open) => setIsLoginDropDownOpen(open)}>
      <PopoverTrigger asChild>
        <button className="flex gap-2 px-10 py-2 duration-300 text-sm lg:text-base transition-all border border-[#0193DC] hover:bg-[#0193DC] rounded-md font-medium lg:font-semibold">
          Login
          <RxCaretDown size={20} className={`inline transition-all duration-150 ${isLoginDropDownOpen? 'rotate-180':''}`} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-center border border-[#0193DC] rounded-md w-full md:min-w-[180px] transition-all duration-200 mt-4 p-0">
        <a href="https://student.tnpnsut.in/"
          className="px-10 py-2 duration-300 text-white text-sm lg:text-base transition-all border-b border-[#0193DC] hover:bg-[#0193DC] font-medium lg:font-semibold"
        >
          Students
        </a>
        <a href="https://admin.tnpnsut.in/"
          className="px-10 py-2 duration-300 text-white text-sm lg:text-base transition-all hover:bg-[#0193DC] font-medium lg:font-semibold"
        >
          Coordinators
        </a>
      </PopoverContent>
    </Popover>
  )
}

const Menu=({ isDrawer, setIsDrawerOpen }={ isDrawer: false }) => {
  const [activeSection, setActiveSection]=useState("home");
  const [isDownloadDropDownOpen, setIsDownloadDropDownOpen]=useState(false);

  const handleLinkClick=(section) => {
    setActiveSection(section);
    if(isDrawer) setIsDrawerOpen(false);
  }

  return (
    <>
      <a href="#home" className={`${activeSection==='home'? 'active':''} link after:left-[5px]`} onClick={() => handleLinkClick('home')}>Home</a>
      <a href="#culture" className={`${activeSection==='culture'? 'active':''} link after:left-[6px]`} onClick={() => handleLinkClick('culture')}>Culture</a>
      <a href="#academics" className={`${activeSection==='academics'? 'active':''} link after:left-[9px]`} onClick={() => handleLinkClick('academics')}>Academics</a>
      <a href="#recruiters" className={`${activeSection==='recruiters'? 'active':''} link after:left-[11px]`} onClick={() => handleLinkClick('recruiters')}>For Recruiters</a>

     
    </>
  );
}

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen]=useState(false);

  return (
    <div className="bg-transparent w-full">
      <nav className="flex justify-between lg:justify-around lg:px-0 px-4 sm:px-10 items-center text-white py-8 ">
        <div>
          <img src={Logo} alt="NSUT" className="w-[50px]" />
        </div>
        <div className="gap-6 text-sm lg:text-base hidden lg:flex">
          <Menu />
        </div>
        <div className="hidden lg:block">
          <LoginPopover />
        </div>

        <button className="lg:hidden" onClick={() => setIsDrawerOpen(true)}>
          <FiMenu />
        </button>
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/80 z-40 transition duration-300 ease-in-out transform ${isDrawerOpen? '-translate-x-0':'-translate-x-full'}`}>
          <div className="flex flex-col justify-center items-center h-full text-xl gap-4">
            <button className="rounded-full ring-2 ring-white p-2 my-2 hover:bg-white hover:text-black" onClick={() => setIsDrawerOpen(false)}><RxCross2 className="h-4 w-4" /></button>
            <Menu isDrawer setIsDrawerOpen={setIsDrawerOpen} />
            <LoginPopover />
          </div>
        </div>
      </nav>
    </div>
  );
}
