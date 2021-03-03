import React from 'react';
import '../main.scss';
import './About.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='wrapper'>
          <div className='about__me'>
            <p>
              Hi! I’m Cam, a{' '}
              <span className='about__me__special'>front-end developer</span>{' '}
              based in the south of England. 👋
            </p>
            <br />
            <p>
              I love to make things on the internet, like applications and
              websites. I build products that provide{' '}
              <span className='about__me__special'>
                fast, responsive and dynamic
              </span>{' '}
              experiences. 😀
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
