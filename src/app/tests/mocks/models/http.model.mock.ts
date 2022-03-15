import { Paginate } from '../../../models/http.model';

export function getPaginateMock<T>(
  results: T[],
  count = 0,
  next = 'next_mock',
  previous = 'previousMock'
): Paginate<T> {
  return {
    count,
    next,
    previous,
    results,
  };
}
