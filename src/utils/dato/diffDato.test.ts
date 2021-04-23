import Dato from './Dato';
import diffDato, { diffDate } from './diffDato';

describe('diffDato', () => {
  it('should find correct days', () => {
    expect(diffDate(new Date(2021, 3, 1), new Date(2021, 3, 14))).toBe(10);
  });

  it('should find correct days over three months', () => {
    expect(diffDate(new Date(2021, 2, 29), new Date(2021, 4, 9))).toBe(30);
  });

  it('should find correct days over three months', () => {
    expect(diffDate(new Date(2021, 2, 29), new Date(2051, 4, 9))).toBe(7144);
  });

  it('should return 0 when input is beginning of UNIX time', () => {
    const fraDato: Dato = {
      millis: 0
    };

    const tilDato: Dato = {
      millis: 0
    };
    expect(diffDato(fraDato, tilDato)).toBe(0);
  });

  it('should return 2 when given some fitting timestamps', () => {
    const fraDato: Dato = {
      millis: 1619097526736
    };

    const tilDato: Dato = {
      millis: 1619097726736
    };
    expect(diffDato(fraDato, tilDato)).toBe(2);
  });
});
