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
            <div class='btn main' onClick={this.executeScroll}>
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
  // scroll = () => {
  //   if (this.props.aboutRef) {
  //     // this.props.aboutRef.scrollIntoView({
  //     //   behavior: 'smooth',
  //     //   block: 'start',
  //     //   inline: 'nearest',
  //     // });
  //     const container = document.getElementById('routing-container');
  //     console.log(container);
  //     window.scrollTo({
  //       top: 1000,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  // executeScroll = () => this.props.aboutRef.current.scrollIntoView();
  executeScroll = () => {
    // const about = document.querySelector('.about');
    // about.scrollIntoView({
    //   behavior: 'smooth',
    // });

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
    // console.log('about ref = ', this.props.aboutRef);

    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    let tl = gsap.timeline({
      // scrollTrigger: {
      // trigger: '.landing',
      // start: 'center top',
      // end: 'bottom center',
      // toggleActions: 'play pause resume reset',
      // },
    });

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
        {
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scale: 0.75,
        },
        '-=1.5'
      );
    // fix
    // if (window.scrollY < 1000) {
    //   setTimeout(() => this.jellyLogo(60, '700px'), 500);
    // }
    // this.jellyLogo(60, '800px');
    setTimeout(() => this.jellyLogo(80, '700px'), 500);
  };
  jellyLogo = (constrain, perspective) => {
    const circle1 = document.querySelector('.landing__logo__circle1');
    const circle2 = document.querySelector('.landing__logo__circle2');
    const rectangle = document.querySelector('.landing__logo__rectangle');
    // const landingHeight = document.querySelector('.landing').offsetHeight;
    const offsetTop = document.querySelector('.about__h2').offsetTop;
    // console.log(offsetTop);
    // console.log('landingHeight = ', landingHeight);

    if (circle1 && circle2 && rectangle) {
      // const circle1Bounds = circle1.getBoundingClientRect();
      // const circle2Bounds = circle2.getBoundingClientRect();
      // const rectangleBounds = rectangle.getBoundingClientRect();
      // document.onresize = (e) => {
      //   // (landingHeight = document.querySelector('.landing').offsetHeight);

      // }
      let circle1Bounds = circle1.getBoundingClientRect();
      let circle2Bounds = circle2.getBoundingClientRect();
      let rectangleBounds = rectangle.getBoundingClientRect();

      window.onresize = (e) => {
        //DEBOUNCE THIS
        circle1Bounds = circle1.getBoundingClientRect();
        circle2Bounds = circle2.getBoundingClientRect();
        rectangleBounds = rectangle.getBoundingClientRect();

        // console.log('resize');

        // console.log('circle1Bounds = ', circle1Bounds);
        // console.log('circle2Bounds = ', circle2Bounds);
        // console.log('rectangle = ', rectangle);
      };

      document.onmousemove = (e) => {
        // console.log('circle1Bounds = ', circle1Bounds);
        // console.log('circle2Bounds = ', circle2Bounds);
        // console.log('rectangle = ', rectangle);
        // if (window.scrollY < 1000) {
        if (e.pageY < offsetTop) {
          // console.log('making jelly');
          if (circle1 && circle2 && rectangle) {
            // let rotateCircle1X =
            //   -(e.clientY - circle1Bounds.y - circle1Bounds.height / 2) /
            //   constrain;
            // let rotateCircle1Y =
            //   (e.clientX - circle1Bounds.x - circle1Bounds.width / 2) /
            //   constrain;
            // let rotateCircle2X =
            //   -(e.clientY - circle2Bounds.y - circle2Bounds.height / 2) /
            //   (constrain * 1.5);
            // let rotateCircle2Y =
            //   (e.clientX - circle2Bounds.x - circle2Bounds.width / 2) /
            //   (constrain * 1.5);
            // let rotateRectangleX =
            //   -(e.clientY - rectangleBounds.y - rectangleBounds.height / 2) /
            //   (constrain * 2);
            // let rotateRectangleY =
            //   (e.clientX - rectangleBounds.x - rectangleBounds.width / 2) /
            //   (constrain * 2);

            // let rotateCircle1X =
            // -(
            //   e.pageY -
            //   (circle1Bounds.top + window.scrollY) -
            //   circle1Bounds.height / 2
            // ) / constrain;
            // let rotateCircle1Y =
            //   (e.pageX -
            //     (circle1Bounds.left + window.scrollX) -
            //     circle1Bounds.width / 2) /
            //   constrain;
            // let rotateCircle1Y = 0;

            // let rotateCircle1X =
            //   -(e.pageY - (circle1Bounds.y + window.scrollY) - circle1Bounds.height / 2) /
            //   constrain;
            // let rotateCircle1Y =
            //   (e.pageX - (circle1Bounds.x + window.scrollX) - circle1Bounds.width / 2) / constrain;
            // let rotateCircle2X =
            //   -(e.pageY - circle2Bounds.y - circle2Bounds.height / 2) /
            //   (constrain * 1.5);
            // let rotateCircle2Y =
            //   (e.pageX - circle2Bounds.x - circle2Bounds.width / 2) /
            //   (constrain * 1.5);
            // let rotateRectangleX =
            //   -(e.pageY - rectangleBounds.y - rectangleBounds.height / 2) /
            //   (constrain * 2);
            // let rotateRectangleY =
            //   (e.pageX - rectangleBounds.x - rectangleBounds.width / 2) /
            //   (constrain * 2);

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
