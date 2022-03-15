import { Actions } from './event-actions.model';
import { Pokemon } from './pokemon.model';

export class PartyEvent {
  constructor(public action: Actions, public pokemon: Pokemon) {}
}
