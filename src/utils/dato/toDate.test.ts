import { parseDato } from './parseDato';
import { toDate } from './toDate';

describe('toDate', () => {
  it('should map toString', () => {
    expect(toDate(parseDato('05.10.2020')).getTime()).toBe(new Date(2020, 9, 5).getTime());
  });
});
