import React from 'react';
import SectionTitle2 from './SectionTitle2';
import Image from './Image';
import Paragraph from './Paragraph';

const Tile = ({ title, imgSrc, text }) => {
   return (
      <div className="tile">
         <SectionTitle2 title={title} />
         <Image src={imgSrc} alt={title} />
         <Paragraph text={text} />
      </div>
   );
}

export default Tile;