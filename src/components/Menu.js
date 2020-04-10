import React from 'react';

import MenuButton from './MenuButton';
import MenuList from './MenuList';

const Menu = (props) => {
   return (
      <nav className="nav-menu">
         <MenuButton handleToggleMenu={props.handleToggleMenu} isWhite={props.isWhite} />
         <MenuList isMenuActive={props.isMenuActive} />
      </nav>
   );
}

export default Menu;