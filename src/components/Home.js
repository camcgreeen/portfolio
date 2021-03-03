import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Footer from './Footer';
import Bubble from './Bubble';
import '../main.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Landing />
        <Bubble />
      </div>
    );
  }
}

export default Home;
