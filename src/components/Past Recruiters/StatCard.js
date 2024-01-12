import React from "react";

const StatCard = ({ stat }) => {
  return (
    <div className="shadow-lg w-[200px] h-[200px] bg-white font-bold flex flex-col items-center justify-center text-2xl">
      <div className="text-center">{stat.value + '+'}</div>
      <div className="uppercase text-center">{stat.key}</div>
    </div>
  );
};

export default StatCard;
