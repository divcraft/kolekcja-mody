import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class NewsletterForm extends Component {
   state = {
      value: '',
      styleInput: null,
      styleButton: null
   }
   checked = false
   validateForm = () => {
      this.checked = true
      const { value } = this.state
      if (value.includes('@') && value.includes('.') && !value.includes('@.') && !value.includes('.@') && (value.indexOf('@') !== 0) && (value.indexOf('.') !== 0) && (value.indexOf('@') < value.lastIndexOf('.')) && (value.length - value.lastIndexOf('.') >= 3)) {
         this.setState({
            styleInput: {
               backgroundColor: 'white',
               color: '#FF6565'
            },
            styleButton: {
               backgroundColor: '#FF6565',
               color: 'white'
            }
         })
         return true
      } else {
         this.setState({
            styleInput: null,
            styleButton: null
         })
         return false
      }
   }
   handleSubmit = e => {
      e.preventDefault()
      if (this.validateForm()) {
         this.setState({
            value: '',
            styleInput: null,
            styleButton: null
         })
      }
   }
   handleChange = e => {
      this.checked = false
      this.setState({ value: e.target.value })
   }
   componentDidUpdate() {
      if (!this.checked) this.validateForm()
   }
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <Input type='text' placeholder='Wpisz email:' value={this.state.value} onChange={this.handleChange} style={this.state.styleInput} />
            <Button text='Wyślij' style={this.state.styleButton} />
         </form>
      );
   }
}

export default NewsletterForm;