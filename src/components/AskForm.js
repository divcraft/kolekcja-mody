import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import AskFormNotification from './AskFormNotification';
import AskFormValidator from './AskFormValidator';

class AskForm extends Component {
   state = {
      inputValue: '',
      textareaValue: '',
      notificationShow: false,
      formValidated: false
   }
   emailWrong = false
   textWrong = false
   validationFailed = false
   showNotification = () => {
      if (this.state.notificationShow) {
         setTimeout(() => {
            this.setState({ notificationShow: false })
         }, 4000);
         return <AskFormNotification />
      } else {
         return null
      }
   }
   validateForm = () => {
      const { inputValue, textareaValue } = this.state
      if (inputValue.includes('@') && inputValue.includes('.') && !inputValue.includes('@.') && !inputValue.includes('.@') && (inputValue.indexOf('@') !== 0) && (inputValue.indexOf('.') !== 0) && (inputValue.indexOf('@') < inputValue.lastIndexOf('.')) && (inputValue.length - inputValue.lastIndexOf('.') >= 3)) {
         this.emailWrong = false
      } else {
         this.emailWrong = true
      }
      if (textareaValue) {
         this.textWrong = false
      } else {
         this.textWrong = true
      }
      this.setState({ formValidated: true })
   }
   handleChange = e => {
      if (e.target.name === 'askFormInput') {
         this.setState({
            inputValue: e.target.value,
            formValidated: false,
         })
      } else if (e.target.name === 'askFormArea') {
         this.setState({
            textareaValue: e.target.value,
            formValidated: false,
         })
      }
   }
   handleSubmit = e => {
      e.preventDefault()
      this.validateForm()
      if (this.emailWrong || this.textWrong) {
         this.validationFailed = true
         return
      }
      this.emailWrong = false
      this.textWrong = false
      this.validationFailed = false
      this.setState({
         inputValue: '',
         textareaValue: '',
         formValidated: false,
         notificationShow: !this.state.notificationShow
      })
   }
   componentDidUpdate() {
      if (!this.state.formValidated) {
         this.validateForm()
      }
   }
   render() {
      return (
         <>
            {this.showNotification()}
            <form onSubmit={this.handleSubmit}>
               <Input type='text' name='askFormInput' value={this.state.inputValue} placeholder='Adres email' onChange={this.handleChange} />
               {(this.validationFailed && this.emailWrong) && <AskFormValidator text='Podaj poprawny adres email' />}
               <Textarea value={this.state.textareaValue} placeholder='Wiadomość' onChange={this.handleChange} />
               {(this.validationFailed && this.textWrong) && <AskFormValidator text='Wpisz wiadomość' />}
               <Button text='Wyślij' />
            </form>
         </>
      );
   }
}

export default AskForm;