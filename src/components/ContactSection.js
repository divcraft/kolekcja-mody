import React from 'react';
import ContactTiles from './ContactTiles';

const ContactSection = ({ contactData }) => {
   return (
      <section className="contact">
         <ContactTiles contactData={contactData} />
      </section>
   );
}

export default ContactSection;