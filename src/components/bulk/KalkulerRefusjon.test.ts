import '@testing-library/jest-dom';
import kalkulerRefusjon from './KalkulerRefusjon';
import { parseDato } from '../../utils/dato/parseDato';

describe('kalkulerRefusjon', () => {
  const inntekt = '25000';
  const fom = parseDato('01.04.2021');
  const tom = parseDato('14.04.2021');
  it('should calculate', () => {
    expect(kalkulerRefusjon(inntekt, fom, tom)).toBeGreaterThan(0);
  });

  it('should be empty when inntekt is empty', () => {
    expect(kalkulerRefusjon('', fom, fom)).toBe(0);
  });
});
