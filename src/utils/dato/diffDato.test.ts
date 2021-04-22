import { diffDate } from './diffDato';

describe('diffDato', () => {
  it('should find correct days', () => {
    expect(diffDate(new Date(2021, 3, 1), new Date(2021, 3, 14))).toBe(10);
  });

  it('should find correct days over three months', () => {
    expect(diffDate(new Date(2021, 2, 29), new Date(2021, 4, 9))).toBe(30);
  });
});
