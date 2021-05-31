import React from 'react';
import cn from 'classnames';

import Heading from '../Heading';
import { PokemonStats, PokemonTypes } from '../../interface/pokemons';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  stats: PokemonStats;
  types: PokemonTypes[];
  img: string;
  onClick: () => any;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, stats, types, img, onClick }) => {
  return (
    <div className={s.root} onClick={onClick}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0]])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
