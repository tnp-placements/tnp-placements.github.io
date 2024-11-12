import React from "react";
import Heading2 from "../Heading2";
import Procedure from '../../images/stats.jpg';


const Stats = () => {

 

    return (
      <div className="flex w-full flex-col gap-10 py-5 " id="stats">
        <div className="px-10 2xl:px-40">
          <Heading2 text="Previous year Stats" color="after:w-1" />
        </div>     
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="flex justify-center">
              <img src={Procedure} alt="placement" className="max-w w-full xl:w-auto" />
          </div>          
        </div>
      </div>
    );
  };
  
  export default Stats;
  