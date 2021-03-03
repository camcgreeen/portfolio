import React from 'react';
import { Link } from 'react-router-dom';
import '../main.scss';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <nav className='nav'>
        <Link to='/'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11.3152 0.00861469C11.2475 0.0163113 11.0181 0.0397845 10.8054 0.06075C8.85071 0.253583 6.80368 1.02356 5.12718 2.19651C4.30291 2.77323 3.25753 3.74554 2.6523 4.49845C1.23426 6.26247 0.412099 8.1931 0.0791073 10.5408C-0.0403282 11.3831 -0.0226783 12.7831 0.119576 13.7435C0.783661 18.2281 3.93111 21.9611 8.25635 23.3943C9.05825 23.66 9.80335 23.8273 10.7526 23.9549C11.2021 24.0152 13.0128 24.015 13.4599 23.9545C14.8456 23.7671 15.8694 23.4947 16.9758 23.0192C19.9784 21.7287 22.3935 19.1896 23.5011 16.1587C23.6674 15.7036 23.8548 15.0868 23.9349 14.7309L24 14.4414H20.8574H17.7149L17.5562 14.7542C16.9671 15.9162 15.9891 16.873 14.8135 17.4376C13.0885 18.2661 11.0893 18.2572 9.40141 17.4134C6.374 15.9001 5.15018 12.2842 6.65907 9.31092C7.2862 8.07515 8.23609 7.15134 9.49489 6.55299C11.2114 5.73712 13.1159 5.75673 14.8487 6.60816C15.4925 6.92452 15.9142 7.22546 16.4309 7.73726C16.9077 8.20954 17.2338 8.64431 17.5216 9.19129L17.7186 9.56568H20.8655C23.846 9.56568 24.0114 9.56247 23.9941 9.50473C23.984 9.47119 23.9507 9.33408 23.9201 9.2C23.273 6.36873 21.3762 3.66868 18.8744 2.01764C17.2427 0.94081 15.6418 0.35747 13.4951 0.0574414C13.2295 0.0203514 11.5442 -0.0174005 11.3152 0.00861469Z'
              fill='black'
            />
          </svg>
        </Link>
        <div className='nav__menu' onClick={this.handleClick}>
          <div
            className={
              this.state.menuOpen
                ? 'nav__menu__hamburger open'
                : 'nav__menu__hamburger'
            }
          ></div>
        </div>
      </nav>
    );
  }
  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
}

export default Nav;
