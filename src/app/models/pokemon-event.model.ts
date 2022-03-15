import { Actions } from './event-actions.model';
import { Pokemon } from './pokemon.model';

export class PokemonEvent {
  constructor(public action: Actions, public data: Pokemon) {}
}
