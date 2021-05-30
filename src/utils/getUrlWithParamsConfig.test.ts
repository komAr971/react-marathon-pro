import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями method, uri с полями: pathname, protocol, host и пустым query, и пустой body', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе получить объект с полями method, uri с полями: pathname, protocol, host и query с полями name равное Pikachu, и пустой body', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemon" и { id: 25 }, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "createPokemon" и { name: "Pikachu" }, на выходе получить объект с полями method, body с полем name равное Pikachu, и объект uri с полями protocol, host, pathname и пустым query', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать два аргумента "updatePokemon" и { id: 25, name: "Raichu" }, на выходе получить объект с полями method, body с полем name равное Riachu, и объект uri с полями protocol, host, pathname и пустым query', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25, name: 'Raichu' });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {
        name: 'Raichu',
      },
    });
  });

  test('Должна принимать два аргумента "deletePokemon" и { id: 25 }, на выходе получить объект с полями method, пустым body, и объект uri с полями protocol, host, pathname и пустым query', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
