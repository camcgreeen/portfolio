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
            <div className='about__content__me about-animate'>
              <p className='parallax__p'>
                Hello! I'm Cam, a front-end developer based in England. I love
                to make things on the internet, like applications and websites.
                😀
                {/* I love
                to make things on the internet, like applications and websites.
                I always aim to build things that provide{' '}
                  fast and dynamic
                experiences. 😀 */}{' '}
                {/* I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. */}
                <br />
                <br />I always aim to build things that are fast, responsive and
                pixel-perfect.
                {/* Something interesting and cool words that keep the page structure. */}{' '}
                I'm quietly confident, creatively curious, and consistently
                seeking to improve.
                {/* <br />
                <br />
                Shortly after graduating from Northeastern University, I joined
                the engineering team at Upstatement where I work on a wide
                variety of interesting and meaningful projects on a daily basis. */}
                <br />
                <br />
                Here are some of the tools I like to use:
              </p>
              <br />
              <ul className='about__content__me__ul'>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                {/* <li>Node</li> */}
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
