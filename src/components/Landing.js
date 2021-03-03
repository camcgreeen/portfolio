import React from 'react';
import '../main.scss';
import './Landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='landing'>
          <div className='landing__container'>
            <h4 className='landing__container__name'>
              Hi, my name is{' '}
              <span className='landing__container__name__cam'>
                Cam.
                <svg
                  width='58'
                  height='7'
                  viewBox='0 0 58 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 4V4C19.0439 0.0631404 37.7878 0.722277 55.5106 5.9169L57.5 6.5'
                    stroke='#2ED9FF'
                  />
                </svg>
              </span>
            </h4>
            <div className='landing__container__row'>
              <h1 className='landing__container__row__head'>
                I build things like <br />{' '}
                <span className='landing__container__row__head__dynamic'>
                  {'web applications.'}
                </span>
              </h1>
              <div
                className='landing__container__row__cta'
                onClick={this.scroll}
              >
                <svg
                  // className='landing__cta'
                  width='65'
                  height='117'
                  viewBox='0 0 65 117'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M38.8045 31.121C39.0652 30.8758 39.0652 30.4676 38.8045 30.2138C38.5526 29.9686 38.1334 29.9686 37.8821 30.2138L33.1576 34.8136L33.1576 19.6351C33.157 19.2812 32.8681 19 32.5047 19C32.1413 19 31.843 19.2812 31.843 19.6351L31.843 34.8136L27.1273 30.2138C26.8666 29.9686 26.4468 29.9686 26.1955 30.2138C25.9348 30.4676 25.9348 30.8763 26.1955 31.121L32.0385 36.8097C32.2904 37.0634 32.7096 37.0634 32.9609 36.8097L38.8045 31.121Z'
                    // fill='black'
                    className='arrow'
                  />
                  <path
                    d='M64 32.5C64 15.103 49.897 1 32.5 1C15.103 1 1 15.103 1 32.5V84.5C1 101.897 15.103 116 32.5 116C49.897 116 64 101.897 64 84.5V32.5Z'
                    // stroke='black'
                    stroke-width='1.5'
                    className='mouse'
                  />
                </svg>
              </div>
            </div>
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
}

export default Landing;
