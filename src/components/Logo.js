import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import logoHome from '../images/logo-home.png';
import logoAll from '../images/logo-all.png';

const Logo = ({ isWhite }) => {
   return (
      <Link to='/'>
         <Image src={isWhite ? logoAll : logoHome} alt='logo' />
      </Link>
   );
}

export default Logo;