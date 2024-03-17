import React from "react";
import Heading2 from "../Heading2";
import ProcedureCard from "./ProcedureCard";
// import AllPagesPdf from "../pdf/AllPagesPdf";
// import { saveAs } from "file-saver";
import Procedure from '../../images/Procedure.png';
import { placementProcedure } from "../../styles/constant";

const ForRecruiters = () => {

  // const downloadPdf = () => {
  //   saveAs(PlacementPolicy, "NSUT_Placement_Policies_2023-2024.pdf");
  // };

  return (
    <div className="flex w-full flex-col gap-10 py-5" id="recruiters">
      <div className="px-10 2xl:px-40">
        <Heading2 text="For Recruiters" color="after:w-1/3" />
      </div>
      {/* <Heading text="Placement Policies" styles="text-center hidden md:flex sm:mb-10" /> */}
      {/* <div className="text-center px-10">
        The <strong>Placement Policy</strong> guidelines prevailing currently are as under:
      </div> */}
      {/* <div className="flex-col hidden md:flex items-center border h-screen overflow-y-scroll overflow-scroll w-full md:w-fit mx-auto">
        <AllPagesPdf pdf={PlacementPolicy} />
      </div> */}
      {/* <div className="flex flex-col justify-center items-center gap-4 px-10 mb-6">
        <a
          href="https://drive.google.com/file/d/1Pt4W1LhT7jcR-lPprnJhOvuXxYR8f1Ka/view?usp=sharing"
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
      </div> */}
      <div className="flex flex-col xl:flex-row xl:items-center">
        <div className="flex justify-center">
          <img src={Procedure} alt="placement" className="max-w-[520px] w-full xl:w-auto" />
        </div>
        <div className="bg-[#F6F6F6] py-6 px-4 lg:py-16 lg:px-0 sm:px-16">
          <div className="px-2 sm:px-0 lg:px-14 mb-14">
            <Heading2 text="Procedure" color="xl:after:w-0 after:w-0 text-[#0193DC] xl:text-center xl:w-full" />
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-14 pl-2 lg:gap-14 xl:gap-8 lg:justify-between 2xl:justify-evenly lg:px-14 sm:px-10">
            {placementProcedure.map((data) => (
              <ProcedureCard data={data} key={data.number} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRecruiters;
