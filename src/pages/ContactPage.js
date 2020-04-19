import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import contentContact from '../content/contentContact';
import MainHeader from '../components/MainHeader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ContactMap from '../components/ContactMap';

class ContactPage extends Component {
   state = {
      renderMap: false
   }
   componentDidMount() {
      !this.state.renderMap && this.setState({ renderMap: !this.state.renderMap })
   }
   render() {
      const { contactData } = contentContact
      return (
         <>
            <Helmet>
               <title>Kolekcja mody - Kontakt</title>
            </Helmet>
            <header>
               <NavBar />
               <MainHeader title='Kontakt' />
            </header>
            <main>
               <ContactSection contactData={contactData} />
               {this.state.renderMap ? <ContactMap /> : null}
            </main>
            <footer>
               <Footer />
            </footer>
         </>
      );
   }

}

export default ContactPage;