import { datoToString } from './datoToString';
import { parseDato } from './parseDato';

describe('toString', () => {
  it('should map toString', () => {
    expect(datoToString(parseDato('05.10.2020'))).toBe('2020-10-05');
    expect(datoToString(parseDato('6.2.2020'))).toBe('2020-02-06');
  });

  it('should not map toString', () => {
    expect(() => {
      datoToString(parseDato(''));
    }).toThrowError();
    expect(() => {
      datoToString(parseDato('55.01.2020'));
    }).toThrowError();
    expect(() => {
      datoToString(parseDato('55.aa.2020'));
    }).toThrowError();
  });

  it('should not map when missing values', () => {
    expect(() => {
      datoToString({
        month: 1,
        day: 5
      });
    }).toThrowError();
    expect(() => {
      datoToString({
        year: 2020,
        day: 5
      });
    }).toThrowError();
    expect(() => {
      datoToString({
        year: 2020,
        month: 1
      });
    }).toThrowError();
    expect(() => {
      datoToString({});
    }).toThrowError();
  });
});
