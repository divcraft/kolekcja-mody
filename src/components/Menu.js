import React, { Component } from 'react';

import MenuButton from './MenuButton';
import MenuList from './MenuList';

class Menu extends Component {
   state = {
      isMenuActive: false
   }
   handleToggleMenu = () => {
      this.setState({ isMenuActive: !this.state.isMenuActive })
   }
   render() {
      return (
         <nav className="nav-menu">
            <MenuButton handleToggleMenu={this.handleToggleMenu} />
            <MenuList isMenuActive={this.state.isMenuActive} />
         </nav>
      );
   }
}

export default Menu;