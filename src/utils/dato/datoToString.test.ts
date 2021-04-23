import Dato from './Dato';
import datoToString from './datoToString';

describe('datoToString', () => {
  it('should throw an error when input is undefined', () => {
    expect(() => datoToString(undefined)).toThrowError(new Error('År ikke oppgitt'));
  });

  it('should throw an error when year is missing', () => {
    const testdato: Dato = {
      year: 0
    };

    expect(() => datoToString(testdato)).toThrowError(new Error('År ikke oppgitt'));
  });

  it('should throw an error when month is missing', () => {
    const testdato: Dato = {
      year: 2002
    };

    expect(() => datoToString(testdato)).toThrowError(new Error('Måned ikke oppgitt'));
  });

  it('should throw an error when day is missing', () => {
    const testdato: Dato = {
      year: 2002,
      month: 12
    };

    expect(() => datoToString(testdato)).toThrowError(new Error('Dag ikke oppgitt'));
  });

  it('should return a formatted datestring when a valid dato object is given', () => {
    const testdato: Dato = {
      year: 2002,
      month: 12,
      day: 24
    };

    expect(datoToString(testdato)).toBe('2002-12-24');
  });
});
