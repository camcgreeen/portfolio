import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../main.scss';
import './Landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='landing'>
          <div className='landing__bg'></div>
          <div className='landing__content'>
            <h1 className='landing__content__title'>
              Creative developer <br /> & designer.
            </h1>
            <h4 className='landing__content__description'>
              Hi! I'm Cam, a positive front-end <br /> developer based in sunny
              England. 👋🏼
            </h4>
            <button className='btn'>Explore.</button>
          </div>
          <div className='landing__logo'>
            <div className='landing__logo__circle1'></div>
            <div className='landing__logo__circle2'></div>
            <div className='landing__logo__rectangle'></div>
          </div>
        </div>
      </div>
    );
  }
  scroll = () => {
    const about = document.querySelector('.about');
    about.scrollIntoView({
      behavior: 'smooth',
    });
  };
  componentDidMount = () => {
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.landing__content',
    //     scrub: true,
    //     // start: 'top top',
    //     // end: 'bottom top',
    //     // start: 'top top',
    //     start: 'top top',
    //     end: 'bottom top',
    //     toggleActions: 'restart none none none',
    //   },
    // });
    // tl.fromTo(
    //   '.landing__content',
    //   { yPercent: 0 },
    //   { yPercent: 50, ease: 'power2.out' }
    // );
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // };
    if (window.scrollY < 1000) {
      setTimeout(() => this.jellyLogo(60, '800px'), 500);
    }
    // this.jellyLogo(60, '800px');
  };
  jellyLogo = (constrain, perspective) => {
    const circle1 = document.querySelector('.landing__logo__circle1');
    const circle2 = document.querySelector('.landing__logo__circle2');
    const rectangle = document.querySelector('.landing__logo__rectangle');

    if (circle1 && circle2 && rectangle) {
      const circle1Bounds = circle1.getBoundingClientRect();
      const circle2Bounds = circle2.getBoundingClientRect();
      const rectangleBounds = rectangle.getBoundingClientRect();
      document.onmousemove = (e) => {
        if (window.scrollY < 1000) {
          console.log('making jelly');
          if (circle1 && circle2 && rectangle) {
            let rotateCircle1X =
              -(e.clientY - circle1Bounds.y - circle1Bounds.height / 2) /
              constrain;
            let rotateCircle1Y =
              (e.clientX - circle1Bounds.x - circle1Bounds.width / 2) /
              constrain;
            let rotateCircle2X =
              -(e.clientY - circle2Bounds.y - circle2Bounds.height / 2) /
              (constrain * 1.5);
            let rotateCircle2Y =
              (e.clientX - circle2Bounds.x - circle2Bounds.width / 2) /
              (constrain * 1.5);
            let rotateRectangleX =
              -(e.clientY - rectangleBounds.y - rectangleBounds.height / 2) /
              (constrain * 2);
            let rotateRectangleY =
              (e.clientX - rectangleBounds.x - rectangleBounds.width / 2) /
              (constrain * 2);
            circle1.style.transform = `perspective(${perspective}) translate(-50%, -50%) rotateX(${rotateCircle1X}deg) rotateY(${rotateCircle1Y}deg)`;
            circle2.style.transform = `perspective(${perspective}) translate(calc(-50% + ${
              rotateCircle2Y * 4
            }px), calc(-50% - ${
              rotateCircle2X * 4
            }px)) rotateX(${rotateCircle2X}deg) rotateY(${rotateCircle2Y}deg)`;
            rectangle.style.transform = `perspective(${perspective}) translate(calc(-50% + ${
              rotateRectangleY * 8
            }px), calc(-50% - ${
              rotateRectangleX * 8
            }px)) rotateX(${rotateRectangleX}deg) rotateY(${rotateRectangleY}deg)`;
          }
        }
      };
    }
  };
}
export default Landing;
