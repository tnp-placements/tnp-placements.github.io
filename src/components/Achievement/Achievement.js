import React from 'react';
import './achievement.css';
import Heading2 from '../Heading2';
import { achievements } from '../../styles/constant';
import SubPartAchievement from './SubPartAchievement';

const Achievement = () => {
  return (
    <div className='achievement-header py-10 px-8 sm:px-20 2xl:px-48 xl:px-20 lg:px-20 md:px-20 overflow-hidden'>
        <div>
            <Heading2 text="Achievements" color="text-white after:bg-white after:w-1/2" />
        </div>
        <div className='flex flex-col py-20 gap-16 md:gap-0'>
            {achievements.map((data,index)=>(
                <SubPartAchievement data={data} key={data.title} rev={index%2!==0}/>
            ))}
        </div>
    </div>
  )
}

export default Achievement;