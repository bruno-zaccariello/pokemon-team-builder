import { asyncScheduler, of, scheduled } from 'rxjs';
import { PokemonService } from '../../../services/pokemon.service';
import { getPaginateMock } from '../models/http.model.mock';
import { getPokemonMock } from '../models/pokemon.model.mock';

export class MockPokemonService implements Partial<PokemonService> {
  private BASE_URL = 'mockurl';

  public get(filters: any) {
    return scheduled(of(getPaginateMock([getPokemonMock()])), asyncScheduler);
  }

  public getByUrl(url: any) {
    return scheduled(of(getPokemonMock()), asyncScheduler);
  }
}
