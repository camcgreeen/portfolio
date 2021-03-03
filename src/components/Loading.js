import React from 'react';
import './Loading.scss';
import intro from '../images/intro.gif';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <img src={intro} alt='' />
      </div>
    );
  }
}

export default Loading;
