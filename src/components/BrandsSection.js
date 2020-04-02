import React from 'react';
import adidasLogo from '../images/brand-logos/adidas-logo.png';
import calvinKleinLogo from '../images/brand-logos/calvin-klein-logo.png';
import calzedoniaLogo from '../images/brand-logos/calzedonia-logo.png';
import converseLogo from '../images/brand-logos/converse-logo.png';
import gucciLogo from '../images/brand-logos/gucci-logo.png';
import hmLogo from '../images/brand-logos/hm-logo.png';
import hugoBossLogo from '../images/brand-logos/hugo-boss-logo.png';
import levisLogo from '../images/brand-logos/levis-logo.png';
import newBalanceLogo from '../images/brand-logos/new-balance-logo.png';
import nikeLogo from '../images/brand-logos/nike-logo.png';
import reebokLogo from '../images/brand-logos/reebok-logo.png';
import zaraLogo from '../images/brand-logos/zara-logo.png';
import SectionTitle1 from './SectionTitle1';
import BrandsSlider from './BrandsSlider';

const BrandsSection = () => {
   const brands = [adidasLogo, calvinKleinLogo, calzedoniaLogo, converseLogo, gucciLogo, hmLogo, hugoBossLogo, levisLogo, newBalanceLogo, nikeLogo, reebokLogo, zaraLogo]
   return (
      <section className="brands">
         <SectionTitle1 title='Marki z którymi współpracujemy:' />
         <BrandsSlider brands={brands} />
      </section>
   );
}

export default BrandsSection;