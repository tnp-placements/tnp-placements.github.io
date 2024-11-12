import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import PastRecruiters from '../Past Recruiters/PastRecruiters';
import History from '../History/History';
import StudentLife from '../Student Life/StudentLife';
import Achievement from '../Achievement/Achievement';
import ForRecruiters from '../For Recruiters/ForRecruiters';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Stats from '../stats/stats';

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Achievement />
        <PastRecruiters/>
        <History />
        <StudentLife />        
        <ForRecruiters />
        <Stats/>
        <Contact/>
        <Footer />
    </div>
  )
}

export default Home;
