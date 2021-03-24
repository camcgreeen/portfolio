import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Profile from '../images/profile.png';
import '../main.scss';
import './About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='wrapper'>
        <section className='about' id='about' ref={this.props.setRef}>
          <h2 className='about__h2'>About me.</h2>
          <div className='about__content'>
            <div className='about__content__me about-animate'>
              <p className='about__content__me__p'>
                Hello! I'm Cam, a front-end developer based in England. I love
                to make things on the internet, like applications and websites.
                😀
              </p>
              <p className='about__content__me__p'>
                I aim to build things that are fast, responsive and
                pixel-perfect. I'm quietly confident, creatively curious, and
                always seeking to improve.
              </p>
              <p className='about__content__me__p'>
                Here are some of the tools I like to use:
              </p>
              <ul className='about__content__me__ul'>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML</li>
                <li>(S)CSS</li>
                <li>Git</li>
                <li>Figma</li>
              </ul>
            </div>
            <img
              className='about__content__img about-animate'
              src={Profile}
              alt='profile picture'
            />
          </div>
        </section>
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
    }, 100);
  };
}

export default About;
