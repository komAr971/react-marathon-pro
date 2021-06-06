import { combineReducers } from 'redux';
import pokemon, { IPokemonInitialState } from './pokemon';
import pokemons, { IPokemonsInitialState } from './pokemons';

export interface IInitialState {
  pokemon: IPokemonInitialState;
}

export interface IInitialStatePokemons {
  pokemons: IPokemonsInitialState;
}

const createRootReducer = () =>
  combineReducers({
    pokemon,
    pokemons,
  });

export default createRootReducer;
