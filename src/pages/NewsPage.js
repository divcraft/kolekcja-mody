import React from 'react';
import contentNews from '../content/contentNews';
import NavBar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';

const NewsPage = () => {
   const { newsList } = contentNews
   return (
      <>
         <header>
            <NavBar />
            <MainHeader title='Nowości' />
         </header>
         <main>
            <NewsList newsList={newsList} />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}

export default NewsPage;