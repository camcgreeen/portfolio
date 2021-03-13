import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Profile from '../images/profile.png';
import '../main.scss';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='about'>
          <h2 className='about__h2'>About me.</h2>
          <div className='about__content'>
            <div className='about__content__me'>
              <p className='parallax__p'>
                Hi! I’m Cam, a{' '}
                <span className='about__content__me__special'>
                  front-end developer
                </span>{' '}
                based in sunny England. 👋🏼
              </p>
              <br />
              <p className='parallax__p'>
                I love to make things on the internet, like applications and
                websites. I build products that provide{' '}
                <span className='about__contact__me__special'>
                  fast, responsive and dynamic
                </span>{' '}
                experiences. 😀
              </p>
            </div>
            <img
              className='about__content__img'
              src={Profile}
              alt='profile picture'
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.about__me',
    //     scrub: true,
    //     // start: 'top top',
    //     // end: 'bottom top',
    //     // start: 'top top',
    //     start: 'top 20%',
    //     end: 'bottom top',
    //     toggleActions: 'restart none none none',
    //   },
    // });
    // tl.fromTo(
    //   '.about__me',
    //   { yPercent: 0 },
    //   { yPercent: 50, ease: 'power2.out' }
    // );
    // reveal
    //   .from(
    //     '.p1',
    //     {
    //       duration: 20,
    //       // opacity: 0,
    //       yPercent: 10,
    //       ease: 'power4.out',
    //     },
    //     '+=0'
    //   )
    //   .from(
    //     '.p2',
    //     {
    //       duration: 20,
    //       // opacity: 0,
    //       yPercent: 20,
    //       ease: 'power4.out',
    //     },
    //     '+=0'
    //   );

    gsap.utils.toArray('.parallax__p').forEach((layer, i) => {
      // console.log('layer', layer);
      // const depth = layer.dataset.depth;
      // const depth = layer.dataset.depth;
      // console.log('depth', depth);
      // // const movement = -(layer.offsetHeight * depth);
      // const movement = -((layer.offsetHeight * i) / 4);
      // // console.log('movement', movement);
      // tl.from(layer, { y: movement, ease: 'none' }, 0);
      // tl.fromTo(layer, { y: 0 }, { yPercent: 50 });
    });
  };
}

export default Home;
