import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CV from '../files/CV.pdf';
import '../main.scss';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer__container'>
            <div className='footer__container__contact'>
              <h1 className='footer__container__contact__p'>Want to talk?</h1>
              <a href='mailto:hello@camgreen.works'>
                <h1 className='footer__container__contact__p underline'>
                  Get in touch.
                </h1>
              </a>
            </div>
            <ul className='footer__container__links'>
              {/* <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <li>LinkedIn</li>
              </a> */}
              <li>
                <a
                  href='https://github.com/camcgreen'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={CV}
                  download='Cameron Green - CV - Front-End Web Developer.pdf'
                >
                  CV
                </a>
              </li>
            </ul>
            <ul className='footer__container__email-mobile'>
              <li>
                {' '}
                <a
                  href='mailto:hello@camgreen.works'
                  style={{ display: 'inline' }}
                >
                  <h4
                    className='footer__container__email'
                    style={{ display: 'inline' }}
                  >
                    hello@camgreen.works
                  </h4>
                </a>
              </li>
              <li className='footer__container__email-mobile__number'>
                (+44) 7464 753049
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    setTimeout(() => {
      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: '.footer',
          scrub: true,
        },
      });
      tlFooter.from('.footer__container', { yPercent: -50 }, '+=0');
    }, 100);
  };
}

export default Footer;
