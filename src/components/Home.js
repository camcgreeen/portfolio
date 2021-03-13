import React from 'react';
import Loading from './Loading';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Footer from './Footer';
import Bubble from './Bubble';
import './Home.scss';
import '../main.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
  }
  render() {
    return (
      <>
        {this.state.loaded ? (
          <>
            <Nav />
            <Landing />
            <About />
            <Tools />
            <div className='projects-intro'>
              <div className='wrapper'>
                <h2>
                  Things I've <br /> worked on.
                </h2>
              </div>
            </div>
            <Projects />
            <Footer />
            <Bubble />
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ loaded: true }), 5000);
  };
}

export default Home;
