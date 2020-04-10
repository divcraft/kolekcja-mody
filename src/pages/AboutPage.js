import React from 'react';
import contentAbout from '../content/contentAbout';
import MainHeader from '../components/MainHeader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FirstSteps from '../components/FirstSteps';
import OurGoals from '../components/OurGoals';

const AboutPage = () => {
   const { firstSteps, ourGoals } = contentAbout
   return (
      <>
         <header>
            <NavBar />
            <MainHeader title='O nas' />
         </header>
         <main>
            <FirstSteps firstSteps={firstSteps} />
            <OurGoals ourGoals={ourGoals} />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default AboutPage;