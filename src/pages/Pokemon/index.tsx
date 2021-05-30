import React from 'react';
import cn from 'classnames';

import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
import LoadingBall from '../../components/LoadingBall';

import s from './Pokemon.module.scss';
import toCapitalizeFirstLetter from '../../example';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading || !data) {
    return (
      <div className={cn(s.root)}>
        <LoadingBall />
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={cn(s.logo, s[data.types[0]])}>
          <img src={data.img} alt={data.name} />
          <div className={s.labelWrap}>
            {data.types.map((type) => (
              <span key={type} className={cn(s.label, s[type])}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className={s.info}>
          <div className={s.titleWrap}>
            <h2 className={s.name}>{toCapitalizeFirstLetter(data.name)}</h2>
            <div className={s.generation}>Generation 1</div>
            <div className={s.id}>{data.id}</div>
          </div>
          <div className={cn(s.abilities, s.box)}>
            <h5>Abilities</h5>
            <span>{data.abilities.join(' - ')}</span>
          </div>
          <div className={cn(s.hpAndExp, s.box)}>
            <div className={s.hp}>
              <h5>Healthy Points</h5>
              <span>1 000 000</span>
              <div className={s.chargeLoader}></div>
            </div>
            <div className={s.exp}>
              <h5>Experience</h5>
              <span>1 000 000</span>
              <div className={s.chargeLoader}></div>
            </div>
          </div>
          <div className={s.stats}>
            <div className={cn(s.statBox, s.box)}>
              <div className={cn(s.stat)}>{data.stats.defense}</div>
              <span>Defense</span>
            </div>
            <div className={cn(s.statBox, s.box)}>
              <div className={cn(s.stat)}>{data.stats.attack}</div>
              <span>Attack</span>
            </div>
            <div className={cn(s.statBox, s.box)}>
              <div className={cn(s.stat)}>{data.stats['special-attack']}</div>
              <span>Sp Attack</span>
            </div>
            <div className={cn(s.statBox, s.box)}>
              <div className={cn(s.stat)}>{data.stats['special-defense']}</div>
              <span>Sp Defense</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
