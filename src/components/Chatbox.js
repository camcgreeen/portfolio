import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1>
            Real-time <br /> chat application.
          </h1>
        </div>
        <img
          className='fullscreen'
          src={Image1}
          alt='Chatbox chat application.'
        />
        <div className='wrapper'>
          <h2 className='project-detail__h2' style={{ marginTop: 300 }}>
            The project.
          </h2>
          <div className='project-detail__details'>
            <h4 className='project-detail__details__title'>Tools used</h4>
            <h4>React, Firebase, Git & Figma.</h4>
            <br />
            <h4 className='project-detail__details__title'>Summary</h4>
            <h4>
              Chatbox is a real time chat application that can connect you to
              anyone in the world, complete with online status messages, typing
              indicators, read receipts and activity timers.
            </h4>
            <div className='project-detail__details__buttons'>
              <button className='btn'>Launch project.</button>
              <a
                href='https://github.com/camcgreen/chatbox'
                target='_blank'
                rel='noopener noreferrer'
                style={{ width: 45, height: 45, marginLeft: 40 }}
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
          {
            //replace this bit my homie
          }
          <div className='greybox'></div>
          <div className='project-detail__goal'>
            <h2 className='project-detail__h2'>The goal.</h2>
            <div className='project-detail__goal__detail'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
        </div>
        <img
          className='fullscreen'
          src={Image1}
          alt='Chatbox chat application.'
        />
        <div className='wrapper'>
          <div className='project-detail__build'>
            <h2 className='project-detail__h2'>
              How I <br /> built it.
            </h2>
            <div className='project-detail__build__detail'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
          {
            // replace this bit my homie
          }
          <div className='greybox'></div>
          <div className='project-detail__lessons'>
            <h2 className='project-detail__h2'>Lessons learned.</h2>
            <div className='project-detail__lessons__detail'>
              <p>
                Chatbox is a real-time chat application that can connect you to
                anyone in the world, complete with online status and typing
                indicators, read reciepts and activity timers.
              </p>
            </div>
          </div>
          <div className='project-detail__buttons'>
            <Link to='/'>
              <button className='btn'>Go home.</button>
            </Link>
            <Link to='/projects/jobstasy'>
              <button className='btn' style={{ marginLeft: 20 }}>
                Next project.
              </button>
            </Link>
          </div>
        </div>
        <Footer />
        <Bubble />
      </div>
    );
  }
  componentDidMount = () => {
    console.log(this.props);
  };
}

export default Chatbox;
