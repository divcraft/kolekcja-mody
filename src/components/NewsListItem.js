import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle1 from './SectionTitle1';
import SectionTitle2 from './SectionTitle2';
import Paragraph from './Paragraph';
import Image from './Image';

const NewsListItem = ({ title, subtitle, text, image }) => {
   return (
      <li>
         <Image src={require(`../images/${image}`)} alt={title} />
         <article>
            <hgroup>
               <SectionTitle1 title={title} />
               <SectionTitle2 title={subtitle} />
            </hgroup>
            <Paragraph text={text} />
            <Link to='/'>Czytaj więcej...</Link>
         </article>
      </li>
   );
}

export default NewsListItem;