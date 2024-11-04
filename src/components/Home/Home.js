import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import PastRecruiters from '../Past Recruiters/PastRecruiters';
import History from '../History/History';
import StudentLife from '../Student Life/StudentLife';
import CourseOffered from '../Course Offered/CourseOffered';
import Achievement from '../Achievement/Achievement';
import ForRecruiters from '../For Recruiters/ForRecruiters';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Achievement />
        <PastRecruiters/>
        <History />
        <StudentLife />
        <CourseOffered/>
        <Contact/>
        <ForRecruiters />
        <Footer />
    </div>
  )
}

export default Home;