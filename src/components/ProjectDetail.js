import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Footer from './Footer';
import Bubble from './Bubble';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App'>
        <h1>Hello from project: {this.props.match.params.name}</h1>
        <Bubble />
      </div>
    );
  }
  componentDidMount = () => {
    console.log(this.props);
  };
}

export default Home;
