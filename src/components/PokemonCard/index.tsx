import React from 'react';
import { navigate } from 'hookrouter';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';
import { LinkEnum } from '../../routes';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface PokemonCardProps {
  name: string;
  stats: IStats;
  types: string[];
  img: string;
  id: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, stats, types, img, id }) => {
  return (
    <div className={s.root} onClick={() => navigate(`${LinkEnum.POKEDEX}/${id}`)}>
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
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
