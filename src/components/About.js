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
          {/* <div className='about' id='about' ref='refAbout'> */}
          <h2 className='about__h2'>About me.</h2>
          <div className='about__content'>
            <img
              className='about__content__img'
              src={Profile}
              alt='profile picture'
            />
            <div className='about__content__me'>
              <p className='parallax__p'>
                I love to make things on the internet, like applications and
                websites. I build products that provide{' '}
                <span className='about__contact__me__special'>
                  fast and dynamic
                </span>
                experiences. 😀
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque semper enim a vestibulum aliquam. Praesent
                vulputate aliquam dolor, eu semper nulla venenatis id. Etiam
                elementum, felis in ultricies malesuada, nisi metus finibus
                lacus, eu ultrices augue nibh id mi.
              </p>
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
          '+=0'
        )
        .from(
          '.about__content__img',
          {
            opacity: 0,
            duration: 1.8,
            ease: 'power4.out',
          },
          '-=0.5'
        )
        .from(
          '.about__content__me',
          {
            duration: 1.8,
            opacity: 0,
            ease: 'power4.out',
          },
          '-=1'
        );
    }, 100);
  };
}

export default About;
