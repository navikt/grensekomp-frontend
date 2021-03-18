import { parseDato } from './parseDato';
import { toDate } from './toDate';

describe('toDate', () => {
  it('should map toString', () => {
    expect(toDate(parseDato('05.10.2020'))).toBe('2020-10-05');
  });
});
