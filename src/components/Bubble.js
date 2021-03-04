import React from 'react';
import './Bubble.scss';

class Bubble extends React.Component {
  render() {
    return (
      <a href='mailto:hello@camgreen.works' style={{ display: 'block' }}>
        <div className='bubble'>
          <svg
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 1.875C6.72873 1.875 0 6.64125 0 12.5C0 15.5137 1.79373 18.365 4.93623 20.3787C4.58496 21.72 2.7375 24.4962 1.545 26.0725C1.54125 26.0787 1.53627 26.0837 1.53252 26.09C1.35 26.3137 1.25004 26.59 1.25004 26.875C1.25004 27.5637 1.81131 28.1249 2.50002 28.1249C2.67129 28.1249 2.8425 28.0849 3.01125 28.0075C4.63875 27.545 9.78873 25.9075 12.7575 22.9987C13.54 23.0837 14.2775 23.125 15 23.125C23.2713 23.125 30 18.3587 30 12.5C30 6.64125 23.2713 1.875 15 1.875Z'
              fill='white'
            />
          </svg>
        </div>
      </a>
    );
  }
}

export default Bubble;
