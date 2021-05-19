import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonStats {
  [n: string]: number;
}

interface PokemonCardProps {
  name: string;
  stats: IPokemonStats;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, stats, types, img }) => {
  return (
    <div className={s.root}>
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
          <span className={s.label}>{types[0]}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
