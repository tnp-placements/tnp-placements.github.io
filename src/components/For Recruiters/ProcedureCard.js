import React from 'react';

const ProcedureCard = ({data}) => {
  return (
    <div className='flex flex-col gap-2 lg:w-[45%] 2xl:w-[35%]'>
        <div className='text-[#0193DC] text-lg bg-[#A0D8FD] w-[70px] h-[70px] flex justify-center items-center rounded-full'>
            {data.number}
        </div>
        <div className='text-[#0090FF] font-semibold text-lg'>
            {data.title}
        </div>
        <div className='text-[#101010] text-sm leading-normal'>
            {data.description}
        </div>
    </div>
  )
}

export default ProcedureCard;