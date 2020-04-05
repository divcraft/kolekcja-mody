import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Input from './Input';
import Button from './Button';

class NewsletterForm extends Component {
   state = {
      value: '',
      styleInput: null,
      styleButton: null,
      icon: null
   }
   formChecked = false
   emailCorrect = false
   emailSent = false
   validateForm = () => {
      const { value } = this.state
      if (value.includes('@') && value.includes('.') && !value.includes('@.') && !value.includes('.@') && (value.indexOf('@') !== 0) && (value.indexOf('.') !== 0) && (value.indexOf('@') < value.lastIndexOf('.')) && (value.length - value.lastIndexOf('.') >= 3)) {
         console.log('colorInput')
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
         this.emailCorrect = true
      } else if (this.state.styleInput && this.state.styleButton) {
         console.log('colorButton')
         this.setState({
            styleInput: null,
            styleButton: null
         })
         this.emailCorrect = false
      }
   }
   renderIcon = () => {
      if (this.state.icon === 'wrong' && !this.emailCorrect) {
         return <FontAwesomeIcon icon={faTimesCircle} />
      } else if ((this.state.icon === 'wrong' && this.emailCorrect) || this.emailSent) {
         return <FontAwesomeIcon icon={faCheckCircle} />
      }
      return null
   }
   handleSubmit = e => {
      e.preventDefault()
      if (this.emailSent) return
      if (!this.formChecked) this.formChecked = true
      if (this.emailCorrect) {
         this.emailSent = true
         this.setState({
            value: '',
            styleInput: {
               pointerEvents: 'none',
               backgroundColor: 'white',
               border: 'none',
               width: 0,
            },
            styleButton: {
               pointerEvents: 'none',
               border: 'none',
               width: 'auto',
            },
            icon: 'correct'
         })
      } else {
         this.setState({ icon: 'wrong' })
      }
   }
   handleChange = e => {
      if (this.emailSent) return
      if (this.formChecked) this.formChecked = false
      let icon = this.state.icon
      this.setState({
         value: e.target.value,
         icon
      })
   }
   componentDidUpdate() {
      if (!this.formChecked) {
         this.validateForm()
         this.formChecked = true
      }
   }
   render() {
      return (
         <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
               {this.renderIcon()}
               <Input type='text' placeholder={this.emailSent ? '' : "Wpisz email:"} value={this.state.value} onChange={this.handleChange} style={this.state.styleInput} />
               <Button text={this.emailSent ? 'Wiadomość wysłana, sprawdź swoją pocztę' : "Wyślij"} style={this.state.styleButton} />
            </form>
         </div>

      );
   }
}

export default NewsletterForm;