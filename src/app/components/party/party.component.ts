import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Actions } from '../../models/event-actions.model';
import { PartyEvent } from '../../models/party-event.model';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonPartyService } from '../../services/pokemon-party.service';

@Component({
  selector: 'party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
})
export class PartyComponent implements OnInit, OnDestroy {

  private readonly stopObservables = new Subject();

  public pokemons = new Set<Pokemon>();

  constructor(public readonly partyService: PokemonPartyService) { }

  ngOnInit() {
    this.listenEvents();
  }

  public listenEvents(): void {
    this.partyService
      .listenEvents()
      .pipe(takeUntil(this.stopObservables))
      .subscribe((event: PartyEvent) => {
        if (event.action === Actions.add) {
          this.pokemons.add(event.pokemon);
        } else if (event.action === Actions.remove) {
          this.pokemons.delete(event.pokemon);
        }
      });
  }

  ngOnDestroy() {
    this.stopObservables.next(true);
  }
}
