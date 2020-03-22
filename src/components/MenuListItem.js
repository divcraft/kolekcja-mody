import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuListItem = ({ path, pageName, exact }) => {
   return (
      <li>
         <NavLink to={path} exact={exact ? exact : null}>{pageName}</NavLink>
      </li>
   );
}

export default MenuListItem;