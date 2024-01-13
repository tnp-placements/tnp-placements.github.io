import React from "react";
import Logo from "../../images/NSUTlogo.png";
import Android from "../../images/play-store.png";
import IOS from "../../images/app-store.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-sm flex flex-col gap-4 bg-[#F9F9F9] mt-5 px-10 sm:px-16 2xl:px-24 pt-10">
      <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap 2xl:flex-row gap-6 lg:gap-0 lg:gap-y-6 xl:gap-y-0 lg:w-full xl:w-auto xl:gap-10 xl:items-center">
        <div className="flex flex-col lg:flex-row xl:flex-col lg:w-full gap-8 xl:gap-8 lg:gap-0">
          <div className="flex items-center gap-3 lg:w-1/2 xl:w-auto">
            <div>
              <img src={Logo} alt="logo" className="w-[70px]" />
            </div>
            <div>
              <div className="text-[#0C101A] font-light">
                Netaji Subhas University Of Technology
              </div>
              <div className="font-semibold">Training and Placement Cell</div>
            </div>
          </div>
          <div className="text-[#0C101A] font-light flex flex-col gap-2">
            <div>Download the mobile version</div>
            <div className="flex gap-3">
              <img src={Android} alt="android" className="w-[120px]" />
              <img src={IOS} alt="android" className="w-[120px]" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="font-semibold mb-2">Address</div>
          <div className="text-[#0C101A] font-light">
            Dwarka Sector-3, Dwarka Delhi, 110078, India
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-auto">
          <div className="font-semibold mb-2">Phone</div>
          <div>
            <a href="tel:+919205475078" className="text-[#0C101A] font-light">
              9205475078
            </a>
          </div>
          <div>
            <a href="tel:+919810472670" className="text-[#0C101A] font-light">
              9810472670
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-auto">
          <div className="font-semibold mb-2">Email</div>
          <div>
            <a
              href="mailto:placements@nsitonline.in"
              className="text-[#0C101A] font-light"
            >
              placements@nsitonline.in
            </a>
          </div>
          <div>
            <a
              href="mailto:placements@nsut.ac.in"
              className="text-[#0C101A] font-light"
            >
              placements@nsut.ac.in
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="font-semibold mb-2">Social Media</div>
          <div className="text-[#0C101A] font-light mb-2">
            Follow us on social media to find out the latest information
          </div>
          <div className="flex gap-4">
            <a href="#" className="rounded-lg border-[#E6E6E7] p-2 border">
              <AiOutlineTwitter />
            </a>
            <a href="#" className="rounded-lg border-[#E6E6E7] p-2 border">
              <BiLogoFacebook />
            </a>
            <a href="#" className="rounded-lg border-[#E6E6E7] p-2 border">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-[#0C101A] font-light border-[#E6E6E7] border-t flex flex-col gap-5 2xl:flex-row 2xl:justify-between 2xl:items-center py-8">
        <div>
          Copyright © TNP Netaji Subhas University Of Technology. All right
          Reserved
        </div>
        <div>Privacy Policy - Terms and conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
