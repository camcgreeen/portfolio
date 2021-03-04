import React from 'react';
import './Loading.scss';
import IntroAnimation from '../images/intro.gif';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <img src={IntroAnimation} alt='' />
      </div>
    );
  }
}

export default Loading;
