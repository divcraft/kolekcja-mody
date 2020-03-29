import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image'
import fb from '../images/svg/media-fb.svg'
import ig from '../images/svg/media-ig.svg'
import gplus from '../images/svg/media-gplus.svg'

const MediaIcons = () => {
   const svg = [
      {
         id: 1,
         img: fb,
         alt: 'Facebook',
         path: '/'
      },
      {
         id: 2,
         img: ig,
         alt: 'Instagram',
         path: '/'
      },
      {
         id: 3,
         img: gplus,
         alt: 'Google+',
         path: '/'
      },
   ]
   const icons = () => svg.map(icon => (
      <Link to={icon.path}>
         <Image src={icon.img} alt={icon.alt} />
      </Link>
   ))
   return (
      <div className="media-icons">
         {icons()}
      </div>
   );
}

export default MediaIcons;