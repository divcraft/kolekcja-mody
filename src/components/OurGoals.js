import React from 'react';
import SectionTitle1 from './SectionTitle1';
import Paragraph from './Paragraph';
import Image from './Image';
import secondImg768 from '../images/about-img2-768.jpg'
import secondImg904 from '../images/about-img2-904.jpg'

const OurGoals = ({ ourGoals }) => {
   const { title, text } = ourGoals
   return (
      <section className="our-goals">
         <SectionTitle1 title={title} />
         <div className="text-wrap">
            <Image srcSet={`${secondImg768} 768qw, ${secondImg904} 904w`} alt={title} />
            <Paragraph text={text} />
         </div>
      </section>
   );
}

export default OurGoals;