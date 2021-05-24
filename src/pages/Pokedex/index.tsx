import React, { useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

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
              {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
            </Heading>
            <input type="text" className={s.searchInput} value={searchValue} onChange={handleSearchChange} />
          </div>
          <div className={s.pokemons}>
            {!isLoading &&
              data &&
              data.pokemons.map((item: PokemonsRequest) => (
                <PokemonCard key={item.id} name={item.name} stats={item.stats} types={item.types} img={item.img} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
