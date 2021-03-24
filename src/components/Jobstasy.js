import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Nav from './Nav';
import Footer from './Footer';
import Bubble from './Bubble';
import './ProjectDetail.scss';
import '../main.scss';

class Jobstasy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileDevice: false,
    };
  }
  render() {
    return (
      <div className='project-detail'>
        <Nav />
        <header>
          <div className='wrapper'>
            <h4 className='project-detail__breadcrumb'>Jobstasy</h4>
            <h1 className='project-detail__main-title'>
              Remote job <br /> search platform.
            </h1>
          </div>
        </header>
        <main>
          <div className='fullscreen'>
            <div className='fullscreen__image  fullscreen__image--1 fullscreen__image--jobstasy--1'></div>
          </div>
          <div className='wrapper'>
            <h2 className='project-detail__h2 the-project'>The project.</h2>
            <section className='project-detail__details'>
              <h4 className='project-detail__details__title animate-detail'>
                Tools used
              </h4>
              <h4 className='project-detail__details__info animate-detail'>
                React, React Router, Firebase, GitHub Jobs API, Git & Figma
              </h4>
              <h4
                className='project-detail__details__title animate-detail'
                style={{ marginTop: 50 }}
              >
                Summary
              </h4>
              <h4 className='project-detail__details__info animate-detail'>
                Jobstasy is a remote job search platform, created with React,
                that provides an interface to filter and dig through the GitHub
                Jobs API. The app also allows you to like jobs to view later.
              </h4>
              <div className='project-detail__details__buttons animate-detail'>
                <a
                  href='https://jobstasy.web.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div class='btn'>
                    <p class='btn__text'>Launch project.</p>
                    <div class='btn__bg-2'></div>
                  </div>
                </a>
                <a
                  href='https://github.com/camcgreen/jobstasy'
                  target='_blank'
                  rel='noopener noreferrer'
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
            </section>
            <div className='small-screen'>
              <div className='small-screen__image small-screen__image--1 small-screen__image--jobstasy--1 '></div>
            </div>
            <section className='project-detail__goal'>
              <h2 className='project-detail__h2 the-goal'>The goal.</h2>
              <div className='project-detail__goal__detail animate-goal'>
                <p className='break'>
                  I was keen to create an app that leveraged an API and had user
                  authentication. I settled on using Firebase for the database
                  as my needs were simple and it made authentication
                  straightforward.
                </p>
                <p className='break'>
                  The project needed to list the jobs from the GitHub Jobs API,
                  using a reusable card component system, and to be easily
                  navigated through using several different filters.
                </p>
              </div>
            </section>
          </div>
          <div className='fullscreen'>
            <div className='fullscreen__image fullscreen__image--2 fullscreen__image--jobstasy--2 code'></div>
          </div>
          <div className='wrapper'>
            <section className='project-detail__build'>
              <h2 className='project-detail__h2 how-built'>How it works.</h2>
              <div className='project-detail__build__detail animate-build'>
                <p className='break'>
                  The{' '}
                  <a
                    href='https://github.com/camcgreen/jobstasy/blob/main/src/components/Jobs.js'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Jobs.js
                  </a>{' '}
                  component holds the central jobs state that is pulled from
                  GitHub Jobs API. This is then passed down to children
                  components on a need-to-know basis.
                </p>
                <p className='break'>
                  This state is then mapped through and rendered in the{' '}
                  <a
                    href='https://github.com/camcgreen/jobstasy/blob/main/src/components/JobList.js'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    JobList.js
                  </a>{' '}
                  component. Clicking on a job passes that specific job array
                  data from the overall jobs object state as props to the{' '}
                  <a
                    href='https://github.com/camcgreen/jobstasy/blob/main/src/components/JobDetail.js'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    JobDetail.js
                  </a>{' '}
                  component. This component then renders all the relevant detail
                  (like the job title, company name, job description, etc).
                </p>
                <p className='break'>
                  Liking a job adds it to the LikedJobs arrays of the logged in
                  user in the Firestore, which is then fed into the jobs state
                  to render the liked jobs list instead of the searched jobs on
                  the{' '}
                  <a
                    href='https://github.com/camcgreen/jobstasy/blob/main/src/components/Likes.js'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Likes.js
                  </a>{' '}
                  component.
                </p>
              </div>
            </section>
            <div className='small-screen'>
              <div className='small-screen__image small-screen__image--2 small-screen__image--jobstasy--2'></div>
            </div>
            <section className='project-detail__lessons'>
              <h2 className='project-detail__h2 lessons-learned'>
                Lessons learned.
              </h2>
              <div className='project-detail__lessons__detail animate-lessons'>
                <p className='break'>
                  In the future, for projects like this, I would set up a few
                  endpoints on a simple back-end that I could make requests to
                  in order to fetch the relevant data from the API, rather than
                  trying to do it all from the front-end.
                </p>
                <p className='break'>
                  This would make the code more manageable as it would be
                  abstracted, and it would sidestep any pesky CORS restrictions.
                  I ended up having to use a third-party proxy to get around
                  CORS errors, which introduces an unnecessary dependency and
                  makes the API responses slower.
                </p>
                <p className='break'>
                  Overall, this was a fun project that I learned a lot from.
                </p>
              </div>
            </section>
            <div className='project-detail__buttons'>
              <Link to='/'>
                <div class='btn btn--project'>
                  <p class='btn__text'>Go home.</p>
                  <div class='btn__bg-2'></div>
                </div>
              </Link>
              <Link to='/projects/chatbox'>
                <div class='btn btn--project'>
                  <p class='btn__text'>Next project.</p>
                  <div class='btn__bg-2'></div>
                </div>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <Bubble />
      </div>
    );
  }
  componentDidMount = async () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    let isMobile = false;
    if (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    ) {
      isMobile = true;
    }

    await this.setState({ mobileDevice: isMobile });

    setTimeout(() => {
      let initChatbox = gsap.timeline({
        default: { opacity: 0, ease: 'back' },
      });
      initChatbox.from(
        '.project-detail',
        { ease: 'linear', autoAlpha: 0 },
        '+=0'
      );
      let tlChatboxHeader = gsap.timeline();
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
          ease: 'power4.out',
          stagger: {
            amount: 0.2,
          },
        },
        '+=0'
      );

      let tlChatboxProject = gsap.timeline({
        scrollTrigger: {
          trigger: '.the-project',
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

      if (!this.state.mobileDevice) {
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

        gsap.utils.toArray('.fullscreen').forEach((section, i) => {
          section.bg = section.querySelector('.fullscreen__image');
          if (i) {
            section.bg.style.backgroundPosition = `50% ${
              -window.innerHeight / 2
            }px`;
            gsap.to(section.bg, {
              backgroundPosition: `50% ${window.innerHeight / 2}px`,
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
          section.bg.style.height = '150%';
          gsap.to(section.bg, {
            backgroundPosition: `50% ${window.innerHeight / 12}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: true,
            },
          });
        });
      }
    }, 0);
  };
}

export default Jobstasy;
