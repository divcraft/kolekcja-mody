import React from 'react';
import NewestHgroup from './NewestHgroup';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';

const NewestArticle = ({ title1, title2, text, linkText }) => {
   return (
      <article>
         <NewestHgroup title1={title1} title2={title2} />
         <Paragraph text={text} />
         <Link to='/news'>{linkText}</Link>
      </article>
   );
}

export default NewestArticle;