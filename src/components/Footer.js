import React from 'react';
import Paragraph from './Paragraph';

const Footer = ({ text }) => {
   return (
      <footer className="footer">
         <Paragraph text='Wyprodukowano przez www.divcraft.com' />
      </footer>
   );
}

export default Footer;