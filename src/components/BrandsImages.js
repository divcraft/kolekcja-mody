import React from 'react';
import Image from './Image';

const BrandsImages = ({ brands }) => {
   const images = brands.map(image => (
      <Image src={image} alt='logo' />
   ))
   return (
      <div className='brands-images'>
         {images}
      </div>
   );
}

export default BrandsImages;