import React from 'react';
import { gsap } from 'gsap';
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
    this.setRef = this.setRef.bind(this);
    this.state = {
      loaded: false,
      mobileDevice: false,
    };
  }
  render() {
    return (
      <div className='home'>
        {this.state.loaded ? (
          <>
            <Nav />
            <Landing aboutRef={this.childRef} />
            <About setRef={this.setRef} />
            {/* <Tools /> */}
            {/* <div className='projects-intro'>
              <div className='wrapper'>
                <h2>
                  Things I've <br /> worked on.
                </h2>
              </div>
            </div> */}
            <Projects />
            <Footer />
            <Bubble />
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ loaded: true }), 4800);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ mobileDevice: true });
    } else {
      this.setState({ mobileDevice: false });
    }
    let initHome = gsap.timeline({
      default: { opacity: 0, ease: 'back' },
    });
    initHome.from('.home', { ease: 'linear', autoAlpha: 0 }, '+=0');
  };
  setRef(input) {
    this.childRef = input;
  }
}

export default Home;
