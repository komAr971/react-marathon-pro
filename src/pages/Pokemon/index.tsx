import React from 'react';
import Heading from '../../components/Heading';

import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';

import s from './Pokemon.module.scss';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<PokemonsRequest>('getPokemon', {}, [], id);

  if (isError || !data) {
    return <div>Something wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.logo}>
          <img src={data.img} alt={data.name} />
        </div>
        <div className={s.info}>
          <Heading type="h3">{data.name}</Heading>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
