import React from 'react';
import ContactTile from './ContactTile';

const ContactTiles = ({ contactData }) => {
   const tiles = contactData.map(tile => (
      <ContactTile key={tile.id} title={tile.title} image={tile.image} data={tile.data} />
   ))
   return (
      <div className="tiles">
         {tiles}
      </div>
   );
}

export default ContactTiles;