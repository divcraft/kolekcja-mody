import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle1 from './SectionTitle1';

const DeliverySection = () => {
   return (
      <section className="delivery">
         <SectionTitle1 title='Przy zamowieniu powyżej 200 zł dostawa do domu za darmo' />
         <Link to='/about'>Dowiedz się więcej</Link>
      </section>
   );
}

export default DeliverySection;