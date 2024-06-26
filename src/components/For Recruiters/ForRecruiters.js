import React from "react";
import Heading2 from "../Heading2";
import Heading from "../Heading";
import AllPagesPdf from "../pdf/AllPagesPdf";
import PlacementPolicy from "../../Placement_Policy_2023-24.pdf";
import { saveAs } from "file-saver";
import Procedure from '../../images/Procedure.png';
import { placementProcedure } from "../../styles/constant";
import ProcedureCard from "./ProcedureCard";

const ForRecruiters = () => {

  const downloadPdf = () => {
    saveAs("https://tnpnsut-files.s3.ap-south-1.amazonaws.com/Placement_Policy_2024_25_final_b6588b530d.pdf", "NSUT_Placement_Policies_2023-2024.pdf");
  };

  return (
    <div className="flex w-full flex-col gap-10 py-5" id="recruiters">
      <div className="px-10 2xl:px-40">
        <Heading2 text="For Recruiters" color="after:w-1/3" />
      </div>
      <Heading text="Placement Policies" styles="text-center hidden md:flex sm:mb-10" />
      <div className="text-center px-10">
        The <strong>Placement Policy</strong> guidelines prevailing currently are as under:
      </div>
      {/* <div className="flex-col hidden md:flex items-center border h-screen overflow-y-scroll overflow-scroll"> */}
        {/* <AllPagesPdf pdf={"https://tnpnsut-files.s3.ap-south-1.amazonaws.com/Placement_Policy_2024_25_final_b6588b530d.pdf"} /> */}
        <iframe title="T&P Guidelines" src="https://tnpnsut-files.s3.ap-south-1.amazonaws.com/Placement_Policy_2024_25_final_b6588b530d.pdf" className="md:w-full" style={{width:"60vw", height:"100vh", margin:"0 auto"}}/>
      {/* </div> */}
      <div className="flex flex-col justify-center items-center gap-4 px-10 mb-6">
        <a
          href="https://tnpnsut-files.s3.ap-south-1.amazonaws.com/Placement_Policy_2024_25_final_b6588b530d.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-[#0193DC] text-white px-4 py-2 md:hidden"
        >
          View
        </a>
        <button
          className="bg-[#0193DC] text-white px-4 py-2"
          onClick={() => {
            downloadPdf();
          }}
        >
          Download
        </button>
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
