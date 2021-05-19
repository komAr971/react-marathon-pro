import React from 'react';
import cn from 'classnames';
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

const PokemonCard: React.FC<PokemonCardProps> = ({ name, types, stats, img }) => {
  return (
    <div className={s.root}>
      <div
        className={cn(s.img, {
          [s.fire]: types[0] === 'fire',
          [s.grass]: types[0] === 'grass',
          [s.blaze]: types[0] === 'blaze',
          [s.water]: types[0] === 'water',
          [s.bug]: types[0] === 'bug',
        })}>
        <img src={img} alt={`${name}_logo`} />
      </div>
      <div className={s.pokemonData}>
        <Heading type="h4">{name}</Heading>
        <div className={s.stats}>
          <div>
            <div className={s.statCircle}>{stats.attack}</div>
            <div className={s.statName}>Attack</div>
          </div>
          <div>
            <div className={s.statCircle}>{stats.defense}</div>
            <div className={s.statName}>Defense</div>
          </div>
        </div>
        <div className={s.types}>
          {types.map((item) => (
            <div
              className={cn(s.type, {
                [s.grass]: item === 'grass',
                [s.poison]: item === 'poison',
                [s.fire]: item === 'fire',
                [s.water]: item === 'water',
                [s.bug]: item === 'bug',
                [s.flying]: item === 'flying',
              })}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
