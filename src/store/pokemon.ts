import { Dispatch } from 'react';
import req from '../utils/request';

import { PokemonTypes } from '../interface/pokemons';
import { IStateRequest } from '../interface';
import { IInitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: any[];
}

type ActionTypes = TypesAction;

export interface IPokemonInitialState {
  types: IStateRequest<string>;
}

const initialState: IPokemonInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemon = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemon.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemon.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<PokemonTypes[]>('getPokemonTypes');
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default pokemon;
