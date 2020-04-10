import React from 'react';
import SectionTitle2 from './SectionTitle2';
import Image from './Image';
import ContactTileData from './ContactTileData';


const ContactTile = ({ title, image, data }) => {
   return (
      <div className="tile">
         <SectionTitle2 title={title} />
         <Image src={require(`../images/svg/${image}`)} alt={title} />
         <ContactTileData data={data} />
      </div>
   );
}

export default ContactTile;