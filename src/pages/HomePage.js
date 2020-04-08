import React from 'react';
import contentHome from '../content/contentHome';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import OfferSection from '../components/OfferSection';
import Footer from '../components/Footer';
import NewestSection from '../components/NewestSection';
import BrandsSection from '../components/BrandsSection';
import DeliverySection from '../components/DeliverySection';
import NewsletterSection from '../components/NewsletterSection';
import AskFormSection from '../components/AskFormSection';

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
            <BrandsSection />
            <DeliverySection />
            <NewsletterSection />
            <AskFormSection />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default HomePage;