import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Actions } from '../models/event-actions.model';
import { PartyEvent } from '../models/party-event.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonPartyService {

  private readonly PARTY_LIMIT = 6;
  private readonly PARTY_EMPTY_SIZE = 0;

  private $events = new Subject<PartyEvent>();

  private _party: Set<Pokemon> = new Set();

  public partyFull = false;
  public partyEmpty = false;

  get party(): Set<Pokemon> {
    return this._party;
  }

  constructor() { }

  private checkParty(): void {
    this.partyFull = this._party.size === this.PARTY_LIMIT;
    this.partyEmpty = this._party.size === this.PARTY_EMPTY_SIZE;
  }

  public listenEvents(): Observable<PartyEvent> {
    return this.$events.asObservable();
  }

  public pokemonInParty(pokemon: Pokemon): boolean {
    const party = Array.from(this._party);
    return Boolean(party.find((p) => p.id === pokemon.id));
  }

  public addToParty(pokemon: Pokemon): void {
    if (this.partyFull || this.pokemonInParty(pokemon)) {
      return;
    }
    this._party.add(pokemon);
    this.$events.next(new PartyEvent(Actions.add, pokemon));
    this.checkParty();
  }

  public removeFromParty(pokemon: Pokemon): void {
    if (this.partyEmpty || !this.pokemonInParty(pokemon)) {
      return;
    }
    this._party.delete(pokemon);
    this.$events.next(new PartyEvent(Actions.remove, pokemon));
    this.checkParty();
  }
}
