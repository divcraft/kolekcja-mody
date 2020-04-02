import React, { Component } from 'react';
import BrandsImages from './BrandsImages';
import BrandsButton from './BrandsButton';

class BrandsSlider extends Component {
   state = {
      translate: 0
   }
   handleMovePrev = () => {
      if (this.state.translate === 0) return
      this.setState({ translate: this.state.translate + 50 })
   }
   handleMoveNext = () => {
      if (this.state.translate === -200) return
      this.setState({ translate: this.state.translate - 50 })
   }
   render() {
      const classMove = {
         transform: `translateX(${this.state.translate}%)`,
         transition: '.4s'
      }
      return (
         <div className="brands-slider">
            <BrandsButton handleMove={this.handleMovePrev} />
            <BrandsImages brands={this.props.brands} classMove={classMove} />
            <BrandsButton handleMove={this.handleMoveNext} />
         </div>
      );
   }

}

export default BrandsSlider