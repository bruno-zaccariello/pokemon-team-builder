export class Pokemon {
  id!: number;
  url!: string;
  name!: string;
  nickname!: string;
  sprites!: {
    front_default: string;
  };
  types!: Type[];
}

export class Type {
  slot!: number;
  type!: {
    name: string;
    url: string;
  };
}

export class PokemonFilter {
  limit?: number;
  offset?: number;
}
