import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import { PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import { LinkEnum } from '../../routes';
import LoadingBall from '../../components/LoadingBall';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemon';
import { getPokemons, getPokemonsLoading, getPokemonsError, getPokemonsAction } from '../../store/pokemons';

interface IQuery {
  name?: string;
  limit?: number;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 500);

  const data = useSelector(getPokemons);
  const isLoading = useSelector(getPokemonsLoading);
  const isError = useSelector(getPokemonsError);

  useEffect(() => {
    dispatch(getTypesAction());
    dispatch(getPokemonsAction(query, [debouncedValue]));
  }, []);

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
          <div>{isTypesLoading ? <LoadingBall /> : types?.map((item) => <div>{item}</div>)}</div>
          <div className={s.pokemons}>
            {isLoading ? (
              <LoadingBall />
            ) : (
              data &&
              data.pokemons.map((item: PokemonsRequest) => (
                <PokemonCard
                  key={item.id}
                  name={item.name}
                  stats={item.stats}
                  types={item.types}
                  img={item.img}
                  onClick={() => navigate(`${LinkEnum.POKEDEX}/${item.id}`)}
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
