import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import req from '../../utils/request';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemons {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemons[];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <div className={s.root}>
        <div className={s.layout}>
          <div className={s.searchFilter}>
            <Heading type="h3">
              {data.total} <b>Pokemons</b> for you to choose your favorite
            </Heading>
            <input type="text" className={s.searchInput} />
          </div>
          <div className={s.pokemons}>
            {data.pokemons.map((item) => (
              <PokemonCard key={item.id} name={item.name} stats={item.stats} types={item.types} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
