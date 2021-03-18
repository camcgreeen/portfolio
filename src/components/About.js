import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Profile from '../images/profile.png';
import '../main.scss';
import './About.scss';

// gsap.registerPlugin(ScrollTrigger);

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.refAbout = React.createRef();
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // }
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='about' id='about' ref={this.props.setRef}>
          <h2 className='about__h2'>About me.</h2>
          <div className='about__content'>
            <img
              className='about__content__img about-animate'
              src={Profile}
              alt='profile picture'
            />
            <div className='about__content__me about-animate'>
              <p className='parallax__p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit .
                Pellentesque semper enim a{' '}
                <span className='about__contact__me__special'>
                  vestibulum aliquam
                </span>
                . I love to make things on the internet, like applications and
                websites. I build products that provide{' '}
                <span className='about__contact__me__special'>
                  fast and dynamic
                </span>{' '}
                experiences. 😀
                {/* <br /> */}
                {/* <br /> */}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque semper enim a vestibulum aliquam. */}
                <br />
                <br />
                Here are a few technologies I've been working with recently:
              </p>
              <br />
              <ul className='about__content__me__ul'>
                <li>React</li>
                <li>Node</li>
                <li>GSAP</li>
                <li>HTML</li>
                <li>(S)CSS</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    setTimeout(() => {
      let tlAbout = gsap.timeline({
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
        },
      });
      new SplitText('.about__h2', {
        type: 'lines',
        linesClass: 'line-child__about',
      });
      new SplitText('.about__h2', {
        type: 'lines',
        linesClass: 'line-parent',
      });
      tlAbout
        .from(
          '.line-child__about',
          {
            duration: 1,
            y: 140,
            opacity: 0,
            ease: 'power4.out',
          },
          '-=0'
        )
        .from(
          '.about-animate',
          {
            opacity: 0,
            duration: 1.8,
            ease: 'power4.out',
            stagger: {
              amount: 0.2,
            },
          },
          '-=0.75'
        );
      // .from(
      //   '.about__content__me',
      //   {
      //     duration: 1.8,
      //     opacity: 0,
      //     ease: 'power4.out',
      //   },
      //   '-=1'
      // );
    }, 100);
  };
}

export default About;
