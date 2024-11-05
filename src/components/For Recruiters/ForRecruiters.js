import React from "react";
import Heading2 from "../Heading2";
import Heading from "../Heading";
import AllPagesPdf from "../pdf/AllPagesPdf";
import { saveAs } from "file-saver";
import Procedure from '../../images/Procedure.png';
import { placementProcedure } from "../../styles/constant";
import ProcedureCard from "./ProcedureCard";

const ForRecruiters = () => {

 

  return (
    <div className="flex w-full flex-col gap-10 py-5" id="recruiters">
      <div className="px-10 2xl:px-40">
        <Heading2 text="For Recruiters" color="after:w-1/3" />
      </div>

        <div className="bg-[#F6F6F6] py-6 px-4 lg:py-16 lg:px-0 sm:px-16">
            <div className="px-2 sm:px-0 lg:px-14 mb-14">
                <Heading2 text="Internship/Placement Availability and Joining dates for students" color="xl:after:w-0 after:w-0 text-[#0193DC] xl:text-center xl:w-full" />
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-14 pl-2 lg:gap-14 xl:gap-8 lg:justify-between 2xl:justify-evenly lg:px-14 sm:px-10">
                
            </div>
        </div>
   

   
      <div className="flex flex-col xl:flex-row xl:items-center">
        <div className="flex justify-center">
            <img src={Procedure} alt="placement" className="max-w-[520px] w-full xl:w-auto" />
        </div>
        <div className="bg-[#F6F6F6] py-6 px-4 lg:py-16 lg:px-0 sm:px-16">
            <div className="px-2 sm:px-0 lg:px-14 mb-14">
                <Heading2 text="Procedure" color="xl:after:w-0 after:w-0 text-[#0193DC] xl:text-center xl:w-full" />
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-14 pl-2 lg:gap-14 xl:gap-8 lg:justify-between 2xl:justify-evenly lg:px-14 sm:px-10">
                {placementProcedure.map((data)=> (
                    <ProcedureCard data={data} key={data.number} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ForRecruiters;
