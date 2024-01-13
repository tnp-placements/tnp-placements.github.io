import React from 'react';
import { stats } from '../../styles/constant';
import StatCard from './StatCard';
import Companies from './Companies';

const PastRecruiters = () => {
  return (
    <div className='py-16 px-10 flex flex-col gap-14'>
        <div className='flex justify-center xl:justify-evenly xl:gap-0 flex-wrap gap-10 items-center'>
            {stats.map((stat)=>(
                <StatCard stat={stat} key={stat.key}/>
            ))}
        </div>
        <div className='flex flex-col'>
            <div className='self-center text-[#3C3A3A] text-2xl font-semibold headingDecoration after:w-[30%] after:bg-[#0193DC] after:left-[35%] relative'>
                Past Recruiters
            </div>
            <div className='overflow-hidden'>
                <Companies/>
            </div>
        </div>
    </div>
  )
}

export default PastRecruiters;