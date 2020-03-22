import React from 'react';

const Image = ({ src, srcSet, alt }) => {
   return (
      <img src={src ? src : null} alt={alt} srcSet={srcSet ? srcSet : null} />
   );
}

export default Image;