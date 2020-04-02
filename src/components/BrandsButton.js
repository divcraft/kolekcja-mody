import React from 'react';
import arrow from '../images/svg/arrow.svg';
import Image from './Image';


const BrandsButton = ({ handleMove }) => {
   return (
      <button onClick={handleMove}>
         <Image src={arrow} alt='arrow' />
      </button>
   );
}

export default BrandsButton;