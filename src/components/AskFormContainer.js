import React from 'react';
import Paragraph from './Paragraph';
import AskForm from './AskForm';

const AskformContainer = () => {
   return (
      <div className="form-container">
         <Paragraph text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis rem fuga at dicta dolorem animi eos sed tenetur eum.' />
         <AskForm />
      </div>
   );
}

export default AskformContainer;