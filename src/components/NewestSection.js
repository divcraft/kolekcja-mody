import React from 'react';
import image from '../images/news-img1-831.jpg';
import Figure from './Figure';
import NewestArticle from './NewestArticle';

const NewestSection = ({ newest }) => {
   const { figcaption, title1, title2, text, linkText } = newest
   return (
      <section className="newest">
         <Figure imgSrc={image} title={figcaption} />
         <NewestArticle title1={title1} title2={title2} text={text} linkText={linkText} />
      </section>
   );
}

export default NewestSection;