import React from 'react';
import { ICardConfig } from './Card.model.js';

const Card: React.FC<ICardConfig> = ({ heading, type }: ICardConfig) => {
  return (
    <div className="card px-40">
      <h1 className='card--heading'>Card Component {heading} {type}</h1>
    </div>
  );
};

export default Card;