import React from 'react';
import firstImg768 from '../images/about-img1-768.jpg'
import firstImg1366 from '../images/about-img1-1366.jpg'
import firstImg1920 from '../images/about-img1-1920.jpg'

import SectionTitle1 from './SectionTitle1';
import Paragraph from './Paragraph';
import Image from './Image';
import FirstStepsList from './FirstStepsList';

const FirstSteps = ({ firstSteps }) => {
   const { title, text1, text2, advantagesList } = firstSteps
   return (
      <section className="first-steps">
         <SectionTitle1 title={title} />
         <div className="first-text wrapper">
            <Paragraph text={text1} />
         </div>
         <Image srcSet={`${firstImg768} 768w, ${firstImg1366} 1366w, ${firstImg1920} 1920w`} alt={title} />
         <div className="second-text wrapper">
            <Paragraph text={text2} />
            <FirstStepsList advantagesList={advantagesList} />
         </div>
      </section>
   );
}

export default FirstSteps;