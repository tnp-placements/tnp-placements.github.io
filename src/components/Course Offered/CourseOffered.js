import React from 'react'
import CourseAccordion from './CourseAccordion';
import { courses } from '../../styles/constant';
import Heading from '../Heading';

const CourseOffered = () => {
  return (
    <div className='w-full py-10' id='academics'>
        <Heading text="Course Offered" />
        <CourseAccordion courses={courses}/>
    </div>
  )
}

export default CourseOffered;