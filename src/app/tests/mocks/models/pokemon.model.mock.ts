import { Pokemon } from '../../../models/pokemon.model';

export function getPokemonMock(
  id = 1,
  name = 'Bulbasaur',
  types = [getTypeMock('Grass')],
  nickname = name
): Pokemon {
  return {
    id,
    url: 'url_mock',
    name,
    nickname,
    sprites: {
      front_default: 'front_default_mock',
    },
    types: types,
  };
}

export function getTypeMock(name: any) {
  return {
    slot: 0,
    type: {
      name,
      url: 'typeUrl',
    },
  };
}

export function getPokemonFilterMock(limit = 20) {
  return {
    limit,
    offset: 0,
  };
}
