import React from 'react';
import './Contact.scss';
import Nav from './Nav';
import Footer from './Footer';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <Nav />
        <div className='demo'>Hello from Contact</div>
      </div>
    );
  }
}

export default Contact;
