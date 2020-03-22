import React from 'react';
import MenuListItem from './MenuListItem';

const MenuList = ({ isMenuActive }) => {
   const pages = [
      // {
      //    id: 0,
      //    path: '/',
      //    pageName: 'Home',
      //    exact: true
      // },
      {
         id: 1,
         path: '/news',
         pageName: 'News',
         exact: false
      },
      {
         id: 2,
         path: '/about',
         pageName: 'About',
         exact: false
      },
      {
         id: 3,
         path: '/contact',
         pageName: 'Contact',
         exact: false
      },
   ]
   const menuListItems = pages.map(page => (
      <MenuListItem key={page.id} path={page.path} pageName={page.pageName} exact={page.exact} />
   ))
   return (
      <ul className={isMenuActive ? 'active' : null}>
         {menuListItems}
      </ul>
   );
}

export default MenuList;