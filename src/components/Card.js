import React from 'react';
import './Card.scss';
import '../main.scss';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card__head'>
          <img className='card__head__img' src={this.props.icon} alt='' />
          <div className='card__head__name'>{this.props.name}</div>
        </div>
        <div className='card__description'>{this.props.description}</div>
      </div>
    );
  }
}

export default Card;
