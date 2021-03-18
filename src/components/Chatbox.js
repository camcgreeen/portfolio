import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Nav from './Nav';
import Footer from './Footer';
import Bubble from './Bubble';
import Image1 from '../images/chatbox-hero.jpg';
import './ProjectDetail.scss';
import '../main.scss';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='project-detail'>
        <Nav />
        <div className='wrapper'>
          <h4 className='project-detail__breadcrumb'>Chatbox</h4>
          <h1 className='project-detail__main-title'>
            Real-time <br /> chat application.
          </h1>
        </div>
        {/* <img
          className='fullscreen'
          src={Image1}
          alt='Chatbox chat application.'
        /> */}
        <div className='fullscreen'>
          <div className='fullscreen__image fullscreen__image--1'></div>
        </div>
        <div className='wrapper'>
          <h2 className='project-detail__h2 the-project'>The project.</h2>
          <div className='project-detail__details'>
            <h4 className='project-detail__details__title animate-detail'>
              Tools used
            </h4>
            <h4 className='animate-detail'>React, Firebase, Git & Figma.</h4>
            <h4
              className='project-detail__details__title animate-detail'
              style={{ marginTop: 50 }}
            >
              Summary
            </h4>
            <h4 className='animate-detail'>
              Chatbox is a real time chat application that can connect you to
              anyone in the world, complete with online status messages, typing
              indicators, read receipts and activity timers.
            </h4>
            <div className='project-detail__details__buttons animate-detail'>
              {/* <button className='btn'>Launch project.</button> */}
              <a
                href='https://chatbox-7b75a.web.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div class='btn'>
                  <p class='btn__text'>Launch project.</p>
                  <div class='btn__bg-2'></div>
                </div>
              </a>
              <a
                href='https://github.com/camcgreen/chatbox'
                target='_blank'
                rel='noopener noreferrer'
                // style={{ width: 45, height: 45, marginLeft: 50 }}
              >
                <svg
                  className='project-detail__details__buttons__github'
                  width='45'
                  height='45'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24 0C10.748 0 0 10.746 0 24C0 34.604 6.876 43.6 16.414 46.774C17.612 46.996 18 46.252 18 45.62V41.152C11.324 42.604 9.934 38.32 9.934 38.32C8.842 35.546 7.268 34.808 7.268 34.808C5.09 33.318 7.434 33.35 7.434 33.35C9.844 33.518 11.112 35.824 11.112 35.824C13.252 39.492 16.726 38.432 18.096 37.818C18.31 36.268 18.932 35.208 19.62 34.61C14.29 34 8.686 31.942 8.686 22.748C8.686 20.126 9.624 17.986 11.158 16.306C10.91 15.7 10.088 13.258 11.392 9.954C11.392 9.954 13.408 9.31 17.994 12.414C19.908 11.882 21.96 11.616 24 11.606C26.04 11.616 28.094 11.882 30.012 12.414C34.594 9.31 36.606 9.954 36.606 9.954C37.912 13.26 37.09 15.702 36.842 16.306C38.382 17.986 39.312 20.128 39.312 22.748C39.312 31.966 33.698 33.996 28.354 34.59C29.214 35.334 30 36.794 30 39.034V45.62C30 46.258 30.384 47.008 31.602 46.772C41.132 43.594 48 34.6 48 24C48 10.746 37.254 0 24 0Z'
                    fill='black'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='small-screen'>
            <div className='small-screen__image small-screen__image--1'></div>
          </div>
          <div className='project-detail__goal'>
            <h2 className='project-detail__h2 the-goal'>The goal.</h2>
            <div className='project-detail__goal__detail animate-goal'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
        </div>
        <div className='fullscreen'>
          <div className='fullscreen__image fullscreen__image--2'></div>
        </div>
        <div className='wrapper'>
          <div className='project-detail__build'>
            <h2 className='project-detail__h2 how-built'>How I built it.</h2>
            <div className='project-detail__build__detail animate-build'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
          <div className='small-screen'>
            <div className='small-screen__image small-screen__image--2'></div>
          </div>
          <div className='project-detail__lessons'>
            <h2 className='project-detail__h2 lessons-learned'>
              Lessons learned.
            </h2>
            <div className='project-detail__lessons__detail animate-lessons'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
          <div className='project-detail__buttons'>
            {/* <Link to='/'>
              <button className='btn'>Go home.</button>
            </Link> */}
            <Link to='/'>
              {/* <button className='btn'>View project.</button> */}
              <div class='btn'>
                <p class='btn__text'>Go home.</p>
                <div class='btn__bg-2'></div>
              </div>
            </Link>

            {/* <Link to='/projects/jobstasy'>
              <button className='btn' style={{ marginLeft: 20 }}>
                Next project.
              </button>
            </Link> */}
            <Link to='/projects/jobstasy'>
              {/* <button className='btn'>View project.</button> */}
              <div class='btn'>
                <p class='btn__text'>Next project.</p>
                <div class='btn__bg-2'></div>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
        <Bubble />
      </div>
    );
  }
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    setTimeout(() => {
      console.log('gsap');
      // gsap.from(
      //   '#routing-container',
      //   {
      //     opacity: 0,
      //     ease: 'power4.out',
      //     duration: 2.2,
      //   },
      //   '+=0'
      // );
      let initChatbox = gsap.timeline({
        default: { opacity: 0, ease: 'back' },
      });
      initChatbox.from(
        '.project-detail',
        { ease: 'linear', autoAlpha: 0 },
        '+=0'
      );
      let tlChatboxHeader = gsap.timeline({
        // scrollTrigger: {
        //   trigger: 'project-detail',
        // },
      });
      new SplitText('.project-detail__breadcrumb', {
        type: 'lines',
        linesClass: 'line-child__chatbox__header',
      });
      new SplitText('.project-detail__breadcrumb', {
        type: 'lines',
        linesClass: 'line-parent',
      });
      new SplitText('.project-detail__main-title', {
        type: 'lines',
        linesClass: 'line-child__chatbox__header',
      });
      new SplitText('.project-detail__main-title', {
        type: 'lines',
        linesClass: 'line-parent',
      });

      tlChatboxHeader.from(
        '.line-child__chatbox__header',
        {
          duration: 1.8,
          y: 140,
          opacity: 0,
          // autoAlpha: 0,
          ease: 'power4.out',
          // delay: 1,
          // skewY: 2,
          // skewX: 1,
          stagger: {
            amount: 0.2,
          },
        },
        '+=0'
      );

      let tlChatboxProject = gsap.timeline({
        scrollTrigger: {
          trigger: '.the-project',
          // start: 'top center',
        },
      });
      new SplitText('.the-project', {
        type: 'lines',
        linesClass: 'line-child__chatbox__details',
      });
      new SplitText('.the-project', {
        type: 'lines',
        linesClass: 'line-parent',
      });

      tlChatboxProject
        .from(
          '.line-child__chatbox__details',
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
        .from(
          '.animate-detail',
          { opacity: 0, duration: 1, stagger: 0.1 },
          '-=1.4'
        );

      let tlChatboxGoal = gsap.timeline({
        scrollTrigger: {
          trigger: '.the-goal',
          // start: 'top center',
        },
      });
      new SplitText('.the-goal', {
        type: 'lines',
        linesClass: 'line-child__chatbox__goal',
      });
      new SplitText('.the-goal', {
        type: 'lines',
        linesClass: 'line-parent',
      });

      tlChatboxGoal
        .from(
          '.line-child__chatbox__goal',
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
        .from(
          '.animate-goal',
          { opacity: 0, duration: 1, stagger: 0.1 },
          '-=1.4'
        );

      let tlChatboxBuild = gsap.timeline({
        scrollTrigger: {
          trigger: '.how-built',
          // start: 'top center',
        },
      });
      new SplitText('.how-built', {
        type: 'lines',
        linesClass: 'line-child__chatbox__build',
      });
      new SplitText('.how-built', {
        type: 'lines',
        linesClass: 'line-parent',
      });

      tlChatboxBuild
        .from(
          '.line-child__chatbox__build',
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
        .from(
          '.animate-build',
          { opacity: 0, duration: 1, stagger: 0.1 },
          '-=1.4'
        );

      let tlChatboxLessons = gsap.timeline({
        scrollTrigger: {
          trigger: '.lessons-learned',
          // start: 'top center',
        },
      });
      new SplitText('.lessons-learned', {
        type: 'lines',
        linesClass: 'line-child__chatbox__lessons',
      });
      new SplitText('.lessons-learned', {
        type: 'lines',
        linesClass: 'line-parent',
      });

      tlChatboxLessons
        .from(
          '.line-child__chatbox__lessons',
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
        .from(
          '.animate-lessons',
          { opacity: 0, duration: 1, stagger: 0.1 },
          '-=1.4'
        );
      // gsap.utils.toArray('.parallax-content').forEach((section, i) => {
      //   const heightDiff =
      //     section.offsetHeight - section.parentElement.offsetHeight;
      //   gsap.fromTo(
      //     section,
      //     {
      //       y: -heightDiff,
      //     },
      //     {
      //       scrollTrigger: {
      //         trigger: section.parentElement,0
      //         scrub: true,
      //       },
      //       y: 0,
      //       ease: 'none',
      //     }
      //   );

      // gsap.from('.fullscreen__image', {
      //   yPercent: -(
      //     document.querySelector('.fullscreen__image').offsetHeight -
      //     document.querySelector('.fullscreen').offsetHeight
      //   ),
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.fullscreen',
      //     // start: "top bottom", // the default values
      //     // end: "bottom top",
      //     scrub: true,
      //   },
      // });

      // const fImage1 = document.querySelector('.fullscreen__image--1');
      // fImage1.style.backgroundPosition = `50% ${-window.innerHeight / 2}px`;
      // gsap.to(fImage1, {
      //   backgroundPosition: `50% ${window.innerHeight / 2}px`,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.fullscreen',
      //     scrub: true,
      //   },
      // });

      // const fImage2 = document.querySelector('.fullscreen__image--2');
      // fImage2.style.backgroundPosition = `50% ${-window.innerHeight / 2}px`;
      // gsap.to(fImage2, {
      //   backgroundPosition: `50% ${window.innerHeight / 2}px`,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.fullscreen',
      //     scrub: true,
      //   },
      // });

      gsap.from(
        '.fullscreen__image',
        {
          opacity: 0,
          scale: 1.05,
          ease: 'power4.out',
          duration: 1.8,
        },
        '+=0'
      );

      console.log(document.querySelector('.fullscreen__image--1').offsetHeight);

      gsap.utils.toArray('.fullscreen').forEach((section, i) => {
        section.bg = section.querySelector('.fullscreen__image');
        console.log('section = ', section);

        if (i) {
          section.bg.style.backgroundPosition = `0% ${
            -window.innerHeight / 2
          }px`;
          gsap.to(section.bg, {
            backgroundPosition: `0% ${window.innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: true,
            },
          });
        } else {
          section.bg.style.backgroundPosition = `0% ${
            -window.innerHeight / 2
          }px`;
          gsap.to(section.bg, {
            backgroundPosition: `0% ${window.innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start:
                'top ' +
                document.querySelector('.fullscreen__image--1').offsetHeight,
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });

      gsap.utils.toArray('.small-screen').forEach((section, i) => {
        section.bg = section.querySelector('.small-screen__image');

        section.bg.style.backgroundPosition = `50% ${
          -window.innerHeight / 12 - 150
        }px`;
        gsap.to(section.bg, {
          backgroundPosition: `50% ${window.innerHeight / 12}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        });
      });

      // gsap.to('.small-screen__image', {
      //   backgroundPosition: '50% 0%',
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.small-screen__image--1',
      //     scrub: true,
      //   },
      // });
    }, 0);
  };
}

export default Chatbox;
