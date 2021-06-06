import { Dispatch } from 'react';

import { IPokemons } from '../interface/pokemons';
import { IInitialStatePokemons } from './index';
import useData from '../hook/getData';

export enum PokemonsActionTypes {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: IPokemons | null;
}

type ActionTypes = TypesAction;

export interface IStateRequest {
  isLoading: boolean;
  data: null | IPokemons;
  isError: boolean;
}

export interface IPokemonsInitialState {
  pokemons: IStateRequest;
}

const initialState: IPokemonsInitialState = {
  pokemons: {
    isLoading: false,
    data: null,
    isError: false,
  },
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          isLoading: true,
          data: null,
          isError: false,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: action.payload,
          isError: false,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          isError: true,
        },
      };
    default:
      return state;
  }
};

export const getPokemons = (state: IInitialStatePokemons) => state.pokemons.pokemons.data;
export const getPokemonsLoading = (state: IInitialStatePokemons) => state.pokemons.pokemons.isLoading;
export const getPokemonsError = (state: IInitialStatePokemons) => state.pokemons.pokemons.isError;

export const getPokemonsAction = (query: object, deps: any[]) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, deps);
    if (isLoading) {
      dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS });
    }
    if (isError) {
      dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_REJECT });
    }
    dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_RESOLVE, payload: data });
  };
};

export default pokemons;
