import diffDato, { diffDate } from './diffDato';

describe('diffDato', () => {
  it('should find correct days', () => {
    expect(diffDate(new Date(2021, 3, 1), new Date(2021, 3, 14))).toBe(10);
  });
});
