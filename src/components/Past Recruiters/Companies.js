import React from "react";
import Carousel from "./Carousel";
import { companyLogos } from "../../styles/constant";

const Companies = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        placeItems: "center",
        width: "90%",
        overflow: "hidden",
        marginLeft: "5%",
        marginTop: "40px",
        marginBottom: "30px",
      }}
    >
      <Carousel number={1} obj={companyLogos}/>
    </div>
  );
};

export default Companies;
