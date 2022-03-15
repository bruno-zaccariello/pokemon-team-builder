import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginate } from '../models/http.model';
import { Pokemon, PokemonFilter } from '../models/pokemon.model';
import { urlParamBuilder } from '../utils/core-utils';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(readonly http: HttpClient) {}

  public get(filters: PokemonFilter): Observable<Paginate<Pokemon>> {
    const url = urlParamBuilder(this.BASE_URL, filters);
    return this.http.get<Paginate<Pokemon>>(url);
  }

  public getByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
