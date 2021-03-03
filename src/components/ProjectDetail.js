import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App'>
        Hello from project: {this.props.match.params.name}
      </div>
    );
  }
  componentDidMount = () => {
    console.log(this.props);
  };
}

export default Home;
