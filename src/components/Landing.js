import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
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
              Creative developer <br /> for the web.
            </h1>
            <h4 className='landing__content__description'>
              Hi! I'm Cam, a front-end developer <br /> based in sunny England.
              👋🏼
            </h4>
            <div class='btn main' onClick={this.executeScroll}>
              <p class='btn__text'>Learn more.</p>
              <div class='btn__bg-1'></div>
              <div class='btn__bg-2'></div>
            </div>
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
  executeScroll = () => {
    const element = document.querySelector('.about');
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    let tl = gsap.timeline();

    new SplitText('.landing__content__title', {
      type: 'lines',
      linesClass: 'line-child__landing',
    });
    new SplitText('.landing__content__title', {
      type: 'lines',
      linesClass: 'line-parent',
    });
    new SplitText('.landing__content__description', {
      type: 'lines',
      linesClass: 'line-child__landing',
    });
    new SplitText('.landing__content__description', {
      type: 'lines',
      linesClass: 'line-parent',
    });

    tl.from(
      '.line-child__landing',
      {
        duration: 1.8,
        y: 140,
        opacity: 0,
        ease: 'power4.out',
        stagger: {
          amount: 0.2,
        },
      },
      '+=0'
    )
      .from('.main', { opacity: 0, duration: 2, ease: 'power4.out' }, '-=1')
      .from(
        '.landing__logo',
        {
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scale: 0.75,
        },
        '-=1.5'
      );
    setTimeout(() => this.jellyLogo(80, '700px'), 500);
  };
  jellyLogo = (constrain, perspective) => {
    const circle1 = document.querySelector('.landing__logo__circle1');
    const circle2 = document.querySelector('.landing__logo__circle2');
    const rectangle = document.querySelector('.landing__logo__rectangle');
    const offsetTop = document.querySelector('.about__h2').offsetTop;

    if (circle1 && circle2 && rectangle) {
      let circle1Bounds = circle1.getBoundingClientRect();
      let circle2Bounds = circle2.getBoundingClientRect();
      let rectangleBounds = rectangle.getBoundingClientRect();
      let resizeTimer;
      const isSafari = window.safari !== undefined;

      window.onresize = (e) => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          circle1Bounds = circle1.getBoundingClientRect();
          circle2Bounds = circle2.getBoundingClientRect();
          rectangleBounds = rectangle.getBoundingClientRect();
        }, 250);
      };

      document.onmousemove = (e) => {
        if (e.pageY < offsetTop && !isSafari) {
          if (circle1 && circle2 && rectangle) {
            let rotateCircle1X =
              -(e.pageY - circle1.offsetTop - circle1.offsetHeight) / constrain;
            let rotateCircle1Y =
              (e.pageX - circle1Bounds.x - circle1.offsetWidth / 2) / constrain;
            let rotateCircle2X =
              -(e.pageY - circle2.offsetTop - circle2.offsetHeight) /
              (constrain * 1.5);
            let rotateCircle2Y =
              (e.pageX - circle2Bounds.x - circle2.offsetWidth / 2) /
              (constrain * 1.5);
            let rotateRectangleX =
              -(e.pageY - rectangle.offsetTop - rectangle.offsetHeight) /
              (constrain * 2);
            let rotateRectangleY =
              (e.pageX - rectangleBounds.x - rectangle.offsetWidth / 2) /
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
