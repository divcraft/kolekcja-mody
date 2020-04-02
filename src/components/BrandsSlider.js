import React from 'react';
import BrandsImages from './BrandsImages';
import BrandsButton from './BrandsButton';

const BrandsSlider = ({ brands }) => {
   return (
      <div className="brands-slider">
         <BrandsButton />
         <BrandsImages brands={brands} />
         <BrandsButton />
      </div>
   );
}

export default BrandsSlider