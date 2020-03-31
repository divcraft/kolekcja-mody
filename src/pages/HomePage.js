import React from 'react';
import contentHome from '../content/contentHome';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import OfferSection from '../components/OfferSection';
import Footer from '../components/Footer';
import NewestSection from '../components/NewestSection';

const HomePage = () => {
   const { offerList, newest } = contentHome
   return (
      <>
         <header className='header-home'>
            <NavBar pathHome={true} />
            <Banner />
         </header>
         <main>
            <OfferSection offerList={offerList} />
            <NewestSection newest={newest} />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default HomePage;