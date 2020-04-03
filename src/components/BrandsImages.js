import React from 'react';
import Image from './Image';

const BrandsImages = ({ brands, classMove }) => {
   const images = brands.map((image, i) => (
      <Image key={i} src={image} alt='logo' />
   ))
   return (
      <div className="brands-images-wrapper">
         <div className='brands-images' style={classMove}>
            {images}
         </div>
      </div>
   );
}

export default BrandsImages;