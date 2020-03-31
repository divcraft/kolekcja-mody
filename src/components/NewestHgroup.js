import React from 'react';
import SectionTitle1 from './SectionTitle1';
import SectionTitle2 from './SectionTitle2';

const NewestHgroup = ({ title1, title2 }) => {
   return (
      <hgroup>
         <SectionTitle1 title={title1} />
         <SectionTitle2 title={title2} />
      </hgroup>
   );
}

export default NewestHgroup;