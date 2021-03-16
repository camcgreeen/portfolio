import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../main.scss';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    {
      /*
        TO DO:
          Add download link for CV
          Make links hoverable
          Add LinkedIn page
          Swap out 100vh
          Block level elements are clickable throughout the whole block which is annoying
      */
    }
    return (
      <div className='footer'>
        <div className='wrapper'>
          <div className='footer__container'>
            <div className='footer__container__contact'>
              <p className='footer__container__contact__p'>Want to talk?</p>
              <a href='mailto:hello@camgreen.works'>
                <p className='footer__container__contact__p underline'>
                  Get in touch.
                </p>
              </a>
            </div>
            {
              // ADD A TAGS HERE AND CV DOWNLOAD LINK
            }
            <ul className='footer__container__links'>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', display: 'inline' }}
              >
                <li>LinkedIn</li>
              </a>
              {
                // add download link for CV
              }
              <li>CV</li>
            </ul>
            <a href='mailto:hello@camgreen.works'>
              <h4 className='footer__container__email'>hello@camgreen.works</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
      }
      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: '.footer',
          scrub: true,
        },
      });
      tlFooter.from(
        '.footer__container > *',
        { yPercent: -50, stagger: 0.2 },
        '+=0'
      );
    }, 100);
  };
}

export default Footer;
