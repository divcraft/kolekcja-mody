import React from 'react';
import { Helmet } from "react-helmet";

import contentNews from '../content/contentNews';
import NavBar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';

const NewsPage = () => {
   const { newsList } = contentNews
   return (
      <>
         <Helmet>
            <title>Kolekcja mody - Nowości</title>
         </Helmet>
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