import React from 'react'

const SubPart = ({rev, data}) => {
  return (
    <div className={`flex ${rev?'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-8 lg:items-center flex-col w-full`}>
        <div className='lg:w-[45%]'>
            <img src={data.src} alt={data.alt} className=''/>
        </div>
        <div className={`text-center ${rev?'lg:text-left':'lg:text-right'} lg:w-[55%]`}>{data.description}</div>
    </div>
  )
}

export default SubPart;