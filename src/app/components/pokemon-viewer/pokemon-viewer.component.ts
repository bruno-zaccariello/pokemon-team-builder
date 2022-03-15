import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Pokemon, PokemonFilter } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-viewer',
  templateUrl: './pokemon-viewer.component.html',
  styleUrls: ['./pokemon-viewer.component.css'],
})
export class PokemonViewerComponent implements OnInit {
  public pokemons!: Pokemon[];

  private filters: PokemonFilter = {
    limit: 15,
  };

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.pokemonService
      .get(this.filters)
      .pipe(take(1))
      .subscribe((response) => {
        this.pokemons = response.results;
      });
  }
}
