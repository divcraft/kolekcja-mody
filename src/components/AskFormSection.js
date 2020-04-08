import React from 'react';
import SectionTitle1 from './SectionTitle1';
import AskformContainer from './AskFormContainer';

const AskFormSection = () => {
   return (
      <section className="ask-form">
         <div className="wrapper">
            <SectionTitle1 title='Przy zakupie zapytaj o nasza kartę członkowską i otrzymaj rabat' />
            <AskformContainer />
         </div>
      </section>
   );
}

export default AskFormSection;