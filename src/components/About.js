import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../main.scss';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='wrapper'>
          <div className='about__me'>
            <p>
              Hi! I’m Cam, a{' '}
              <span className='about__me__special'>front-end developer</span>{' '}
              based in sunny England. 👋
            </p>
            <br />
            <p>
              I love to make things on the internet, like applications and
              websites. I build products that provide{' '}
              <span className='about__me__special'>
                fast, responsive and dynamic
              </span>{' '}
              experiences. 😀
            </p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    let reveal = gsap.timeline({ scrollTrigger: { trigger: '.about__me' } });
    reveal.from(
      '.about__me',
      {
        duration: 2,
        opacity: 0,
        ease: 'power4.out',
      },
      '+=0'
    );
  };
}

export default Home;
