import React from 'react';
import Heading2 from '../Heading2';
import { history } from '../../styles/constant';
import SubPart from './SubPart';

const History = () => {
  return (
    <div className='px-6 py-10 sm:px-14 xl:px-16 2xl:px-20 flex flex-col gap-8 bg-[#F9FBFD]'>
        <div>
            <Heading2 text="History"/>
        </div>
        <div className='flex flex-col gap-8 lg:gap-12'>
            {history.map((data, index)=>(
                <SubPart key={index} data={data} rev={index%2===0} />
            ))}
        </div>
    </div>
  )
}

export default History;