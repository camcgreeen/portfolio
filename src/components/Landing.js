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
              Creative developer <br /> & designer.
            </h1>
            <h4 className='landing__content__description'>
              Hi! I'm Cam, a diligent front-end developer <br /> based in sunny
              England. 👋🏼
            </h4>
            <div
              class='btn main'
              onClick={() => console.log('aaa nice button you got there')}
            >
              <p class='btn__text'>Explore.</p>
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
  scroll = () => {
    const about = document.querySelector('.about');
    about.scrollIntoView({
      behavior: 'smooth',
    });
  };
  componentDidMount = () => {
    let tl = gsap.timeline({});

    new SplitText('.landing__content__title', {
      type: 'lines',
      linesClass: 'line-child',
    });
    new SplitText('.landing__content__title', {
      type: 'lines',
      linesClass: 'line-parent',
    });
    new SplitText('.landing__content__description', {
      type: 'lines',
      linesClass: 'line-child',
    });
    new SplitText('.landing__content__description', {
      type: 'lines',
      linesClass: 'line-parent',
    });

    tl.from(
      '.line-child',
      {
        duration: 1.8,
        y: 140,
        opacity: 0,
        ease: 'power4.out',
        // delay: 1,
        // skewY: 2,
        // skewX: 1,
        stagger: {
          amount: 0.2,
        },
      },
      '+=0'
    )
      .from('.main', { opacity: 0, duration: 2, ease: 'power4.out' }, '-=1')
      .from(
        '.landing__logo',
        { opacity: 0, duration: 2, ease: 'power4.out' },
        '-=1.5'
      );

    if (window.scrollY < 1000) {
      setTimeout(() => this.jellyLogo(60, '7000px'), 500);
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
          // console.log('making jelly');
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
