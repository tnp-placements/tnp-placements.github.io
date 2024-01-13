import React from 'react';

const Heading2 = ({text, color}) => {
  return (
    <h1 className={`sm:text-4xl ${color} text-3xl font-medium headingDecoration w-fit after:left-0 after:w-[70%] after:h-[3px] after:bottom-[-2px] after:bg-black relative`}>
        {text}
    </h1>
  )
}

export default Heading2;