import React from 'react';
import NavBar from '../components/NavBar';

const HomePage = () => {
   return (
      <>
         <header className='banner-home'>
            <NavBar />
         </header>
         <main>
            homepage
         </main>
         <footer>
            footer
         </footer>
      </>
   );
}

export default HomePage;