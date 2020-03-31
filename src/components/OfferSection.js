import React from 'react';
import womanImg from '../images/svg/pick-woman.svg';
import manImg from '../images/svg/pick-man.svg';
import babyImg from '../images/svg/pick-baby.svg';
import SectionTitle1 from './SectionTitle1';
import Tiles from './Tiles';

const OfferSection = ({ offerList }) => {
   const images = [womanImg, manImg, babyImg]
   return (
      <section className="offer">
         <SectionTitle1 title={offerList.title} />
         <Tiles tiles={offerList.tiles} images={images} />
      </section>
   );
}

export default OfferSection;