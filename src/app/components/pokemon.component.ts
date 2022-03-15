import { Component, OnInit, Input } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonPartyService } from '../../services/pokemon-party.service';
import { PokemonService } from '../../services/pokemon.service';
import { deepCopy } from '../../utils/core-utils';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() editable = false;

  public loading = false;

  public editMode = false;

  constructor(
    public pokemonService: PokemonService,
    public partyService: PokemonPartyService
  ) {}

  public ngOnInit(): void {
    this.loadDetails();
  }

  public loadDetails(): void {
    this.loading = true;
    this.pokemonService
      .getByUrl(this.pokemon.url)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((response) => {
        this.pokemon = response;
      });
  }

  public addToParty(): void {
    this.partyService.addToParty(deepCopy(this.pokemon));
  }

  public removeFromParty(): void {
    this.partyService.removeFromParty(this.pokemon);
  }

  public editNickname(nickname: string): void {
    this.pokemon.nickname = nickname;
    this.toggleEdit();
  }

  public toggleEdit(): void {
    this.editMode = !this.editMode;
  }
}
