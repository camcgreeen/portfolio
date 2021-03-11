import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Bubble from './Bubble';
import './ProjectDetail.scss';
import '../main.scss';

class Jobstasy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='project-detail'>
        <div className='wrapper'>
          <h1>Hello from Jobstasy</h1>
        </div>
        <Bubble />
      </div>
    );
  }
  componentDidMount = () => {
    console.log(this.props);
  };
}

export default Jobstasy;
