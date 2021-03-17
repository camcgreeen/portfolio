import React from 'react';
import Card from './Card';
import IconReact from '../images/icon-react.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import '../main.scss';
import './Tools.scss';

class Tools extends React.Component {
  render() {
    const technologies = [
      {
        name: 'React',
        icon: IconReact,
        description:
          'The one view library to rule them all. I picked up React for the first time a couple of years ago and haven’t looked back since.',
      },
      {
        name: 'React',
        icon: IconReact,
        description:
          'The one view library to rule them all. I picked up React for the first time a couple of years ago and haven’t looked back since.',
      },
      {
        name: 'React',
        icon: IconReact,
        description:
          'The one view library to rule them all. I picked up React for the first time a couple of years ago and haven’t looked back since.',
      },
      {
        name: 'React',
        icon: IconReact,
        description:
          'The one view library to rule them all. I picked up React for the first time a couple of years ago and haven’t looked back since.',
      },
    ];
    return (
      <div className='tools'>
        <div className='wrapper'>
          <h2 className='tools__h2'>
            Tools of <br /> the trade.
          </h2>
          {/* {}
          <ul className='tools__grid'>
            {technologies.map((technology) => {
              return (
                <li>
                  <Card
                    name={technology.name}
                    icon={technology.icon}
                    description={technology.description}
                  />
                </li>
              );
            })}
          </ul> */}
          <p className='tools__p'>
            I use react and other things. I use react and other things. I use
            react and other things. I use react and other things. I use react
            and other things. I use react and other things. I use react and
            other things. I use react and other things.
          </p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    setTimeout(() => {
      let tlTools = gsap.timeline({
        scrollTrigger: {
          trigger: '.tools',
          start: 'top bottom',
        },
      });
      new SplitText('.tools__h2', {
        type: 'lines',
        linesClass: 'line-child__tools',
      });
      new SplitText('.tools__h2', {
        type: 'lines',
        linesClass: 'line-parent',
      });
      tlTools
        .from(
          '.line-child__tools',
          {
            duration: 1.8,
            y: 140,
            opacity: 0,
            ease: 'power4.out',
          },
          '+=0'
        )
        .from(
          '.tools__grid',
          {
            opacity: 0,
            duration: 1.8,
          },
          '-=1'
        );
      // .from(
      //   '.about__content__img',
      //   {
      //     opacity: 0,
      //     duration: 1.8,
      //     ease: 'power4.out',
      //   },
      //   '-=1.4'
      // )
      // .from(
      //   '.about__content__me',
      //   {
      //     duration: 1.8,
      //     opacity: 0,
      //     ease: 'power4.out',
      //   },
      //   '-=1'
      // );
    }, 100);
  };
}

export default Tools;
