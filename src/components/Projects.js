import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import '../main.scss';
import './Projects.scss';

class Tools extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div className='wrapper'>
          {/* <div className='projects__screen'> */}
          <h2 className='projects__h2'>
            Things I've <br /> worked on.
          </h2>
          <div className='projects__screen__hero projects-animate'>
            <Link to='/projects/chatbox'>
              <div className='projects__screen__hero__box'></div>
            </Link>
          </div>
          <div className='projects__screen__container'>
            <div className='projects__screen__container__details'>
              <h4 className='projects-animate'>Chatbox</h4>
              <h3 className='projects-animate'>
                Real-time <br /> <span>chat application.</span>
              </h3>
            </div>
            <div className='projects__screen__container__links projects-animate'>
              <Link to='/projects/chatbox'>
                <button className='btn'>View project.</button>
              </Link>
              <a
                href='https://github.com/camcgreen/chatbox'
                target='_blank'
                rel='noopener noreferrer'
                style={{ height: 45 }}
              >
                <svg
                  className='projects__screen__container__links__github'
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
          {/* </div> */}
          <div className='projects__screen' style={{ marginTop: 100 }}>
            <div className='projects__screen__hero projects-animate'>
              <Link to='/projects/jobstasy'>
                <div className='projects__screen__hero__box'></div>
              </Link>
            </div>
            {/* <div
              className='projects__screen__container'
              style={{ float: 'right' }}
            >
              <div className='projects__screen__container__links'></div>
            </div> */}
            <div
              className='projects__screen__container'
              // style={{ float: 'right' }}
            >
              <div
                className='projects__screen__container__details'
                // style={{ marginRight: 80 }}
              >
                <h4 className='projects-animate'>Jobstasy</h4>
                <h3 className='projects-animate'>
                  Remote job <br /> <span>search platform.</span>
                </h3>
              </div>
              <div className='projects__screen__container__links projects-animate'>
                <Link to='/projects/jobstasy'>
                  <button className='btn'>View project.</button>
                </Link>
                <a
                  href='https://github.com/camcgreen/jobstasy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    className='projects__screen__container__links__github'
                    width='48'
                    height='48'
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
      let tlProjects = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects',
          start: 'top center',
        },
      });
      new SplitText('.projects__h2', {
        type: 'lines',
        linesClass: 'line-child__projects',
      });
      new SplitText('.projects__h2', {
        type: 'lines',
        linesClass: 'line-parent',
      });
      tlProjects
        .from(
          '.line-child__projects',
          {
            duration: 1.8,
            y: 140,
            opacity: 0,
            ease: 'power4.out',
          },
          '+=0'
        )
        .from(
          '.projects-animate',
          {
            opacity: 0,
            duration: 1,
            stagger: {
              amount: 1.8,
            },
          },
          '-=1'
        );
    }, 100);
  };
}

export default Tools;
