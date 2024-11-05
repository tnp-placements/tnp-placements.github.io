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
            <div className='text-[#123794] fw-bold px-5 sm:px-10 xl:px-0'>Below is a detailed description of internship and Placements availability (date & duration) for various courses at the university.
             The dates mentioned below for the exam and internship are tentative, it all depends on the release of the last date sheet scheduled 10-15 days before the exam
             </div>
             <div>
             <table border="1" cellpadding="10" cellspacing="0"> <tr> <th>Degree</th> <th>Internship Availability</th> <th>Tentative Dates</th> <th>Full Time Joining Dates</th> <th>Passing Year</th> </tr> <tr> <td>B.Tech (2025 passing)</td> <td>6 MONTHS</td> <td>01 JAN 2025 to 30 JUNE 2025</td> <td>July 2025</td> <td>July 2025</td> </tr> <tr> <td>B.Tech (2026 passing)</td> <td>2 MONTHS</td> <td>24 MAY 2025 to 25 JULY 2025</td> <td>July 2026</td> <td>July 2026</td> </tr> <tr> <td>M.Tech (2025 Passing)</td> <td>6 MONTHS</td> <td>01 JAN 2025 to 30 JUNE 2025</td> <td>July 2025</td> <td>July 2025</td> </tr> <tr> <td>M.Tech (2026 Passing)</td> <td>2 MONTHS</td> <td>24 MAY 2025 to 25 JULY 2025</td> <td>July 2026</td> <td>July 2026</td> </tr> <tr> <td>M.Tech (2026 Passing)</td> <td>6 MONTHS</td> <td>01 JAN 2026 to 30 JUNE 2026</td> <td>July 2026</td> <td>July 2026</td> </tr> <tr> <td>M.Sc (2025 Passing)</td> <td>4 MONTHS</td> <td>01 JAN 2025 to 30 April 2025</td> <td>June 2025</td> <td>June 2025</td> </tr> <tr> <td>B.Design (2025 Passing)</td> <td>6 MONTHS</td> <td>01 JAN 2025 to 30 JUNE 2025</td> <td>July 2025</td> <td>July 2025</td> </tr> <tr> <td>B.Design (2026 Passing)</td> <td>2 MONTHS</td> <td>24 MAY 2025 to 25 JULY 2025</td> <td>July 2026</td> <td>July 2026</td> </tr> <tr> <td>MBA (2025 Passing)</td> <td>4 MONTHS</td> <td>01 JAN 2025 to 30 APRIL 2025</td> <td>June 2025</td> <td>June 2025</td> </tr></td> </tr> <tr> <td>MBA (2026 Passing)</td> <td>2 MONTHS</td> <td>24 MAY 2025 to 25 JULY 2025</td> <td>June 2026</td> <td>June 2026</td> </tr> <tr> <td>BBA (2025 Passing)</td> <td>4 MONTHS</td> <td>01 JAN 2025 to 30 APRIL 2025</td> <td>June 2025</td> <td>June 2025</td> </tr> <tr> <td>BBA (2026 Passing)</td> <td>2 MONTHS</td> <td>24 MAY 2025 to 25 JULY 2025</td> <td>June 2026</td> <td>June 2026</td> </tr> <tr> <td>MA (2025 Passing)</td> <td>2 MONTHS</td> <td>24 MAY 2024 to 25 JULY 2024</td> <td>June 2025</td> <td>June 2025</td> </tr>
             </table>
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
