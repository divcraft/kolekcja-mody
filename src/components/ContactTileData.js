import React from 'react';

const ContactTileData = ({ data }) => {
   const dataItems = data.map((data, i) => (
      <p key={i} className="contact-data-item">{data}</p>
   ))
   return (
      <div className="contact-data">
         {dataItems}
      </div>
   );
}

export default ContactTileData;