import React from 'react';
import '../main.scss';
import './Landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='landing'>Landing</div>
      </div>
    );
  }
  scroll = () => {
    const about = document.querySelector('.about');
    about.scrollIntoView({
      behavior: 'smooth',
    });
  };
}

export default Landing;
