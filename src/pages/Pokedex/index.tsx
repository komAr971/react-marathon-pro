import React, { useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import PokeBallPng from './assets/PokeBall.png';

interface IQuery {
  name?: string;
  limit?: number;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <div className={s.root}>
        <div className={s.layout}>
          <div className={s.searchFilter}>
            <Heading type="h3">
              {data && data.total} <b>Pokemons</b> for you to choose your favorite
            </Heading>
            <input type="text" className={s.searchInput} value={searchValue} onChange={handleSearchChange} autoFocus />
          </div>
          <div className={s.pokemons}>
            {isLoading ? (
              <div className={s.loadingBall}>
                <img src={PokeBallPng} alt="Pokeball" />
              </div>
            ) : (
              data &&
              data.pokemons.map((item: PokemonsRequest) => (
                <PokemonCard
                  key={item.id}
                  name={item.name}
                  stats={item.stats}
                  types={item.types}
                  img={item.img}
                  id={item.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
