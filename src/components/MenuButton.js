import React from 'react';
import Image from './Image';
import navIconWhite from '../images/svg/menu-icon-white.svg'
// import navIconGray from '../images/svg/menu-icon-gray.svg'

const MenuButton = ({ handleToggleMenu }) => {
   return (
      <button onClick={handleToggleMenu}>
         <Image src={navIconWhite} alt='menu' />
      </button>
   );
}

export default MenuButton;