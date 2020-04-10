import React from 'react';
import FirstStepsListItem from './FirstStepsListItem';

const FirstStepsList = ({ advantagesList }) => {
   const listItems = advantagesList.map(advantage => (
      <FirstStepsListItem key={advantage.id} text={advantage.text} />
   ))
   return (
      <ul>
         {listItems}
      </ul>
   );
}

export default FirstStepsList;