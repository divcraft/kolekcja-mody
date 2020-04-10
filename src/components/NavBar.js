import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

class NavBar extends Component {
   state = {
      isWhite: true,
      isMenuActive: false
   }
   handleChangeNavBar = () => {
      if (window.scrollY > 10 && !this.state.isWhite) {
         this.setState({ isWhite: true })
      }
      else if (window.scrollY <= 10 && this.state.isWhite) {
         this.setState({ isWhite: false })
      }
   }
   handleToggleMenu = () => {
      const isMenuActive = !this.state.isMenuActive
      if (isMenuActive) {
         document.querySelector('body').style.overflow = 'hidden';
      } else {
         document.querySelector('body').style = null;
      }
      if (!this.state.isWhite) {
         this.setState({
            isWhite: true,
            isMenuActive,
         })
      } else if (this.state.isWhite && window.scrollY <= 10 && this.props.pathHome) {
         this.setState({
            isWhite: false,
            isMenuActive,
         })
      } else {
         this.setState({
            isMenuActive,
         })
      }
   }
   componentDidMount() {
      if (this.props.pathHome) {
         this.setState({ isWhite: false })
         window.addEventListener('scroll', this.handleChangeNavBar)
      }
      document.querySelector('body').style = null;
      window.onresize = () => {
         if (window.innerWidth >= 768 && this.state.isMenuActive) {
            document.querySelector('body').style = null;
            this.setState({ isMenuActive: !this.state.isMenuActive })
         }
      }
   }
   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleChangeNavBar)
   }
   render() {
      return (
         <div className={this.state.isWhite ? 'nav-bar white-bg' : 'nav-bar'}>
            <Logo isWhite={this.state.isWhite} />
            <Menu isWhite={this.state.isWhite} isMenuActive={this.state.isMenuActive} handleToggleMenu={this.handleToggleMenu} />
         </div>
      );
   }
}

export default NavBar;

