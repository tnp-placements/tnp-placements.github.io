import React from 'react';
import Heading from '../Heading';
import { studentLife } from '../../styles/constant';
import SubPartLife from './SubPartLife';

const StudentLife = () => {
  return (
    <div className='py-10 xl:px-40 2xl:px-52 bg-[#F9FBFD] overflow-x-hidden'>
        <Heading text="Student Life" />
        <div className='flex flex-col gap-2 sm:gap-6 lg:gap-0'>
            {studentLife.map((data, index)=>(
                <SubPartLife data={data} key={index} rev={index%2!==0} />
            ))}
        </div>
    </div>
  )
}

export default StudentLife;