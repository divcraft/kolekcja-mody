import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

class NavBar extends Component {
   state = {
      isWhite: true
   }
   handleChangeNavBar = () => {
      if (window.scrollY > 10 && !this.state.isWhite) {
         this.setState({ isWhite: true })
      }
      else if (window.scrollY <= 10 && this.state.isWhite) {
         this.setState({ isWhite: false })
      }
   }
   componentDidMount() {
      if (this.props.pathHome) {
         this.setState({ isWhite: false })
         window.addEventListener('scroll', this.handleChangeNavBar)
      }
   }
   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleChangeNavBar)
   }
   render() {
      return (
         <div className={this.state.isWhite ? 'nav-bar white-bg' : 'nav-bar'}>
            <Logo isWhite={this.state.isWhite} />
            <Menu isWhite={this.state.isWhite} />
         </div>
      );
   }
}

export default NavBar;

