import React from 'react';
import Image from './Image';
import Figcaption from './Figcaption';

const Figure = ({ imgSrc, title }) => {
   return (
      <figure>
         <Image src={imgSrc} alt={title} />
         <Figcaption title={title} />
      </figure>
   );
}

export default Figure;