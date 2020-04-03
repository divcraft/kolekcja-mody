import React from 'react';
import SectionTitle1 from './SectionTitle1';
import Paragraph from './Paragraph';
import NewsletterForm from './NewsletterForm';

const NewsletterSection = () => {
   return (
      <section className="newsletter">
         <SectionTitle1 title='Zapisz się na newsletter i łap najnowsze okazje' />
         <Paragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum natus sequi soluta repellendus nihil saepe optio atque perspiciatis amet!' />
         <NewsletterForm />
      </section>
   );
}

export default NewsletterSection;