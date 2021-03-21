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

class Chatbox extends React.Component {
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
        <div className='wrapper'>
          <h4 className='project-detail__breadcrumb'>Chatbox</h4>
          <h1 className='project-detail__main-title'>
            Real-time <br /> chat application.
          </h1>
        </div>
        <div className='fullscreen'>
          <div className='fullscreen__image  fullscreen__image--1 fullscreen__image--chatbox--1'></div>
        </div>
        <div className='wrapper'>
          <h2 className='project-detail__h2 the-project'>The project.</h2>
          <div className='project-detail__details'>
            <h4 className='project-detail__details__title animate-detail'>
              Tools used
            </h4>
            <h4 className='animate-detail'>
              React, React Router, Firebase, Git & Figma.
            </h4>
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
            <div className='small-screen__image small-screen__image--1 small-screen__image--chatbox--1 '></div>
          </div>
          <div className='project-detail__goal'>
            <h2 className='project-detail__h2 the-goal'>The goal.</h2>
            <div className='project-detail__goal__detail animate-goal'>
              <p>
                I wanted to continue to develop my React skills, while learning
                Firebase to handle the database, in order to build an instant
                messaging app.
                <br />
                <br />I knew that Firebase would be perfect for developing this
                type of application because of its live database updates and
                relatively small learning curve.
              </p>
            </div>
          </div>
        </div>
        <div className='fullscreen'>
          <div className='fullscreen__image fullscreen__image--2 fullscreen__image--chatbox--2 code'></div>
        </div>
        <div className='wrapper'>
          <div className='project-detail__build'>
            <h2 className='project-detail__h2 how-built'>How it works.</h2>
            <div className='project-detail__build__detail animate-build'>
              <p>
                The application leverages the power of the Firebase onSnapshot
                method, in order to get real-time updates when the database is
                written to. This means that when a message is sent, it is added
                to the messages array within the chat object for those two
                users.
                <br />
                <br />
                The onSnapshot method then allows us to detect that there has
                been a change to the messages array, which we use to update the
                local state in React of the messages array. This state change
                cause a re-render of the component which then displays the
                updated chat with almost no delay.
                <br />
                <br />
                Authentication is handled by Firebase through the means of some
                convenient methods. Firebase provides some server-side
                validation so only some application-specific client-side
                validation is needed.
              </p>
            </div>
          </div>
          <div className='small-screen'>
            <div className='small-screen__image small-screen__image--2 small-screen__image--chatbox--2'></div>
          </div>
          <div className='project-detail__lessons'>
            <h2 className='project-detail__h2 lessons-learned'>
              Lessons learned.
            </h2>
            <div className='project-detail__lessons__detail animate-lessons'>
              <p>
                For future projects of this size, I would set up for test-driven
                development from the start. The project grew in complexity,
                beyond the original idea, and manual testing became unreliable.
                <br />
                <br />I would also consider using the React Context API to
                manage the chat state, as there were several different
                components that needed to read and write to this state, and it
                got quite cumbersome managing state with lots of props and
                callbacks.
                <br />
                <br />
                This was a challenging and rewarding project for me, as I wanted
                to add various features that would make it feel like a real chat
                application.
              </p>
            </div>
          </div>
          <div className='project-detail__buttons'>
            <Link to='/'>
              <div class='btn btn--project'>
                <p class='btn__text'>Go home.</p>
                <div class='btn__bg-2'></div>
              </div>
            </Link>
            <Link to='/projects/jobstasy'>
              <div class='btn btn--project'>
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
  componentDidMount = async () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    // if (
    //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //     navigator.userAgent
    //   )
    // ) {
    //   await this.setState({ mobileDevice: true });
    //   alert('mobile device');
    // } else {
    //   await this.setState({ mobileDevice: false });
    //   alert('not mobile device');
    // }

    // let isMobile = false; //initiate as false
    // // device detection
    // if (
    //   /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    //     navigator.userAgent
    //   ) ||
    //   /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    //     navigator.userAgent.substr(0, 4)
    //   )
    // ) {
    //   isMobile = true;
    // }

    let isMobile = false;
    if (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    ) {
      isMobile = true;
    }

    await this.setState({ mobileDevice: isMobile });

    // alert(this.state.mobileDevice);
    // alert(this.state.mobileDevice);

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

export default Chatbox;
