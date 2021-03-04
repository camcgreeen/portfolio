import React from 'react';
import Card from './Card';
import IconReact from '../images/icon-react.svg';
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
            Tools of <br /> the trade<span>.</span>
          </h2>
          {}
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
          </ul>
        </div>
      </div>
    );
  }
}

export default Tools;
