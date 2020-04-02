import React from 'react';
import arrow from '../images/svg/arrow.svg';
import Image from './Image';


const BrandsButton = () => {
   return (
      <button>
         <Image src={arrow} alt='arrow' />
      </button>
   );
}

export default BrandsButton;