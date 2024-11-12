import React from "react";
import Heading2 from "../Heading2";
import Procedure from '../../images/Procedure.png';
import { placementProcedure } from "../../styles/constant";
import ProcedureCard from "./ProcedureCard";

const ForRecruiters = () => {

 

  return (
    <div className="flex w-full flex-col gap-10 py-5 " id="recruiters">
      <div className="px-10 2xl:px-40">
        <Heading2 text="For Recruiters" color="after:w-1/3" />
      </div>

        <div className="bg-[#F6F6F6] py-6 px-4 lg:py-16 lg:px-0 sm:px-16 px-auto ">
       <div>
            <h1 className="flex justify-center items-center text-[1.8vw]" >Internship/Placement Availability and Joining dates for students</h1>
            <h2 className="flex justify-center items-center my-8">Below is a detailed description of internship and Placements availability (date & duration) for various courses at the university. The dates mentioned below for the exam and internship are tentative, it all depends on the release of the last date sheet scheduled 10-15 days before the exam</h2>
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center">
            <table 
                className="table-border" 
                style={{ border: '2px solid black' }}
                cellPadding="10" 
                cellSpacing="0"
                >
                <thead>
                    <tr>
                        <th className="border border-black p-8">Degree</th>
                        <th className="border border-black p-8">Internship Availability</th>
                        <th className="border border-black p-8">Tentative Dates</th>
                        <th className="border border-black p-8">Full Time Joining Dates</th>
                        <th className="border border-black p-8">Passing Year</th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <td className="border border-x-2 border-y-0 border-black">B.Tech (2025 passing)</td>
                        <td className="border border-x-2 border-y-0 border-black">6 MONTHS</td>
                        <td className="border border-x-2 border-y-0 border-black">01 JAN 2025 to 30 JUNE 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">B.Tech (2026 passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2025 to 25 JULY 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">M.Tech (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">6 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2025 to 30 JUNE 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">M.Tech (2026 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2025 to 25 JULY 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">M.Tech (2026 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">6 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2026 to 30 JUNE 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">M.Sc (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">4 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2025 to 30 April 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">B.Design (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">6 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2025 to 30 JUNE 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">B.Design (2026 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2025 to 25 JULY 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">July 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">MBA (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">4 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2025 to 30 APRIL 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">MBA (2026 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2025 to 25 JULY 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">BBA (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">4 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">01 JAN 2025 to 30 APRIL 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">BBA (2026 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2025 to 25 JULY 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2026</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2026</td>
                    </tr>
                    <tr>
                        <td  className="border border-x-2 border-y-0 border-black ">MA (2025 Passing)</td>
                        <td  className="border border-x-2 border-y-0 border-black ">2 MONTHS</td>
                        <td  className="border border-x-2 border-y-0 border-black ">24 MAY 2024 to 25 JULY 2024</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                        <td  className="border border-x-2 border-y-0 border-black ">June 2025</td>
                    </tr>
                </tbody>
            </table>
   </div>
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
