import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import OfferSection from '../components/OfferSection';
import Footer from '../components/Footer';

const HomePage = () => {
   return (
      <>
         <header className='header-home'>
            <NavBar pathHome={true} />
            <Banner />
         </header>
         <main>
            <OfferSection />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default HomePage;