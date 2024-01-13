import React from 'react';

const Heading = ({ text, styles }) => {
  return (
    <div className={`${styles} relative flex justify-center mb-14 sm:mb-20`}>
      <h1 className='gradient-text font-bold sm:text-4xl text-3xl'>{text}</h1>
    </div>
  )
}

export default Heading;